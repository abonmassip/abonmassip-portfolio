import styles from './project.module.scss';

export function Project({image, title, text}) {

  return(
    <div className={styles.project}>

      <div className={styles.image} >
        <img src={image} alt={title} />
      </div>

      <div className={styles.info}>
        <h1 className="title color shadow-s">{title}</h1>
        <div className={styles.info_text} dangerouslySetInnerHTML={{ __html: text }}/>
      </div>

    </div>
  );
}