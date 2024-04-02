import style from "./carousel.module.scss";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import { useState } from "react";

function Carousel({ accommodationData }) {
  const slides = accommodationData.pictures;
  const slideLength = slides.length;
  //state
  const [currentSlide, setCurrentSlide] = useState(0);

  //behavior
  function previousSlide() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(slides.length - 1);
    }
  }

  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }

  //render
  //if only one slide
  if (slideLength === 1) {
    return (
      <div className={style.component}>
        <div
          className={style.slide}
          style={{ backgroundImage: `url(${slides[0]})`, width: "100%" }}
        ></div>
      </div>
    );
  }

  //if more than one slide
  return (
    <div className={style.component}>
      <button className={style.arrowLeft} onClick={previousSlide}>
        <img src={arrowLeft} alt="previous slide" />
      </button>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? style.currentSlide : style.slide}
          style={{ backgroundImage: `url(${slide})` }}
        >
          <p className={style.number}>
            {index + 1}/{slideLength}
          </p>
        </div>
      ))}
      <button className={style.arrowRight} onClick={nextSlide}>
        <img src={arrowRight} alt="next slide" />
      </button>
    </div>
  );
}

export default Carousel;
