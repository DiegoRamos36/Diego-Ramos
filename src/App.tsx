import React from 'react';
import Breve from './breve';
import './css/App.css';
import LandingPage from './Landing-Page';
import Magnifico from './magnifico';
import Stoic from './stoic';
import Escolaridade from './Escolaridade';
import Menu from './Menu';
import Consulta from './Consulta';
import Sobre from './Sobre';

function App() {
  React.useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        window.scrollBy({
          left: 300,
          behavior: 'smooth',
        });
      } else {
        window.scrollBy({
          left: -300,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  return (
    <div className="body">
      <Menu />
      <LandingPage />
      <Sobre />
      <Stoic />
      <Magnifico />
      <Breve />
      <Escolaridade />
      <Consulta />
    </div>
  );
}

export default App;
