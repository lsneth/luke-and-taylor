import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from "../images/images";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

export default function App() {
  const [rowHeight, setRowHeight]=useState(180)
  const [index, setIndex] = useState(-1);


  const handleClick = (index, item) => setIndex(index);

  return (
    <div className='gallery-container'>
      <Gallery
        margin={1}
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={rowHeight}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}