import styles from './landing-page.module.scss';

export function LandingPage() {
  return (
    <div id="landing-page" className={styles["landing-page"]}>
      <div className={styles.description}>
        Hello world! I'm <span className={styles.highlight}>Albert Bonmassip</span>,
        <br/>
        a <span className={styles.highlight}>front-end developer</span> living in
        <br />
        Los Angeles looking for new work
        <br/>
        opportunities.
      </div>
    </div>
  )
}