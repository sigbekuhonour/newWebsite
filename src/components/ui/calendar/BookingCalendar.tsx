"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalendarIcon,
} from "lucide-react";
import { getAvailableTimeSlots } from "@/lib/calendarUtils";
import BookingModal from "./BookingModal";

export default function BookingCalendar() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(
    today.getDate(),
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
    setSelectedTimeSlot(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
    setSelectedTimeSlot(null);
  };

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const selectedDateObj =
    selectedDay !== null ? new Date(year, month, selectedDay) : null;
  const availableSlots = selectedDateObj
    ? getAvailableTimeSlots(selectedDateObj)
    : [];
  const isSelectedWeekend = selectedDateObj
    ? selectedDateObj.getDay() === 0 || selectedDateObj.getDay() === 6
    : false;

  return (
    <div className="bg-white text-black rounded-3xl p-5 sm:p-6 shadow-2xl w-full max-w-85 sm:max-w-90 flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <button
          onClick={handlePrevMonth}
          className="p-1.5 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
          aria-label="Previous Month"
        >
          <ChevronLeft className="w-5 h-5 text-neutral-700" />
        </button>

        <div className="flex items-center gap-2">
          <select
            value={month}
            onChange={(e) => {
              setCurrentDate(new Date(year, parseInt(e.target.value), 1));
              setSelectedDay(null);
              setSelectedTimeSlot(null);
            }}
            className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1.5 rounded-lg outline-none cursor-pointer hover:bg-neutral-200 transition-colors"
          >
            {months.map((m, idx) => (
              <option key={m} value={idx}>
                {m}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => {
              setCurrentDate(new Date(parseInt(e.target.value), month, 1));
              setSelectedDay(null);
              setSelectedTimeSlot(null);
            }}
            className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1.5 rounded-lg outline-none cursor-pointer hover:bg-neutral-200 transition-colors"
          >
            {Array.from(
              { length: 4 },
              (_, i) => new Date().getFullYear() - 1 + i,
            ).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleNextMonth}
          className="p-1.5 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
          aria-label="Next Month"
        >
          <ChevronRight className="w-5 h-5 text-neutral-700" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {daysOfWeek.map((day) => (
          <span
            key={day}
            className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <span key={`empty-${i}`} className="h-8 w-8" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const dayDateObj = new Date(year, month, dayNum);
          dayDateObj.setHours(0, 0, 0, 0);

          const isPast = dayDateObj < today;
          const isToday = dayDateObj.getTime() === today.getTime();
          const isSelected = selectedDay === dayNum;

          return (
            <button
              key={dayNum}
              disabled={isPast}
              onClick={() => {
                setSelectedDay(dayNum);
                setSelectedTimeSlot(null);
              }}
              className={`h-8 w-8 text-xs font-medium rounded-full flex items-center justify-center transition-all ${
                isPast
                  ? "text-neutral-300 cursor-not-allowed line-through"
                  : isSelected
                    ? "bg-neutral-900 text-white shadow-md font-bold cursor-pointer scale-105"
                    : isToday
                      ? "bg-neutral-200 text-neutral-900 font-bold border border-neutral-400 cursor-pointer"
                      : "text-neutral-700 hover:bg-neutral-100 cursor-pointer"
              }`}
            >
              {dayNum}
            </button>
          );
        })}
      </div>

      {selectedDateObj && (
        <div className="flex flex-col gap-2.5 pt-3 border-t border-neutral-100 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              <span>Available Times (30m)</span>
            </div>
            <span className="text-[10px] text-neutral-500 font-medium">
              {isSelectedWeekend ? "Weekend (Post 12pm)" : "Weekday (Post 5pm)"}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 max-h-36 overflow-y-auto pr-1">
            {availableSlots.map((slot) => {
              const isSlotSelected = selectedTimeSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => setSelectedTimeSlot(slot)}
                  className={`py-1.5 px-2 text-[11px] font-medium rounded-lg transition-all cursor-pointer text-center ${
                    isSlotSelected
                      ? "bg-neutral-900 text-white font-bold shadow-sm"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>

          {selectedTimeSlot ? (
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-1 w-full bg-neutral-900 hover:bg-black text-white text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5"
            >
              <CalendarIcon className="w-4 h-4" />
              <span>Request Meeting for {selectedTimeSlot}</span>
            </button>
          ) : (
            <p className="text-[11px] text-neutral-400 text-center italic py-1">
              Select a time slot above to request meeting
            </p>
          )}
        </div>
      )}

      {isModalOpen && selectedDateObj && selectedTimeSlot && (
        <BookingModal
          selectedDate={selectedDateObj}
          selectedTimeSlot={selectedTimeSlot}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
