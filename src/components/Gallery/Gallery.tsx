import { Box } from "@mui/system";
import { GalleryCard } from "./GalleryCard";
import {
  Card,
  getCardList,
  CardListData,
  getCard,
} from "../../services/cardsService";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import {
  IconButton,
  Modal,
  Card as MCard,
  Button,
  Link,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CardList = {
  state: "LOADING" | "LOADED";
  data: CardListData;
};

export const Gallery: FC = () => {
  const [selectedCard, selectCard] = useState<string | undefined>(undefined);

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
    return (
      <GalleryCard
        key={item.id}
        card={item}
        selectCard={() => {
          selectCard(item.id);
        }}
      />
    );
  };

  return (
    <Box pt={2}>
      <h1>
        Moonpig Card Gallery <span>({cardList.data.items.length})</span>
      </h1>
      <Box display="flex" flexWrap="wrap" alignContent="flex-start" p="16px">
        {cardList.data.items.map(mapItems)}
      </Box>
      {selectedCard && (
        <PM onClose={() => selectCard(undefined)} id={selectedCard} />
      )}
    </Box>
  );
};

const MyModal = styled.div`
  width: 800px;
  background: white;
  margin: 5vh auto;
  max-width: 80vw;
  padding: 16px;
`;

const PM: FC<{ id: string; onClose: () => void }> = ({ id, onClose }) => {
  const [selectedCard, setSelectedCard] = useState<Card | undefined>(undefined);

  useEffect(() => {
    getCard(id).then((data) => {
      setSelectedCard(data);
    });
  }, [id]);

  return (
    <>
      {
        // eslint-disable-next-line eqeqeq
        selectedCard != undefined && (
          <Modal open={true} onClose={onClose} data-testid={"gallery-modal"}>
            <MyModal>
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
              {/*<Box>
              <h2>{selectedCard.title}</h2>
              <div>£{selectedCard.price}</div>
            Box>*/}
              <Box display={"flex"} flexDirection={"row"}>
                <Box width={{ xs: "100%", sm: "200px" }} mx="auto">
                  <MCard>
                    <Carousel
                      showStatus={false}
                      showIndicators={false}
                      showThumbs={false}
                    >
                      {selectedCard.images.map(({ url }, index) => (
                        <Link key={index} href={"#"} role={"button"}>
                          <CardMedia component="img" image={url} />
                        </Link>
                      ))}
                    </Carousel>
                  </MCard>
                </Box>
                <Box
                  textAlign="center"
                  display={"flex"}
                  flex={"1"}
                  flexDirection={"column"}
                  justifyContent="space-between"
                >
                  <Box>
                    <h2>{selectedCard.title}</h2>
                    <div>£{selectedCard.price}</div>
                  </Box>

                  <Box>
                    <Button>Dismiss</Button>
                  </Box>
                </Box>
              </Box>
            </MyModal>
          </Modal>
        )
      }
    </>
  );
};
