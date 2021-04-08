import { pickOneFromArray } from './utils';

export const colors = [
  {
    main: '#ffdd7c',
    shadow: '#1c8ef1',
  },
  {
    main: '#26DFD0',
    shadow: '#FF7077',
  },
  {
    main: '#C8EF70',
    shadow: '#FA53A0',
  },
];

export function changeColor(main, shadow) {
  document.documentElement.style.setProperty("--main-color", main);
  document.documentElement.style.setProperty("--shadow-color", shadow);
}

export function setRandomColor() {
  const randomColor = pickOneFromArray(colors);
  const currentColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--main-color");

  if (randomColor.main.toLowerCase() === currentColor.toLowerCase()) {
    setRandomColor();
    return;
  }
  changeColor(randomColor.main, randomColor.shadow);
}