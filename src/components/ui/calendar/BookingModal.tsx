"use client";

import { useState, useEffect } from "react";
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  ExternalLink,
  Download,
  Check,
} from "lucide-react";
import {
  createGoogleCalendarUrl,
  downloadICSFile,
  getUserTimezoneLabel,
  MeetingDetails,
} from "@/lib/calendarUtils";

interface BookingModalProps {
  selectedDate: Date;
  selectedTimeSlot: string;
  onClose: () => void;
}

export default function BookingModal({
  selectedDate,
  selectedTimeSlot,
  onClose,
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const userTimezone = getUserTimezoneLabel();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const getMeetingDetails = (): MeetingDetails => ({
    name: name.trim() || "Guest",
    email: email.trim(),
    notes: notes.trim(),
    date: selectedDate,
    timeSlot: selectedTimeSlot,
  });

  const validate = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError("Please provide a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleOpenGoogleCalendar = () => {
    if (!validate()) return;
    const url = createGoogleCalendarUrl(getMeetingDetails());
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownloadICS = () => {
    if (!validate()) return;
    downloadICSFile(getMeetingDetails());
  };

  const handleCopyLink = () => {
    if (!validate()) return;
    const url = createGoogleCalendarUrl(getMeetingDetails());
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-white flex flex-col gap-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-1.5 border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Schedule 30-Min Call
          </h2>
          <p className="text-xs sm:text-sm text-white/60">
            Confirm your details to generate a calendar request.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-white/90">
            <CalendarIcon className="w-4 h-4 text-emerald-400" />
            <span className="font-medium">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span className="font-medium">
              {selectedTimeSlot} ({userTimezone})
            </span>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          {error && (
            <p className="text-xs text-red-400 bg-red-950/40 border border-red-500/30 p-2.5 rounded-xl">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-xs font-semibold text-white/80 uppercase tracking-wider"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="FirstName LastName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-semibold text-white/80 uppercase tracking-wider"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className="bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="notes"
              className="text-xs font-semibold text-white/80 uppercase tracking-wider"
            >
              Topic / Notes (Optional)
            </label>
            <textarea
              id="notes"
              rows={3}
              placeholder="Brief description of project or collaboration topic..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleOpenGoogleCalendar}
              className="w-full flex-1 flex items-center justify-center gap-2 bg-white text-black font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg"
            >
              <span>Add to Google Calendar</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleDownloadICS}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-4 py-3 rounded-xl border border-white/15 transition-colors cursor-pointer"
              title="Download .ics event file"
            >
              <Download className="w-4 h-4" />
              <span>Download .ics</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopyLink}
            className="text-xs text-white/60 hover:text-white transition-colors text-center pt-1 underline cursor-pointer flex items-center justify-center gap-1"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">
                  Google Calendar Link Copied!
                </span>
              </>
            ) : (
              "Copy Google Calendar Link"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
