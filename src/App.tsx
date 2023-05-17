import { useState } from "react";
import SearchBar from "./components/SearchBar";
import GifList from "./components/GifList";
import "./styles/index.scss";
type Gif = {
  id: string;
  title: string;
  url: string;
  type: string;
};
function App(): JSX.Element {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const handleClick = (data: Gif[]) => {
    setGifs(data);
  };

  return (
    <main>
      <SearchBar onData={handleClick} />
      <GifList gifs={gifs} />
    </main>
  );
}

export default App;
