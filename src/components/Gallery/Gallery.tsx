import { Box } from "@mui/system";
import { GalleryItem } from "./GalleryItem";
import { Card, getCardList, CardListData } from "../../services/cardsService";
import { FC, useEffect, useMemo, useState } from "react";

type CardList = {
  state: "LOADING" | "LOADED";
  data: CardListData;
};

export const Gallery: FC = () => {
  const [cardList, setCardList] = useState<CardList>({
    state: "LOADING",
    data: {
      items: [],
    },
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await getCardList();
      setCardList({
        state: "LOADED",
        data: data,
      });
    };
    loadData();
  }, []);

  const mapItems = (item: Card) => {
    return <GalleryItem key={item.id} card={item} />;
  };

  return (
    <Box pt={2}>
      <h1>
        Moonpig Card Gallery <span>({cardList.data.items.length})</span>
      </h1>
      <Box display="flex" flexWrap="wrap" alignContent="flex-start" p="16px">
        {cardList.data.items.map(mapItems)}
      </Box>
    </Box>
  );
};
