export type GetCardsList = () => Promise<CardListData>;

export type Card = {
  id: string;
  title: string;
  price: number;
  images: { url?: string; alt: string }[];
};

export type CardListData = {
  items: Card[];
};

export const API_BASE_URL = "http://localhost:3000/cards";

export const getCardList: GetCardsList = async () => {
  const url = `${API_BASE_URL}/data.json`;

  const response = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  const json = await response.json();

  return { items: json.items };
};
