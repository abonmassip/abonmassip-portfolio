import styles from './home.module.scss';

export function Home() {
  return (
    <div className="section" data-anchor="home">
      <div className={styles.home}>
        <span className="title--home color shadow">Albert<br/>Bonmassip</span>
        <div className={styles.space} />
        <span className="title--home color shadow">front-end<br/>developer</span>
      </div>
    </div>
  )
}