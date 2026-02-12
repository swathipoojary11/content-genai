"use client";
import { useState } from "react";

export default function Page() {
  const [view, setView] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const year = view.getFullYear();
  const month = view.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  function toISODate(d) {
    return new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate()
    )
      .toISOString()
      .slice(0, 10);
  }

  function openModal(date) {
    setSelectedDate(date);
    setShowModal(true);
  }

  function addEvent(e) {
    e.preventDefault();
    if (!title) return;

    setEvents((prev) => {
      const list = prev[selectedDate] || [];
      return {
        ...prev,
        [selectedDate]: [...list, { title, time }],
      };
    });

    setTitle("");
    setTime("");
  }

  return (
    <div style={{ maxWidth: 900, margin: "20px auto", fontFamily: "Arial" }}>
      <h1>AI Content Calendar</h1>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => setView(new Date(year, month - 1))}>
          ◀
        </button>

        <strong>
          {view.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </strong>

        <button onClick={() => setView(new Date(year, month + 1))}>
          ▶
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gap: 8,
          marginTop: 16,
        }}
      >
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dateStr = toISODate(new Date(year, month, i + 1));
          return (
            <div
              key={i}
              onClick={() => openModal(dateStr)}
              style={{
                background: "#fff",
                padding: 10,
                minHeight: 90,
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              <div style={{ fontWeight: 600 }}>{i + 1}</div>

              {(events[dateStr] || []).map((ev, idx) => (
                <div
                  key={idx}
                  style={{
                    fontSize: 12,
                    background: "#0f62fe",
                    color: "#fff",
                    marginTop: 4,
                    padding: "2px 4px",
                    borderRadius: 4,
                  }}
                >
                  {ev.time} {ev.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 10,
              width: 400,
            }}
          >
            <h3>{selectedDate}</h3>

            {(events[selectedDate] || []).map((ev, i) => (
              <div key={i}>
                {ev.time} — {ev.title}
              </div>
            ))}

            <form onSubmit={addEvent}>
              <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "100%", marginTop: 8 }}
                required
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ width: "100%", marginTop: 8 }}
                required
              />
              <button
                type="submit"
                style={{
                  marginTop: 10,
                  width: "100%",
                  background: "#0f62fe",
                  color: "#fff",
                  padding: 8,
                  border: "none",
                  borderRadius: 6,
                }}
              >
                Add Event
              </button>
            </form>

            <button
              onClick={() => setShowModal(false)}
              style={{ marginTop: 10 }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
