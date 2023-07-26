import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import BookingForm from "./BookingForm";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

function Main() {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00"]; // replace with actual data

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        // Logic to update times based on action.date
        return state; // replace with updated state
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}

export default Main;
