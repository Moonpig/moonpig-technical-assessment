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

export const API_BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/moonpig-spike/moonpig-spike-tech-test-frontend-web/main/public/cards";

export const getCardList: GetCardsList = async () => {
  const url = `${API_BASE_URL}/data.json?token=${process.env.REACT_APP_GITHUB_TOKEN}`;

  const response = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  const json = await response.json();

  return { items: json.items };
};