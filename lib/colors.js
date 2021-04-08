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
    main: '#FD49A0',
    shadow: '#145DA0',
  },
  {
    main: '#C8EF70',
    shadow: '#FA53A0',
  },
  {
    main: '#00ff80',
    shadow: '#ff9239',
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