import styles from './home.module.scss'

export function Home() {
  return (
    <div className="section" data-anchor="home">
      <div className={styles.home}>
        <span>
          Albert
          <br />
          Bonmassip
        </span>
        <div className={styles.space} />
        <span>
          front-end
          <br />
          developer
        </span>
      </div>
    </div>
  )
}
