import { act, render, screen, waitFor, within } from "@testing-library/react";
import { Gallery } from "./Gallery";
import { CardListData } from "../../services/cardsService";
import userEvent from "@testing-library/user-event";
import React from "react";

const product1AltText = "Front of first card";
const product1Url = "image1.jpg";
const product2AltText = "Front of second card";
const product2Url = "image2.jpg";

jest.mock("../../services/cardsService", () => ({
  ...jest.requireActual("../../services/cardsService"),
  getCardList: jest.fn().mockResolvedValue({
    items: [
      {
        id: "9f9d4bc5-5d84-46f0-bb28-55f4da3d95c6",
        images: [{ url: product1Url, alt: product1AltText }],
        price: 1.11,
        title: "Card 1",
      },
      {
        id: "765ee5c1-ba6b-4b88-8dae-6b79453660a6",
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

test("open and close the modal", async () => {
  const title = "Birthday card";
  const price = 3.79;
  const frontOfCard = "Front of first card";

  render(<Gallery />);

  const productButton = await screen.findByRole("img", {
    name: frontOfCard,
  });

  await act(() => userEvent.click(productButton));

  const modal = await waitFor(() => screen.getByTestId("gallery-modal"));

  expect(
    await within(modal).findByRole("heading", {
      name: title,
    })
  ).toBeInTheDocument();

  expect(await within(modal).findByText(`£${price}`)).toBeInTheDocument();

  const closeButton = screen.getByTestId("CloseIcon");

  await act(() => userEvent.click(closeButton));

  expect(screen.queryByTestId("gallery-modal")).not.toBeInTheDocument();
});
