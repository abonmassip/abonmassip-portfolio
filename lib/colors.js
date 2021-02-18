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
  }
];

export function changeColor(main, shadow) {

  // const myColor = window
  //   .getComputedStyle(document.documentElement)
  //   .getPropertyValue("--main-color");

  document.documentElement.style.setProperty("--main-color", main);
  document.documentElement.style.setProperty("--shadow-color", shadow);
}