import React, { useState } from "react";
import { fetchAPI } from "./api.js"; // replace './api' with the path to your API file

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDateChange = async (event) => {
    setDate(event.target.value);
    dispatch({ type: "LOADING_TIMES" });

    try {
      const times = await fetchAPI(event.target.value);
      dispatch({ type: "UPDATE_TIMES", payload: times });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
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
        {availableTimes.loading ? (
          <option>Loading...</option>
        ) : (
          availableTimes.times.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))
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
