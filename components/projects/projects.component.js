import { Project } from '../project/project.component'

export function Projects({ projectsData, what }) {
  return (
    <div className="section" data-anchor={what}>
      {projectsData.map(({ id, text, title, links }) => (
        <div className="slide" data-anchor={id} key={id}>
          <Project image={`/img/${id}.jpg`} title={title} text={text} links={links} />
        </div>
      ))}
    </div>
  )
}
