import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("should render the footer", () => {
  render(<Footer />);

  const footerReference = screen.getAllByText("Moonpig technical assessment.");

  expect(footerReference).toHaveLength(1);
});
