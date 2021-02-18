import styles from './home.module.scss';

export function Home() {
  return (
    <div className="section" data-anchor="home">
      <div className={styles.Home}>
        <div className={styles.Home__description}>
          Hello world! I'm <span className="title--home color shadow">Albert Bonmassip</span>,
          <br/>
          a <span className="title--home color shadow">front-end developer</span> living in
          <br />
          Los Angeles looking for new work
          <br/>
          opportunities.
        </div>
      </div>
    </div>
  )
}