import { useState, useEffect, useRef } from "react";
import "./App.css";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button className="btn" onClick={prevSlide}>
        ◀
      </button>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="image"
      />

      <button className="btn" onClick={nextSlide}>
        ▶
      </button>
    </div>
  );
}

export default function App() {
  const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1020/800/400",
  ];

  return (
    <div className="app">
      <h1>Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}