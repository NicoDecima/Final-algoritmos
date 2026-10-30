import React, { useEffect, useState } from 'react'
import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-scroll';
import './home.css';

// Todas las fotos de assets/img/trabajos se cargan solas, en orden por nombre
const modules = import.meta.glob('../../assets/img/trabajos/*.jpg', { eager: true, import: 'default' });
const slides = Object.keys(modules).sort().map((key) => modules[key]);

const Home = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, index]);

  return (
    <section id='home' className='banner__wrapper grid'>
      <div className="home__img">
        <div
          className="home__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="home__slides">
            {slides.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Trabajo realizado ${i + 1}`}
                className={`home__slide ${i === index ? 'home__slide--active' : ''}`}
              />
            ))}
          </div>

          <div className="home__controls">
            <button className="home__arrow" onClick={prev} aria-label="Foto anterior">
              <IoIosArrowBack />
            </button>
            <div className="home__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`home__dot ${i === index ? 'home__dot--active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir a la foto ${i + 1}`}
                />
              ))}
            </div>
            <button className="home__arrow" onClick={next} aria-label="Foto siguiente">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      <div className="home__content">
        <div className='home__text'>
          <h1>
            Nicolás Décima
          </h1>
          <h2 className="banner__job">Técnico en Telecomunicaciones & Estudiante de Análisis de Sistemas</h2>

          <div className="home__button">
          <Link
            to='about'
            className='btn'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ¡Conoceme!
            <span><FaArrowDown/></span>
          </Link>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Home
