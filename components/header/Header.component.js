import styles from './Header.module.scss'

import { Logo } from '../logo/logo.component'

export function Header({ scrollingTo }) {
  return (
    <div className={styles.header}>
      <a className={`${styles.link} ${scrollingTo !== 'home' ? styles['active'] : ''}`} href="#home">
        <div className={styles.link_logo}>
          <Logo />
        </div>
        <div className={`${styles.link_text} ${scrollingTo !== 'home' ? styles.visible : ''}`}>abonmassip</div>
      </a>

      <ul className={styles.menu}>
        <li>
          <a className={scrollingTo === 'react' ? styles.active : ''} href="#react">
            react.js
          </a>
        </li>
        <li>
          <a className={scrollingTo === 'threejs' ? styles.active : ''} href="#threejs">
            three.js
          </a>
        </li>
        <li>
          <a className={scrollingTo === 'about' ? styles.active : ''} href="#about">
            about me
          </a>
        </li>
      </ul>
    </div>
  )
}
