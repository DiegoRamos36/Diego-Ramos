import React from 'react';
import { handleScrollX, handleScrollY } from './function';

const Magnifico = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [scrolledY, setScrolledY] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScrollY(1600, setScrolledY);
    });
    window.addEventListener('scroll', () => {
      handleScrollX(1800, setScrolled);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        handleScrollY(1600, setScrolledY);
      });
      window.removeEventListener('scroll', () => {
        handleScrollX(1800, setScrolled);
      });
    };
  }, []);

  return (
    <section
      onClick={() => {
        window.open(
          'https://www.domelmagnifico.com.br',
          '_blank',
          'noopener,noreferrer',
        );
      }}
      className={`projeto magnifico ${scrolled || scrolledY ? 'open' : ''}`}
    >
      <h5></h5>
      <div className="card">
        <span>
          <p className="ano">2024</p>
          <p className="tema">Tema Artístico</p>
          <p className="tema">Pizzaria</p>
        </span>
        <h1 className="titulo-projeto">Dom El Magnifico</h1>
      </div>
    </section>
  );
};

export default Magnifico;
