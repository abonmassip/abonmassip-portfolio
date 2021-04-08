import Tilt from 'react-parallax-tilt'

import styles from './project.module.scss'

export function Project({ image, title, text, links }) {
  return (
    <div className={styles.project}>
      <Tilt
        className={styles.tilt}
        perspective={500}
        tiltMaxAngleX={5}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.08}
      >
        <img src={image} alt={title} />
      </Tilt>

      <div className={styles.info}>
        <h1>{title}</h1>
        <div className={styles.info_text} dangerouslySetInnerHTML={{ __html: text }} />
        <div className={styles.info_links}>
          {links
            ? Object.entries(links).map(([site, link]) => (
                <a href={link} key={`${title}_${site}`}>
                  {site}
                </a>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}
