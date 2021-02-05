import styles from './projects.module.scss';

import { Project } from '../project/project.component';

export function Projects() {
  return (
    <div className="section" data-anchor="projects">
      <div className="slide" data-anchor="1">
        <Project
          image="/ecommerce.jpg"
          title="E-commerce App"
          github="https://github.com/abonmassip/lazy-susans"
          liveDemo="https://lazy-susans.herokuapp.com/"
        >
          Built with *React*
          *Redux* for state management
          *Firebase* for authentication and database
          *Stripe* for managing the payments
          I also used *React Hooks*, *GraphQL* and *ContextAPI*
        </Project>
      </div>
      <div className="slide" data-anchor="2">
        <div className={styles.projecte}>TWO</div>
      </div>
      <div className="slide" data-anchor="3">
        <div className={styles.projecte}>THREE</div>
      </div>
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