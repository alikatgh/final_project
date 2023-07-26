import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    dispatch({ type: "UPDATE_TIMES", date: event.target.value });
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes ? (
          availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))
        ) : (
          <option>Loading...</option>
        )}
      </select>

      <label htmlFor="res-guests">Number of guests</label>
      <input
        type="number"
        id="res-guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="res-occasion">Occasion</label>
      <input
        type="text"
        id="res-occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      />

      <button type="submit">Submit reservation</button>
    </form>
  );
}

export default BookingForm;
