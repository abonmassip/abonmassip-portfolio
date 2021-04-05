import { setRandomColor } from '../../lib/colors';

import styles from './Header.module.scss';

import { Logo } from '../logo/logo.component';

export function Header({scrollingTo}) {

  return (
    <div className={styles.header}>
      <a 
        className={`${styles.link} ${scrollingTo !== "home" ? styles["small"] : ""}`} 
        href="#home"
        onClick={() => scrollingTo === "home" && setRandomColor()}
        onDragStart={(e) => e.preventDefault()}
      >
        <div className={styles.link_logo}>
          <Logo scale={400} lightColor="#FFDD7C" shadowColor="#1C8EF1"/>
        </div>
        <div className={`${styles.link_text} main-color shadow-s ${scrollingTo !== "home" ? styles.visible : ""}`}>abonmassip</div>
      </a>

      <ul className={styles.menu}>
        <li><a className={scrollingTo === "projects" ? "main-color shadow" : ""} href="#projects">projects</a></li>
        <li><a className={scrollingTo === "about" ? "main-color shadow" : ""} href="#about">about me</a></li>
      </ul>
    </div>
  )
}