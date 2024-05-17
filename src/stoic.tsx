import React from 'react';
import { handleScrollX, handleScrollY } from './function';

const Stoic = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [scrolledY, setScrolledY] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScrollY(1000, setScrolledY);
    });
    window.addEventListener('scroll', () => {
      handleScrollX(1000, setScrolled);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        handleScrollY(1000, setScrolledY);
      });
      window.removeEventListener('scroll', () => {
        handleScrollX(1000, setScrolled);
      });
    };
  }, []);

  return (
    <section
      id="stoic"
      className={`projeto stoic ${scrolled || scrolledY ? 'open' : ''}`}
    >
      <h5></h5>
      <div className="card">
        <span>
          <p className="ano">2024</p>
          <p className="tema">Tema Artístico</p>
          <p className="tema">Sabedoria</p>
        </span>
        <h1 className="titulo-projeto">Stoic</h1>
      </div>
    </section>
  );
};

export default Stoic;
