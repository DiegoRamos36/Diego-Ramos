import React from "react";
import { SpringRef } from "react-spring";

interface EfeitoProps  {
  animou: boolean;
  windowHeight: number;
  setAnimou: React.Dispatch<React.SetStateAction<boolean>> ;
  api: SpringRef<{
    x: number;
    opacity: number;
}>;

}

const Efeito: React.FC<EfeitoProps> = ({animou, setAnimou, api, windowHeight}) => {

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > windowHeight && !animou) {
        api.start({
          from: { x: -200, opacity: 0 },
          to: { x: 0, opacity: 1 },
          config: { tension: 100 },
        });
        setAnimou(true);
      } else if (window.scrollY < windowHeight && animou) {
        api.start({
          to: { opacity: 0, x: -200 },
        });
        setAnimou(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [api, animou, windowHeight, setAnimou]);
  return null;
};

export default Efeito;
