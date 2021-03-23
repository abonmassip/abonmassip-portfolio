import { Project } from '../project/project.component';

export function Projects({projectsData}) {
  return (
    <div className="section" data-anchor="projects">
      {projectsData.map(({ id, text, title}, i) => (
        <div className="slide" data-anchor={i + 1} key={id}>
          <Project
            image={`/${id}.jpg`}
            title={title}
            text={text}
          /> 
        </div>
      ))}
    </div>
  )
}