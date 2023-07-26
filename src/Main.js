import React, { useReducer, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BookingForm from "./BookingForm";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import { fetchAPI } from "./api";
import ConfirmedBooking from "./ConfirmedBooking";

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, loading: false, times: action.payload };
    case "FETCH_TIMES":
      return { ...state, loading: true };
    default:
      return state;
  }
};

function Main() {
  const navigate = useNavigate();
  const initialState = {
    loading: true,
    times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
  };

  const [availableTimes, dispatch] = useReducer(reducer, initialState);

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
  };

  useEffect(() => {
    const fetchTimes = async () => {
      dispatch({ type: "FETCH_TIMES" });
      const times = await fetchAPI(new Date().toISOString().slice(0, 10));
      dispatch({ type: "UPDATE_TIMES", payload: times });
    };

    fetchTimes();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
