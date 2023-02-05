import { useEffect, useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { images } from '../images/gallery-images'
import Hero from '../components/Hero'


export default function Photos() {
  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }))

  const [rowHeight, setRowHeight]=useState(180)
  const [index, setIndex] = useState(-1)

  const onresize = function() {
    if (document.body.clientWidth<=600) setRowHeight(document.body.clientWidth*.5)
    else setRowHeight(300)
  }
  window.addEventListener('resize', onresize)

  const handleClick = (index, item) => setIndex(index)

  useEffect(()=>onresize(),[])

  return (
    <div>
      <Hero/>
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
  )
}