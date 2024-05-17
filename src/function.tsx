import React from 'react';

export function handleScrollX(
  pos: number,
  opener: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const scrollX = window.scrollX || window.pageXOffset;

  if (scrollX >= pos) {
    opener(true);
  } else {
    opener(false);
  }
}
export function handleScrollY(
  pos: number,
  opener: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY >= pos) {
    opener(true);
  } else {
    opener(false);
  }
}

export function goTo(
  id: string,
  align: 'start' | 'center' | 'end' | 'nearest' = 'start',
  gap = 0,
) {
  const elemento = document.getElementById(id);

  if (elemento) {
    const elementoRect = elemento.getBoundingClientRect();
    const scrollLeft = window.scrollX || window.pageXOffset;
    const scrollTop = window.scrollY || window.pageYOffset;
    const elementoLeft = elementoRect.left + scrollLeft;
    const elementoTop = elementoRect.top + scrollTop;
    let x = elementoLeft;
    const y = elementoTop;

    if (align === 'center') {
      x -= window.innerWidth / 2;
    } else if (align === 'end') {
      x -= window.innerWidth;
    }

    window.scrollTo({
      left: x + 800 - gap,
      top: y,
      behavior: 'smooth',
    });
  } else {
    console.error('Elemento não encontrado');
  }
}
