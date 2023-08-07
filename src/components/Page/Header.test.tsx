import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("should render the navigation menu", () => {
  render(<Header />);

  const homeLink = screen.getByRole("link", { name: "Home" });
  const contactLink = screen.getByRole("link", { name: "Contact" });

  expect(homeLink).toHaveAttribute("href", "/");
  expect(contactLink).toHaveAttribute("href", "#");
});
