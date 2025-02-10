// src/pages/Calendar.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default calendar styles
import "../CalendarPage.css"; // Import our custom styles

// Helper function to check if two dates are the same (ignoring time)
function isSameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function CalendarPage() {
  // State for the selected date
  const [date, setDate] = useState(new Date());
  
  // State for the events array (initial events as sample data)
  const [events, setEvents] = useState([
    { date: new Date(2023, 1, 14), title: "Team Meeting", description: "Discuss project updates at 10 AM" },
    { date: new Date(2023, 1, 15), title: "Doctor Appointment", description: "Visit Dr. Smith at 2 PM" },
    { date: new Date(2023, 1, 15), title: "Lunch with Alex", description: "At local restaurant at 12:30 PM" },
    { date: new Date(2023, 1, 16), title: "Project Deadline", description: "Submit final report" }
  ]);
  
  // State for the new event form
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");

  // Filter events for the selected date
  const eventsForSelectedDate = events.filter((event) => isSameDay(event.date, date));

  // Handle form submission to add a new event
  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEventTitle.trim() === "") return;
    
    const newEvent = {
      date: date,
      title: newEventTitle,
      description: newEventDescription,
    };
    setEvents([...events, newEvent]);
    setNewEventTitle("");
    setNewEventDescription("");
  };

  // Handle deletion of an event (by index)
  const handleDeleteEvent = (indexToDelete) => {
    setEvents(events.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="calendar-page">
      <h1>Calendar</h1>

      {/* Calendar widget */}
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      
      <h2>Events on {date.toDateString()}</h2>
      
      {/* Event Form */}
      <div className="event-form">
        <h3>Add New Event</h3>
        <form onSubmit={handleAddEvent}>
          <input
            type="text"
            placeholder="Event Title"
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Event Description"
            value={newEventDescription}
            onChange={(e) => setNewEventDescription(e.target.value)}
          ></textarea>
          <button type="submit">Add Event</button>
        </form>
      </div>
      
      {/* Event List */}
      <div className="event-list">
        {eventsForSelectedDate.length > 0 ? (
          <ul>
            {eventsForSelectedDate.map((event, index) => (
              <li key={index} className="event-item">
                <div>
                  <strong>{event.title}</strong>
                  <p>{event.description}</p>
                </div>
                <button onClick={() => handleDeleteEvent(index)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events for this date.</p>
        )}
      </div>
    </div>
  );
}

export default CalendarPage;
