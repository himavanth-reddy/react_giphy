import GifItem from "./GifItem";
import { Gif as GifType } from "../api";
type propsType = {
  gifs: GifType[];
};
const GifList = ({ gifs }: propsType) => {
  return (
    <div className="gif-list">
      {gifs.map((gif: GifType) => (
        <GifItem gif={gif} key={gif.id} />
      ))}
    </div>
  );
};

export default GifList;
