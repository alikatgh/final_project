import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the "Choose date" label', () => {
  render(<BookingForm />);
  const dateLabelElement = screen.getByText("Choose date");
  expect(dateLabelElement).toBeInTheDocument();
});
