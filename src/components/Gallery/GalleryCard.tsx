import React from "react";
import { Box } from "@mui/system";
import { CardMedia, Card as MUICard } from "@mui/material";
import { FC } from "react";
import { Card } from "../../services/cardsService";

export const GalleryCard: FC<{ card: Card; selectCard: () => void }> = ({
  card,
  // Selecting the card will open the modal in the Gallery component
  selectCard,
}) => {
  return (
    <Box
      width={{ xs: "100%", sm: "200px" }}
      mx="auto"
      mb="16px"
      onClick={() => {
        selectCard();
      }}
    >
      <MUICard>
        <CardMedia
          data-testid="gallery-item"
          component="img"
          image={card.images[0].url}
          alt={card.images[0].alt}
          draggable={false}
        />
      </MUICard>
    </Box>
  );
};
