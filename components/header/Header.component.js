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
          <a className={scrollingTo === 'projects' ? styles.active : ''} href="#projects">
            projects
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
