import styles from './projects.module.scss';

export function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.project}>
        <div className={styles.description}>
          <h1>E-Commerce App</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque senectus non molestie nascetur. Massa facilisis metus lobortis aliquam cum leo vel integer. Ultrices volutpat nam leo neque, in eget quisque. Etiam vel urna, sem ornare risus.
          </p>
          <a href="#">Github</a>
          <a href="#">Live demo</a>
        </div>
        <div className={styles.images}>
          <img src="#" alt="" large="true"/>
          <img src="#" alt="" />
          <img src="#" alt="" />
        </div>
      </div>
    </div>
  )
}