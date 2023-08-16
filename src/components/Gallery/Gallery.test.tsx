import { render, screen } from "@testing-library/react";
import { Gallery } from "./Gallery";
import { CardListData } from "../../services/cardsService";
import React from "react";

const product1AltText = "Front of first card";
const product1Url = "image1.jpg";
const product2AltText = "Front of second card";
const product2Url = "image2.jpg";

jest.mock("../../services/cardsService", () => ({
  getCardList: jest.fn().mockResolvedValue({
    items: [
      {
        id: "1",
        images: [{ url: product1Url, alt: product1AltText }],
        price: 1.11,
        title: "Card 1",
      },
      {
        id: "2",
        images: [{ url: product2Url, alt: product2AltText }],
        price: 2.22,
        title: "Card 2",
      },
    ],
  } as CardListData),
}));

test("should render gallery items", async () => {
  render(<Gallery />);

  expect(
    await screen.findByRole("heading", { name: "Moonpig Card Gallery (2)" })
  ).toBeInTheDocument();

  const product1Image = screen.getByAltText(product1AltText);
  const product2Image = screen.getByAltText(product2AltText);

  expect(product1Image).toHaveAttribute("src", product1Url);
  expect(product2Image).toHaveAttribute("src", product2Url);
});
