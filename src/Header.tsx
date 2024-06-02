import React from 'react';
import { animated, useSpring } from 'react-spring';
import { sendMail } from './function';

const Header = () => {

  const [reset, setReset] = React.useState(false);

  const letreiro = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(100%)' },
    reset,
    reverse: reset,
    config: { duration: 15000 },
    onRest: () => setReset(!reset),
  });

  return (
    <header className="header">
      <ul className="menu">
        <li >
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#trabalhos">Trabalho</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
      <animated.div style={letreiro}>
        <span onClick={()=> sendMail('diegoframos36@gmail.com')}>entre em contato: diegoframos36@gmail.com</span>
      </animated.div>
      <div>
      </div>
    </header>
  );
};

export default Header;
