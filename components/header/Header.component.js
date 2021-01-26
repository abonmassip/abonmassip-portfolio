import { useEffect } from 'react';

import styles from './Header.module.scss';

import { Logo } from '../logo/logo.component';

export function Header() {

  let logoScale = 100;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })
  
  function scrollTo(id) {
    const elmnt = document.getElementById(id);
    elmnt.scrollIntoView();
  }

  function invertIt(e) {
    const isInverted = [...e.target.classList].find(el => el = styles["inverted"]);
    if (isInverted) {
      e.target.classList.remove(styles["inverted"])
    } else {
      e.target.classList.add(styles["inverted"])
    };
    scrollTo(e.target.textContent.replace(" ", "-"));
  }

  function handleScroll() {
    const logo = document.querySelector(`.${styles["Header__logo"]}`).firstChild;
    if (window.scrollY === 0) {
      logo.classList.add("big");
      logoScale = 500;
    } else {
      logo.classList.remove("big");
      logoScale = 100;
    }
  }

  return (
    <div id="header" className={styles.Header}>
      <div
        className={styles["Header__logo"]}
        onClick={() => scrollTo("landing-page")}
      >
        <Logo
          scale={logoScale} 
          lightColor="#FFDD7C" 
          shadowColor="#1C8EF1"
        />
        <div className={styles["Header__logo__text"]}>
          abonmassip
        </div>
      </div>
      <ul className={styles["Header__menu"]}>
        <li onClick={(e) => invertIt(e)}>projects</li>
        <li onClick={(e) => invertIt(e)}>about me</li>
      </ul>
    </div>
  )
}