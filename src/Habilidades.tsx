import { animated, useSpring } from 'react-spring';
import CANVA from './icons/canva.png';
import css from './icons/css.png';
import DAVINCI from './icons/davinci.png';
import FIGMA from './icons/figma.png';
import FIREBASE from './icons/firebase.png';
import GIMP from './icons/gimp.webp';
import HTML from './icons/html.png';
import JAVASCRIPT from './icons/js.png';
import TYPESCRIPT from './icons/ts.png';
import MYSQL from './icons/mysql.png';
import NEXT from './icons/nextjs.png';
import REACT from './icons/reactjs.png';
import REDUX from './icons/reduxjs.png';
import SASS from './icons/sass.webp';
import WOOCOMMERCE from './icons/woocommerce.webp';
import WORDPRESS from './icons/wordpress.png';
import NODE from './icons/nodejs.png';
import PHP from './icons/php.png';
import React from 'react';
import Efeito from './Efeito';

const Habilidades = () => {
  const [animou, setAnimou] = React.useState(false);
  const [springs, api] = useSpring(() => ({
    from: { x: 0, opacity: 0 },
  }));



  return (
    <div className="habilidades-container">
        <Efeito animou={animou} setAnimou={setAnimou} windowHeight={600} api={api} />
      <animated.div
        style={{
          transform: springs.x.to((x) => `translateX(${x}px)`),
          opacity: springs.opacity.to((opacity) => opacity),
        }}
        className="habilidades"
      >
        <h1 className="sobre-titulo">Habilidades</h1>
        <div className="habilidade-icons">
          <img src={HTML} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={REACT} alt="React Js" />
          <img src={NEXT} alt="Next Js" />
          <img src={WORDPRESS} alt="WordPress" />
          <img src={WOOCOMMERCE} alt="WooCommerce" />
          <img src={SASS} alt="Css SASS" />
          <img src={NODE} alt="Node Js" />
          <img src={TYPESCRIPT} alt="TypeScript" />
          <img src={JAVASCRIPT} alt="JavaScript" />
          <img src={PHP} alt="PHP" />
          <img src={REDUX} alt="Redux Js" />
          <img src={FIREBASE} alt="Firebase" />
          <img src={MYSQL} alt="MySQL" />
          <img src={FIGMA} alt="Figma" />
          <img src={GIMP} alt="Gimp" />
          <img src={CANVA} alt="Canva" />
          <img src={DAVINCI} alt="DaVinci Resolve" />
        </div>
      </animated.div>
    </div>
  );
};

export default Habilidades;
