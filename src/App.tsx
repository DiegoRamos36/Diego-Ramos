import React from 'react';
import Breve from './breve';
import './css/App.css';
import LandingPage from './Landing-Page';
import Magnifico from './magnifico';
import Stoic from './stoic';
import Escolaridade from './Escolaridade';

import Menu from './Menu';
import Consulta from './Consulta';

function App() {
  React.useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        window.scrollBy({
          left: 200,
          behavior: 'smooth',
        });
      } else {
        window.scrollBy({
          left: -200,
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
      <Stoic />
      <Magnifico />
      <Breve />
      <Escolaridade />
      <Consulta />
    </div>
  );
}

export default App;
