import React, { useState } from "react";
import courses from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Course = () => {
  const [index, setIndex] = useState(0);
  const { info, name, image, price } = courses[index];
  const [readMore, setReadMore] = useState(false);

  const checkNumber = (number) => {
    if (number > courses.length - 1) {
      return 0;
    }
    if (number < 0) {
      return courses.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((currentIndex) => checkNumber(currentIndex - 1));
  };

  const nextPerson = () => {
    setIndex((currentIndex) => checkNumber(currentIndex + 1));
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="single-course">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <footer>
        <div className="course-info">
          <h4>{name}</h4>
          <h4 className="course-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.slice(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? (
              <i
                class="em em-point_left"
                aria-label="WHITE LEFT POINTING BACKHAND INDEX"
              ></i>
            ) : (
              <i
                class="em em-point_right"
                aria-label="WHITE RIGHT POINTING BACKHAND INDEX"
              ></i>
            )}
          </button>
        </p>
        <div className="button-container">
          <button className="prev" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="random-btn" onClick={randomPerson}>
            surprise me
          </button>
          <button className="next" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Course;
