import { Project } from '../project/project.component';

import styles from './projects.module.scss';

export function Projects({allProjectsData}) {
  return (
    <div className="section" data-anchor="projects">

      {allProjectsData.map(({ id, date, title, github, demo}, i) => (
        <div className="slide" data-anchor={i + 1}>
          <Project
            image={`/${id}.jpg`}
            title={title}
            text='blabla'
            github={github}
            demo={demo}
          /> 
        </div>
      ))}

      {/* <div className="slide" data-anchor="1">
        <Project
          image="/ecommerce.jpg"
          title="E-commerce App"
          text="
          Built with **React**<br>
          **Redux** for state management<br>
          **Firebase** for authentication and database<br>
          **Stripe** for managing the payments<br>
          I also used **React Hooks**, **GraphQL** and **ContextAPI**
          "
          github="https://github.com/abonmassip/lazy-susans"
          demo="https://lazy-susans.herokuapp.com/"
        >
        </Project>
      </div>
      <div className="slide" data-anchor="2">
        <div>TWO</div>
      </div>
      <div className="slide" data-anchor="3">
        <div>THREE</div>
      </div> */}
    </div>
  )
}