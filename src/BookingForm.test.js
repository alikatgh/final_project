import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the "Choose date" label', () => {
  const mockSubmitForm = jest.fn();

  const availableTimes = {
    loading: false,
    times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
  };

  render(
    <BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />
  );

  const dateLabelElement = screen.getByText("Choose date");
  expect(dateLabelElement).toBeInTheDocument();
});
