import React from 'react';
import { animated, useSpring } from 'react-spring';
import Rai from './img/landingpage.jpeg';
import Stoic from './img/fundo.avif';
import Dom from './img/dom.jpg';
import { goTo } from './function';
import Efeito from './Efeito';

const Projetos = () => {
  const [activeStoic, setActiveStoic] = React.useState(false);
  const [activeRai, setActiveRai] = React.useState(false);
  const [spring, api] = useSpring(() => ({
    from: { height: 0, opacity: 0 },
  }));
  const [spring2, api2] = useSpring(() => ({
    from: { height: 0, opacity: 0 },
  }));

  React.useEffect(()=> {
    api.start({
      to: activeStoic
        ? { height: 220, opacity: 1 }
        : { height: 0, opacity: 0 },
      config: { tension: 100 },
    });
  }, [api, activeStoic])

  React.useEffect(()=> {
    api2.start({
      to: activeRai
        ? { height: 220, opacity: 1 }
        : { height: 0, opacity: 0 },
      config: { tension: 100 },
    });
  }, [api2, activeRai])

  const [animou, setAnimou] = React.useState(false);
  const [springs, apiInit] = useSpring(() => ({
    from: { x: 0, opacity: 0 },
  }));

  return (
  
    <>
      <animated.div style={{
          transform: springs.x.to((x) => `translateX(${x}px)`),
          opacity: springs.opacity.to((opacity) => opacity),
        }} id="trabalhos" className="projetos">
      <Efeito animou={animou} setAnimou={setAnimou} windowHeight={1400} api={apiInit} />
        <div className="container">
          <h1 className='projeto-titulo'>Destaques</h1>
          <div className="destaque-container">
            <div onMouseOut={()=> setActiveStoic(false)} onMouseOver={()=> {setActiveStoic(true);}}  className="projeto">
              <div style={{background: `url(${Stoic}) no-repeat center`}}>
                <h1>Stoic</h1>
              </div>
              <animated.ul style={{opacity: spring.opacity.to((opacity) => opacity), height: spring.height.to((height) => `${height}px`)}}>
                <li onClick={()=> goTo('https://stoic-pied.vercel.app/')}>Visitar o site</li>
                <li><a href="mailto:diegoframos36@gmail.com">Enviar uma sugestão</a></li>
                <li><a href="mailto:diegoframos36@gmail.com">Comprar site</a></li>
                <li onClick={()=> goTo('https://github.com/DiegoRamos36/Stoic')}>Repositório</li>
              </animated.ul>
            </div>
            <div onMouseOut={()=> setActiveRai(false)} onMouseOver={()=> {setActiveRai(true);}}  className="projeto">
              <div style={{background: `url(${Rai}) no-repeat center`}}>
                <h1>Raí</h1>
              </div>
              <animated.ul style={{opacity: spring2.opacity.to((opacity) => opacity), height: spring2.height.to((height) => `${height}px`)}}>
                <li onClick={()=> goTo('https://auto-mecanica-rai.vercel.app/')}>Visitar o site</li>
                <li><a href="mailto:diegoframos36@gmail.com">Enviar uma sugestão</a></li>
                <li><a href="mailto:diegoframos36@gmail.com">Comprar site</a></li>
                <li onClick={()=> goTo('https://github.com/DiegoRamos36/Auto-Mecanica-Rai')}>Repositório</li>
              </animated.ul>
            </div>
          
          </div>
          <h1 className='projeto-titulo'>Todos os Projetos</h1>
          <div className="todos-container">
                 <div className="projeto-mini" style={{background:`url(${Dom}) no-repeat center`}}><div><h1>Magnifico</h1></div></div>
                 <div className="projeto-mini" style={{background: `url(${Stoic}) no-repeat center`}}> <div><h1>Stoic</h1></div> </div>
                 <div className="projeto-mini" style={{background: `url(${Rai}) no-repeat center`}}><div><h1>Raí</h1></div></div>
          
               </div>
        </div>
      </animated.div>


     </>
  );
};

export default Projetos;
