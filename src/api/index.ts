import axios from "axios";
export type Gif = {
  id: string;
  title: string;
  url: string;
  type: string;
};
const API_KEY = import.meta.env.VITE_API_KEY;
export const giphyInstance = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchTrendingGifs = async (): Promise<Gif[]> => {
  const {
    data: { data },
  } = await giphyInstance.get("/trending", {
    params: {
      api_key: API_KEY,
      rating: "g",
      limit: "26",
    },
  });
  return data.map(
    (item: any): Gif => ({
      id: item.id,
      title: item.title,
      url: item.images.original.webp,
      type: item.type,
    })
  );
};

export const fetchGifs = async (query: string): Promise<Gif[]> => {
  const {
    data: { data },
  } = await giphyInstance.get("/search", {
    params: {
      api_key: API_KEY,
      rating: "g",
      limit: "26",
      offset: "",
      q: query,
    },
  });
  return data.map(
    (item: any): Gif => ({
      id: item.id,
      title: item.title,
      url: item.images.downsized.url,
      type: item.type,
    })
  );
};
