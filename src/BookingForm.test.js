import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the "Date" label', () => {
  const mockSubmitForm = jest.fn();

  const availableTimes = {
    loading: false,
    times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
  };

  render(
    <BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />
  );

  const dateLabelElement = screen.getByText("Date:");
  expect(dateLabelElement).toBeInTheDocument();
});

test("Submit button is disabled when form is invalid", () => {
  const mockSubmitForm = jest.fn();

  const availableTimes = {
    loading: false,
    times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
  };

  render(
    <BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />
  );

  const submitButton = screen.getByText("Submit");

  // Check that the button is disabled when the form is invalid
  expect(submitButton).toBeDisabled();
});

test("Calls submitForm when form is valid and submit button is clicked", () => {
  const mockSubmitForm = jest.fn();

  const availableTimes = {
    loading: false,
    times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
  };

  render(
    <BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />
  );

  // Fill out the form fields here
  fireEvent.change(screen.getByLabelText("Number of guests:"), {
    target: { value: "2" },
  });
  fireEvent.change(screen.getByLabelText("Date:"), {
    target: { value: "2023-12-31" },
  });

  // Click the submit button
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  // Check that mockSubmitForm has been called
  expect(mockSubmitForm).toHaveBeenCalled();
});
