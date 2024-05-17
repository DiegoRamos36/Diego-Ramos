import { goTo } from './function';

const Landing_Page = () => {
  return (
    <main id="main" className="main">
      <nav className="menu">
        <ul>
          <li
            onClick={() => {
              goTo('stoic', 'start', 600);
            }}
          >
            Projetos
          </li>
          <li
            onClick={() => {
              goTo('educacao');
            }}
          >
            Educação
          </li>
          <li
            onClick={() => {
              goTo('experiencia');
            }}
          >
            Experiência
          </li>
          <li
            onClick={() => {
              goTo('contato', 'start', 400);
            }}
          >
            Contato
          </li>
        </ul>
      </nav>

      <span>
        <h1 className="title">Diego Ramos</h1>
        <p className="subtitle">Desenvolvedor Front-End</p>
      </span>

      <nav className="social-media">
        <ul>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Github</li>
        </ul>
      </nav>
    </main>
  );
};

export default Landing_Page;
