import { downloadCv, sendMail } from './function';
import Diego from './img/Diego-Foto.jpg';

const LandingPage = () => {
  return (
    <main className="landing-page">
      <div className="container mainPage">
        <div>
          <h1 className="titulo">Diego Ramos</h1>
          <h2 className="subtitulo">Desenvolvedor Web</h2>
          {/* <p>
            Como desenvolvedor front-end, combino expertise técnica e frameworks
            modernos com um forte foco em design responsivo e acessibilidade,
            criando interfaces de usuário intuitivas e de alto desempenho. Minha
            capacidade de trabalhar em equipe e adaptar-me rapidamente às novas
            tecnologias garante soluções inovadoras e eficazes.
          </p> */}
          <span>
            <button onClick={()=> downloadCv()}>Download Cv</button>
            <button onClick={()=> sendMail('diegoframos36@gmail.com')}>Entrar em contato</button>
          </span>
        </div>
        <img src={Diego} alt="Diego" />
      </div>
    </main>
  );
};

export default LandingPage;
