import React from 'react';
import imagem from './img/diego1.jpeg';
import { handleScrollX, handleScrollY } from './function';

// import imagem2 from './img/diego2.jpeg';
// import imagem3 from './img/diego3.jpg';
// import imagem4 from './img/diego4.jpg';
// import imagem5 from './img/diego5.jpg';

const Sobre = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [scrolledY, setScrolledY] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScrollY(400, setScrolledY);
    });
    window.addEventListener('scroll', () => {
      handleScrollX(400, setScrolled);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        handleScrollY(400, setScrolledY);
      });
      window.removeEventListener('scroll', () => {
        handleScrollX(400, setScrolled);
      });
    };
  }, []);
  // const [active, setActive] = React.useState(0);

  // function atualizarMural() {

  // }
  // const [mural] = React.useState([
  //   { src: imagem, alt: 'Diego Branca' },
  //   { src: imagem2, alt: 'Diego Preta' },
  //   { src: imagem3, alt: 'Diego Amarelo' },
  //   { src: imagem4, alt: 'Diego Branca Flamengo' },
  //   { src: imagem5, alt: 'Diego Flamengo' },
  // ]);

  return (
    <section
      className={`sobre-container ${
        scrolled || scrolledY ? 'mostrar-texto' : ''
      }`}
    >
      <div className="historia">
        <h1>sobre mim.</h1>
        <span>
          <p>Olá 🖐</p>
          <p>
            Meu nome é Diego, sou estudante de análise e desenvolvimento de
            sistemas pela UNIASSELVI (EAD, polo - Belford Roxo).
          </p>
          <p>
            Tenho como objetivo, me tornar um profissional de primeira na área
            de <span style={{ fontWeight: 'bold' }}> Desenvolvimento Web</span>,
            e pra isso, sigo estudando e melhorando a cada dia.
          </p>
          <p>
            Todo tipo de tecnologia me fascina, principalmente relacionado a
            interface. Movido a esse fascínio, decidi me especializar na área do
            <span style={{ fontWeight: 'bold' }}>
              {' '}
              Desenvolvimento Front-End
            </span>
            , com tecnologias como:{' '}
            <span style={{ fontWeight: 'bold' }}> HTML</span> •{' '}
            <span style={{ fontWeight: 'bold' }}> CSS</span> •{' '}
            <span style={{ fontWeight: 'bold' }}> JavaScript</span> e mais.
          </p>
          <p>
            Sou uma pessoa que se expressa bem, extremamente focado e
            determinado e não, não sou um rôbo.
          </p>
        </span>
      </div>
      <img src={imagem} alt="Diego Branca" />
      {/* {mural.map((foto, index) => (
          <img
            key={index}
            className={active === index ? 'ativo' : ''}
            onClick={atualizarMural}
            src={foto.src}
            alt={foto.alt}
          />
        ))} */}
    </section>
  );
};

export default Sobre;
