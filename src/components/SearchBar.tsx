import { useState } from "react";
import { Gif } from "../api"; // import Gif type
import { fetchGifs, fetchTrendingGifs } from "../api";
interface Props {
  onData: (data: Gif[]) => void;
}
const SearchBar = ({ onData }: Props) => {
  const [query, setQuery] = useState<string>("");
  const [position, setPosition] = useState(true);
  const searchGifs = async () => {
    const gifArray = await fetchGifs(query);
    onData(gifArray);
    setPosition(false);
  };

  const fetchTrending = async () => {
    const gifArray = await fetchTrendingGifs();
    onData(gifArray);
    setPosition(false);
  };

  return (
    <div
      className={position ? "search-container-center" : "search-container-top"}
    >
      <div className="search">
        <input
          className="search-input"
          name="search-input"
          type="text"
          placeholder="GIF-fy your thoughts!"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className="search-button"
          //   disabled={query ? false : true}
          onClick={query ? searchGifs : fetchTrending}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
