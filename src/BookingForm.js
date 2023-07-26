import React, { useState } from "react";

function BookingForm({ availableTimes, submitForm }) {
  const [formData, setFormData] = useState({
    numberOfGuests: "",
    date: "",
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    // Check if form is valid here and set formIsValid state
    if (formData.numberOfGuests > 0 && formData.date !== "") {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      console.log("Form is not valid. Not submitting.");
      return;
    }
    console.log("Form is valid. Submitting...");
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of guests:
        <input
          type="number"
          min="1"
          name="numberOfGuests"
          required
          value={formData.numberOfGuests}
          onChange={handleChange}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <button type="submit" disabled={!formIsValid}>
        Submit
      </button>
    </form>
  );
}

export default BookingForm;
