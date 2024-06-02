import React from "react";
import { animated, useSpring} from 'react-spring';

import brafe from './img/brafe.jpg'
import fintech from './img/fintech.jpg'
import dogs from './img/dogs.png'
import portfolio from './img/portfolio.png'
import slide from './img/slide.png';
import Efeito from "./Efeito";

type Curso = {
id: number;
nome: string;
duracao: number;
projeto_final: {nome: string; desc: string; img:{src: string; alt: string;}}
};

const Cursos = () => {
    const cursos: Curso[] = [
        {
            id: 0,
            nome: 'Ui Design para Iniciantes', duracao: 34, projeto_final: {nome: 'Portfólio 1',  desc: 'Introdução aos conceitos do design e criação de um estilo de portfólio mais iniciante, com poucas informações e mais simples. Nesse projeto, abrimos os olhos para como o design faz toda a diferença na criação de layouts organizados, simples e bonito.', img: {src: portfolio, alt: 'Pagina principal Portfólio'}}
        },
        {
            id: 1,
            nome: 'CSS Avançado Posicionamento', duracao: 18, projeto_final: {nome: 'Brafé',  desc: 'Como aluno no curso intensivo de CSS focado no posicionamento dos elementos, aprendi a utilizar diferentes abordagens para criar layouts eficazes e responsivos. O curso foi estruturado de forma prática, permitindo-me aplicar imediatamente o conhecimento adquirido em projetos reais. Primeiro, revisitei os fundamentos do CSS, incluindo a sintaxe e a seleção de elementos, o Box Model (margens, bordas, padding e conteúdo), e como cada um desses elementos influencia o layout da página.', img: {src: brafe, alt: 'Pagina principal Brafé'}}
        },
        {
            id: 2,
            nome: 'JavaScript Completo ES6+', duracao: 37, projeto_final: {nome: 'Slide',  desc: 'O projeto final do curso foi a criação do slide.js, uma biblioteca de JavaScript para gerenciar e criar slideshows interativos em páginas web. Este projeto integrou todas as habilidades e conhecimentos adquiridos ao longo do curso, oferecendo uma oportunidade prática para aplicar conceitos fundamentais de JavaScript e CSS. Durante o desenvolvimento do slide.js, começamos com a estrutura básica do projeto, definindo o HTML necessário para suportar os slides. Utilizamos CSS para estilizar os slides, garantindo que cada um fosse visualmente atraente e que as transições entre eles fossem suaves. ', img: {src: slide, alt: 'Funcionamento Slide'}}
        },
        {
            id: 3,
            nome: 'WordPress REST API Dogs', duracao: 4, projeto_final: {nome: 'REST API Dogs',  desc: 'O curso de REST API, foi projetado para ensinar a utilizar a API REST do WordPress para criar e interagir com aplicações web modernas. A API REST (Representational State Transfer) do WordPress permite a comunicação entre o WordPress e outras aplicações usando HTTP, facilitando a criação de soluções customizadas e integrações com outras plataformas.', img: {src: dogs, alt: 'Rest api dogs'}}
        },
        {
            id: 4,
            nome: 'React Completo', duracao: 36, projeto_final: {nome: 'Dogs',  desc: 'O projeto Dogs foi uma oportunidade de aplicar e consolidar nossos conhecimentos de desenvolvimento web, utilizando a REST API do WordPress para criar uma aplicação complexa e interativa. Ao final, conseguimos criar uma rede social funcional e atrativa, oferecendo uma plataforma para que os amantes de cães compartilhassem suas histórias e interagissem entre si. Este projeto nos preparou para futuros desafios no desenvolvimento web, fornecendo uma base sólida em APIs, autenticação, gerenciamento de estado e construção de interfaces de usuário interativas.', img: {src: dogs, alt: 'Rede Social Dogs'}}
        },
        {
            id: 5,
            nome: 'Redux com React', duracao: 16, projeto_final: {nome: 'Dogs',  desc: 'No processo de refatoração do projeto da rede social Dogs, utilizamos Redux para controlar os estados da aplicação, melhorando a gestão e a organização dos dados. Originalmente, o estado da aplicação era gerenciado localmente dentro de componentes React, o que se tornou difícil de manter à medida que o projeto crescia. Com Redux, centralizamos o estado globalmente, facilitando o acesso e a atualização dos dados em diferentes partes da aplicação.', img: {src: dogs, alt: 'Rede Social Dogs Redux'}}
        },
        {
            id: 6,
            nome: 'Next.js', duracao: 22, projeto_final: {nome: 'Dogs Next',  desc: 'Na refatoração do projeto da rede social Dogs, utilizamos Next.js para melhorar a performance e a experiência de desenvolvimento. Next.js, um framework de React, oferece recursos como renderização no lado do servidor (SSR) e geração estática de páginas (SSG), o que resultou em uma aplicação mais rápida e eficiente. Começamos migrando os componentes e rotas do React para a estrutura de páginas do Next.js. Isso simplificou a configuração das rotas, pois Next.js trata automaticamente a estrutura de arquivos como rotas.', img: {src: dogs, alt: 'Rede Social Dogs Next'}}
        },
        {
            id: 7,
            nome: 'TypeScript para Iniciantes Completo', duracao: 22, projeto_final: {nome: 'Slide',  desc: 'A refatoração do Slide.js para TypeScript trouxe uma série de melhorias em termos de robustez, manutenção e escalabilidade. TypeScript, uma linguagem de programação que adiciona tipos estáticos ao JavaScript, nos permitiu identificar e corrigir erros durante o desenvolvimento, antes mesmo de executar o código, garantindo um código mais seguro e confiável. Inicialmente, migramos todos os arquivos JavaScript do Slide.js para TypeScript, renomeando as extensões de .js para .ts. Em seguida, começamos a adicionar anotações de tipo aos componentes e funções' , img: {src: slide, alt: 'Funcionamento Slide'}}
        },
        {
            id: 8,
            nome: 'React com TypeScript', duracao: 10, projeto_final: {nome: 'FinTech',  desc: ' Na criação do dashboard da fintech com React e TypeScript, seguimos uma abordagem modular e eficiente. Começamos configurando o ambiente de desenvolvimento com Create React App e TypeScript. Em seguida, projetamos o layout do dashboard, identificando os componentes necessários, como gráficos, tabelas e cards informativos. Integramos bibliotecas de gráficos compatíveis com TypeScript, como Chart.js ou Recharts, para visualizar os dados financeiros de forma clara e informativa. Implementamos funcionalidades interativas, como filtros e ordenação, para permitir que os usuários explorem e analisem os dados com facilidade. ', img: {src: fintech, alt: 'Dashboard empresarial TS'}}
        },
      
    ]

    const [active, setActive] = React.useState(0);
    const [animou, setAnimou] = React.useState(false);

    const [springInit, apiInit] = useSpring(() => ({
        from: { x: 0, opacity: 0 },
      }));

    const [springs, api] = useSpring(() => ({
        from: {opacity: 0, y: 0 },
      }));

      React.useEffect(()=> {
        api.start({
            from:{
                opacity: 0,
                y: 50
            },
            to: {opacity: 1, y: 0},
            config: {
                tension: 100
            }
        })
      }, [active, api])

    

   
    
    
  return (
    <animated.div  style={{
        transform: springInit.x.to((x) => `translateX(${x}px)`),
        opacity: springInit.opacity.to((opacity) => opacity),
      }} className="formacao">
          <Efeito animou={animou} setAnimou={setAnimou} windowHeight={2400} api={apiInit} />
        <h1>Formação</h1>
        <h2 className="uniasselvi">Uniasselvi</h2>
        <ul>
            <li>
                <span>
                    <h3 className="uniasselvi">Análise e Desenvolvimento de Sistemas</h3>
                    <h4>2400h</h4>
                </span>
            </li>
        </ul>
        <h1>Extracurriculares</h1>
        <h2 className="origamid">Origamid</h2>
        <ul> 
            {cursos.map((curso)=> (
                <li onClick={()=> setActive(curso.id)} key={curso.id}>
                    <span>
                        <h3 className="origamid">{curso.nome}</h3>
                        <h4>{curso.duracao}h</h4>
                    </span>
                    {active === curso.id ?    <animated.div style={{opacity: springs.opacity.to((opacity)=> opacity), transform: springs.y.to((y)=> `translateY(-${y}px)`)}} className="projeto-final">
                      
                      <h5>{curso.projeto_final.nome}</h5>
                      <div>
                       <img src={curso.projeto_final.img.src} alt={curso.projeto_final.img.alt} />
                       <p>{curso.projeto_final.desc}</p>
                      </div>
                       </animated.div> : ''}
                 
                    </li>
            ) )}
        </ul>
    </animated.div>
  )
};

export default Cursos;
