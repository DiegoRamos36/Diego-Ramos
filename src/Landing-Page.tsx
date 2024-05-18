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
          <li>
            <a
              href="https://www.instagram.com/diego.ferreira36/?igsh=cWV1a2RqNm54cmYx"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/diego-ramos36/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://x.com/Diego_R4mos" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/DiegoRamos36" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Landing_Page;
