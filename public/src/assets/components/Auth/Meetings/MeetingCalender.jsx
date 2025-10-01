import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function MeetingCalendar() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={[{ title: "Mentorship", date: "2025-10-05" }]}
      />
    </div>
  );
}
