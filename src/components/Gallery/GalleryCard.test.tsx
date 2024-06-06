import { render, screen } from "@testing-library/react";
import { GalleryCard } from "./GalleryCard";
import userEvent from "@testing-library/user-event";
import React from "react";

test("should fire the selectCard event when the box is selected", async () => {
  const mockSelectCard = jest.fn();
  render(
    <GalleryCard
      selectCard={mockSelectCard}
      card={{
        id: "1",
        images: [{ alt: "alt", url: "url" }],
        price: 1,
        title: "title",
      }}
    />
  );

  const image = screen.getByTestId("gallery-item");
  await userEvent.click(image);
  expect(mockSelectCard).toHaveBeenCalled();
});
