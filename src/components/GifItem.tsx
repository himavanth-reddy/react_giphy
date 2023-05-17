import { Gif } from "../api";
type propsType = {
  gif: Gif;
};
const GifItem = ({ gif }: propsType) => {
  return (
    <div className="gif-item">
      <p className="gif-title">{gif.title}</p>
      <img
        className="gif-img"
        src={gif.url}
        alt={`${gif.type}  ${gif.title}`}
      />
    </div>
  );
};

export default GifItem;
