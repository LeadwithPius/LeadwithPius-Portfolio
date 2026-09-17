import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from 'motion/react';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    filter: 'brightness(2)',
    scale: 0.75,
    opacity: 0,
    rotate: direction > 0 ? 30 : -30,
  }),
  center: {
    x: 0,
    filter: 'brightness(1)',
    scale: 1,
    opacity: 1,
    rotate: -3,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    filter: 'brightness(2)',
    scale: 0.75,
    opacity: 0,
    rotate: direction > 0 ? -30 : 30,
    zIndex: 0,
  }),
};

export default function CarouselSlider({ slides }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const dragX = useMotionValue(0);
  const rotate = useTransform(dragX, [-200, 200], [-18, 18]);

  // Cursor-tracked highlight: exposed as CSS custom properties so the glow
  // in .carousel-card-inner::after can follow the pointer with pure CSS.
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mx', `${mx}%`);
    e.currentTarget.style.setProperty('--my', `${my}%`);
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -120) paginate(1);
    else if (info.offset.x > 120) paginate(-1);
  };

  const slide = slides[index];

  return (
    <div className="carousel-slider">
      <div className="carousel-stage">
        <AnimatePresence custom={direction} mode="wait">
          <motion.article
            key={slide.title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', bounce: 0.2, duration: 0.5 },
              scale: { duration: 0.35 },
              opacity: { duration: 0.25 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ rotate, x: dragX }}
            onDragEnd={handleDragEnd}
            className="carousel-card glass"
            aria-label={slide.title}
          >
            <div className="carousel-card-inner" onPointerMove={handlePointerMove}>
              <img src={slide.img} alt={slide.title} draggable="false" />
              {slide.link ? (
                <a
                  href={slide.link}
                  className="carousel-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View project"
                  aria-label={`View ${slide.title}`}
                  onPointerDown={(event) => event.stopPropagation()}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                </a>
              ) : null}
              <div className="carousel-card-body">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                {slide.link ? (
                  <a
                    href={slide.link}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    onPointerDown={(event) => event.stopPropagation()}
                  >
                    View Project
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
        <div className="carousel-backdrop" aria-hidden="true" />
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Choose project">
        {slides.map((item, i) => (
          <motion.button
            type="button"
            key={item.title}
            role="tab"
            aria-label={`Show ${item.title}`}
            aria-selected={i === index}
            animate={{
              scale: i === index ? 1.2 : 1,
              opacity: i === index ? 1 : 0.4,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`carousel-dot${i === index ? ' is-active' : ''}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
