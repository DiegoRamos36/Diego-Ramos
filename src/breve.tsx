import React from 'react';
import { handleScrollX, handleScrollY } from './function';
const Breve = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [scrolledY, setScrolledY] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScrollY(2400, setScrolledY);
    });
    window.addEventListener('scroll', () => {
      handleScrollX(2400, setScrolled);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        handleScrollY(2400, setScrolledY);
      });
      window.removeEventListener('scroll', () => {
        handleScrollX(2400, setScrolled);
      });
    };
  }, []);
  return (
    <section className={`projeto breve ${scrolled || scrolledY ? 'open' : ''}`}>
      <h5></h5>
      <div className="card">
        <span>
          <p className="ano">2024</p>
          <p className="tema">Tema Artístico</p>
          <p className="tema">Em breve</p>
        </span>
        <h1 className="titulo-projeto">Em Breve</h1>
      </div>
    </section>
  );
};

export default Breve;
