import React, { useState } from "react";
import Block from "./block"; 
import "./style.css";

const Slideshow = ({ blocks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return blocks.length - 1; // Move to the last slide
      } else {
        return prevIndex - 1; // Move to the previous slide
      }
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === blocks.length - 1) {
        return 0; // Move to the first slide
      } else {
        return prevIndex + 1; // Move to the next slide
      }
    });
  };

  const getIndex = (index) => {
    return (index + blocks.length) % blocks.length;
  };

  return (
    <div className="slideshow">
      <button onClick={prevSlide} className="nav-button">
        Previous
      </button>
      <div className="block-container">
        <Block
          city={blocks[getIndex(currentIndex)].city}
          price={blocks[getIndex(currentIndex)].price}
          imgg={blocks[getIndex(currentIndex)].imgg}
          dept={blocks[getIndex(currentIndex)].dept}
        />
        <Block
          city={blocks[getIndex(currentIndex + 1)].city}
          price={blocks[getIndex(currentIndex + 1)].price}
          imgg={blocks[getIndex(currentIndex + 1)].imgg}
          dept={blocks[getIndex(currentIndex + 1)].dept}
        />
        <Block
          city={blocks[getIndex(currentIndex + 2)].city}
          price={blocks[getIndex(currentIndex + 2)].price}
          imgg={blocks[getIndex(currentIndex + 2)].imgg}
          dept={blocks[getIndex(currentIndex + 2)].dept}
        />
      </div>
      <button onClick={nextSlide} className="nav-button">
        Next
      </button>
    </div>
  );
};

export default Slideshow;
