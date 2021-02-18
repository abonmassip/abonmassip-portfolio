import styles from './about.module.scss';

export function About() {
  return (
    <div className="section" data-anchor="about">
      <div className={styles["about-me"]}>
        <div className={styles.avatar}>
          <img src="/me_transparent.png" alt="Albert" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat auctor vitae condimentum tellus elementum. Feugiat odio non nibh orci montes, tortor imperdiet. Nisl malesuada suspendisse at pharetra. In quis purus dictumst quis.
        </p>
        <p>
        Quis lectus risus hendrerit condimentum. Adipiscing sed quam leo et lobortis sit. Senectus commodo id viverra vestibulum nunc parturient. Auctor viverra adipiscing massa suspendisse urna porttitor nisl. Lacus et malesuada tempor sit id nibh lectus dictum donec. Massa in nullam eu ut mi ac. Viverra lectus eu quis nibh et nec habitant donec lorem. 
        </p>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <h2>Interests</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat auctor vitae condimentum tellus elementum. Feugiat odio non nibh orci montes, tortor imperdiet. Nisl malesuada suspendisse at pharetra. In quis purus dictumst quis.
        </p>
      </div>
    </div>
  )
}