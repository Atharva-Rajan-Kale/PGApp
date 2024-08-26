import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow left" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="Previous" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt={`Slide ${imageIndex + 1}`} />
          </div>
          <div className="arrow right" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" alt="Next" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            &times;
          </div>
        </div>
      )}
      <div className="mainImage">
        <img
          src={images[0]}
          alt="Main slide"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="thumbnails">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt={`Thumbnail ${index + 2}`}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
