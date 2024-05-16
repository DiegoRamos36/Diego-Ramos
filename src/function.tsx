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
