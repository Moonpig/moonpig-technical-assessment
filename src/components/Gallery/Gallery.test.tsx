import { render, screen } from "@testing-library/react";
import { Gallery } from "./Gallery";
import { CardListData } from "../../services/cardsService";

const product1AltText = "Front of first card";
const product1Url = "image1.jpg";
const product2AltText = "Front of second card";
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
        images: [{ alt: product2AltText }],
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

  const productImage = screen.getByAltText(product1AltText);

  expect(productImage).toHaveAttribute("src", product1Url);
});
