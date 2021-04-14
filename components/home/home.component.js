import { Logo } from '../logo/logo.component'

import { setRandomColor } from '../../lib/colors'

import styles from './home.module.scss'

export function Home({ scrollingTo }) {
  return (
    <div className="section" data-anchor="home">
      <div className={styles.home}>
        <span>
          Albert
          <br />
          Bonmassip
        </span>
        <div className={styles.logo} onClick={() => setRandomColor()}>
          <Logo />
        </div>
        <span>
          front-end
          <br />
          developer
        </span>
      </div>
      <div className={`${styles.scrollSign} ${scrollingTo === 'home' ? styles.visible : styles.hidden}`}>
        <a href="#projects">
          <div className={styles.arrow}></div>
        </a>
      </div>
    </div>
  )
}
