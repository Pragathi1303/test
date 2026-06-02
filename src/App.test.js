import { render, screen } from "@testing-library/react";
import Home from "./Pages/Home";

test("renders home page content", () => {
  render(<Home />);
  expect(screen.getByText(/College Management, made simple\./i)).toBeTruthy();
});




