import { Box } from "@mui/system";
import { CardMedia, Card as MUICard } from "@mui/material";
import { FC } from "react";
import { Card } from "@/services/cards";

export const GalleryItem: FC<{ card: Card }> = ({ card }) => {
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
