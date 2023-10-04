import { Box } from "@mui/system";
import { CardMedia, Card as MUICard } from "@mui/material";
import React, { FC } from "react";
import { Card } from "@/services/cardsService";

export const GalleryCard: FC<{ card: Card }> = ({ card }) => {
  return (
    <Box width={{ xs: "100%", sm: "200px" }} mx="auto" mb="16px">
      <MUICard>
        <CardMedia
          component="img"
          image={card.images[0].url}
          alt={card.images[0].alt}
          draggable={false}
        />
      </MUICard>
    </Box>
  );
};
