import React from 'react';
import { goTo } from './function';

const Menu = () => {
  const [scrolledX, setscrolledX] = React.useState(false);
  const [scrolledY, setscrolledY] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handleScrollX = () => {
      const scrollX = window.scrollX || window.pageXOffset;

      if (scrollX >= 1000) {
        setscrolledX(true);
      } else {
        setscrolledX(false);
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScrollX);

    return () => {
      window.removeEventListener('scroll', handleScrollX);
    };
  }, []);
  React.useEffect(() => {
    const handleScrollY = () => {
      const scrollY = window.scrollY || window.pageXOffset;

      if (scrollY >= 600) {
        setscrolledY(true);
      } else {
        setscrolledY(false);
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScrollY);

    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);
  return (
    <>
      <header className={`menu-bar ${scrolledX || scrolledY ? 'showed' : ''}`}>
        <h1
          onClick={() => {
            goTo('main', 'start', 800);
          }}
        >
          Diego
          <span className="sobrenome">Ramos</span>
        </h1>
        <span
          onClick={() => {
            setOpen(!isOpen);
          }}
          className={`open-menu ${isOpen ? 'effect' : ''}`}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
      </header>
      <nav className={`header-menu ${isOpen ? 'mostrar' : ''}`}>
        <div>
          <ul>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#educacao">Educação</a>
            </li>
            <li>
              <a href="#">Experiência</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>

          <h1 className="header-title">Diego Ramos</h1>
          <ul>
            <li>
              {' '}
              <a href="#">Instagram</a>
            </li>
            <li>
              {' '}
              <a href="#">Linkedin</a>
            </li>
            <li>
              {' '}
              <a href="#">Twiter</a>
            </li>
            <li>
              {' '}
              <a href="#">Github</a>
            </li>
          </ul>
          <span>
            <p>Diego Ramos &copy;2024</p>
            <p>Belford Roxo</p>
            <p>Rio de Janeiro</p>
            <p>Brasil</p>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Menu;
