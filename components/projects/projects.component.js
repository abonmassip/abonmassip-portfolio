import styles from './projects.module.scss';

export function Projects() {
  return (
    <div className="section" data-anchor="projects">
      <div className="slide" data-anchor="slide1"><div className={styles.projecte}>ONE</div></div>
      <div className="slide" data-anchor="slide2"><div className={styles.projecte}>TWO</div></div>
      <div className="slide" data-anchor="slide3"><div className={styles.projecte}>THREE</div></div>
      {/* <div className={styles.Projects}>
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
      </div> */}
    </div>
  )
}