export interface MeetingDetails {
  name: string;
  email: string;
  notes: string;
  date: Date;
  timeSlot: string; // e.g. "5:00 PM"
}

// Generate available 30-minute time slots based on day of week
// Weekends (Sat=6, Sun=0): Post 12:00 PM (12:00 PM - 8:00 PM)
// Weekdays (Mon-Fri): Post 5:00 PM (5:00 PM - 9:00 PM)
export function getAvailableTimeSlots(date: Date): string[] {
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;

  if (isWeekend) {
    return [
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
      "3:00 PM",
      "3:30 PM",
      "4:00 PM",
      "4:30 PM",
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
    ];
  } else {
    return ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"];
  }
}

// Helper to get visitor's dynamic timezone label for display
export function getUserTimezoneLabel(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) return tz.replace(/_/g, " ");
  } catch {
    // Fallback
  }
  return "Local Time";
}

// Convert date + time slot string to Start & End Date objects (30 min duration)
export function parseStartAndEndDates(
  date: Date,
  timeSlot: string,
): { startDate: Date; endDate: Date } {
  const [time, modifier] = timeSlot.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours < 12) {
    hours += 12;
  }
  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  const startDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours,
    minutes,
  );
  const endDate = new Date(startDate.getTime() + 30 * 60 * 1000); // +30 mins

  return { startDate, endDate };
}

// Format date into ISO string without punctuation for Google Calendar & ICS (YYYYMMDDTHHmmssZ)
function formatToUtcBasicIso(date: Date): string {
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}

// Escape string according to RFC 5545 iCalendar specification
function escapeIcsText(str: string): string {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

// Build Google Calendar Event Pre-filled URL
export function createGoogleCalendarUrl(details: MeetingDetails): string {
  const { startDate, endDate } = parseStartAndEndDates(
    details.date,
    details.timeSlot,
  );
  const startIso = formatToUtcBasicIso(startDate);
  const endIso = formatToUtcBasicIso(endDate);

  const title = `30-Min Call: ${details.name} & Honour Sigbeku`;
  const description = `Meeting Request from ${details.name} (${details.email})\n\nNotes/Topic:\n${details.notes || "No notes provided."}`;
  const location = "Google Meet / Video Call";
  const myEmail = "sigbekuhonour@gmail.com";

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${startIso}/${endIso}`,
    details: description,
    location: location,
    add: `${myEmail},${details.email}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// Download .ics file for Apple Calendar / Outlook / Google Calendar import (RFC 5545 compliant)
export function downloadICSFile(details: MeetingDetails): void {
  const { startDate, endDate } = parseStartAndEndDates(
    details.date,
    details.timeSlot,
  );
  const startIso = formatToUtcBasicIso(startDate);
  const endIso = formatToUtcBasicIso(endDate);
  const dtstamp = formatToUtcBasicIso(new Date());
  const uid = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}@honoursigbeku.com`;

  const title = `30-Min Call: ${details.name} & Honour Sigbeku`;
  const description = `Meeting Request from ${details.name} (${details.email})\n\nNotes/Topic:\n${details.notes || "No notes provided."}`;
  const myEmail = "sigbekuhonour@gmail.com";

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Honour Sigbeku Portfolio//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `DTSTART:${startIso}`,
    `DTEND:${endIso}`,
    `ORGANIZER;CN=${escapeIcsText(details.name)}:mailto:${details.email}`,
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;NOTIFY=TRUE;CN=${escapeIcsText(details.name)}:mailto:${details.email}`,
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Honour Sigbeku:mailto:${myEmail}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `meeting-request-${startIso}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

