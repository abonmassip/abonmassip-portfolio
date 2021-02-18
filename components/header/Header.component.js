import { colors, changeColor } from '../../lib/colors';

import styles from './Header.module.scss';

import { Logo } from '../logo/logo.component';
import { addBasePath } from 'next/dist/next-server/lib/router/router';

export function Header({scrollingTo, active}) {

  return (
    <div className={styles.header}>
      <a className={`${styles.link} ${scrollingTo !== "home" ? styles["small"] : ""}`} href="#home">
        <div className={styles.link_logo}>
          <Logo scale={400} lightColor="#FFDD7C" shadowColor="#1C8EF1"/>
        </div>
        <div className={`${styles.link_text} color shadow-s ${scrollingTo !== "home" ? styles.visible : ""}`}>abonmassip</div>
      </a>
      <ul className={styles.menu}>
        <li><a className={scrollingTo === "projects" ? "color shadow" : ""} href="#projects">projects</a></li>
        <li><a className={scrollingTo === "about" ? "color shadow" : ""} href="#about">about me</a></li>
        <li className={styles.colors}>
          {
            colors.map(color => (
              <div
                key={color.main}
                className={styles.colors_square}
                style={{backgroundColor: color.main, filter: `drop-shadow(5px 5px 0px ${color.shadow})`}}
                onClick={() => changeColor(color.main, color.shadow)}
              />
            ))
          }
        </li>
      </ul>
    </div>
  )
}