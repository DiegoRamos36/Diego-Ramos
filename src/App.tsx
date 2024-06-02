import Header from './Header';
import './css/App.css';

import LandingPage from './LandingPage';
import Sobre from './Sobre';
import Habilidades from './Habilidades';
import Projetos from './Projetos';
import Contato from './Contato';
import Cursos from './Cursos';

function App() {
  return (
    <div className="body">
      <Header />
      <LandingPage />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Cursos />
      <Contato />
    </div>
  );
}

export default App;
