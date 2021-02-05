import styles from './project.module.scss';

export function Project({image, title, github, liveDemo, children}) {
  return(
    <div className={styles.project}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.description}>
        <h1 className={styles.description_title}>{title}</h1>
        <div className={styles.description_text}>
          {children}
        </div>
        <a href={github} className={styles.description_link}>Github</a>
        <a href={liveDemo} className={styles.description_link}>Live demo</a>
      </div>
    </div>
  );
}