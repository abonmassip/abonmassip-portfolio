import styles from './logo.module.scss';

let opacity = 0;

function trackPosition(e) {
  const mousePos = e.clientX - e.currentTarget.getBoundingClientRect().x;
  const logoWidth = e.currentTarget.getBoundingClientRect().width;
  const newOpacity = mousePos/logoWidth;
  const logo = document.querySelectorAll(".pathAnimation");
  logo.forEach(element => {
    element.style["fill-opacity"] = newOpacity;
    element.style["stroke-opacity"] = newOpacity;
  });
  opacity = newOpacity;
}

export function Logo({scale}) {

  function fixOpacity() {
    const logo = document.querySelectorAll(".pathAnimation");
    if (opacity >= 0.5) {
      logo.forEach(element => {
        element.style["fill-opacity"] = "1";
        element.style["stroke-opacity"] = "1";
      });
    } else {
      logo.forEach(element => {
        element.style["fill-opacity"] = "0";
        element.style["stroke-opacity"] = "0";
      });
    }
  }

  return(

      <svg 
        width={Math.floor(scale * 1.1)}
        height={scale}
        onMouseMove={trackPosition}
        onMouseLeave={fixOpacity}
        viewBox="0 0 550 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 500L549 500L299 0L251 0L1 500Z" className={styles.fillLight}/>
        <path d="M500 500H550L300 0H250L500 500Z" className={styles.fillShadow}/>
        <path d="M200 250L325 500H375L250 250H200Z" className={styles.fillShadow}/>
        <path d="M200 250L75 500" className={styles.strokeShadow}/>
        <path className={`pathAnimation ${styles.fillShadow}`} d="M0 500L550 500L300 0L250 0L0 500Z" fillOpacity={opacity}/>
        <path className={`pathAnimation ${styles.fillLight}`} d="M500 500H551L301 0H250L500 500Z" fillOpacity={opacity}/>
        <path className={`pathAnimation ${styles.fillLight}`} d="M200 250L325 500H375L250 250H200Z" fillOpacity={opacity}/>
        <path className={`pathAnimation ${styles.strokeLight}`} d="M200 250L75 500" strokeOpacity={opacity}/>
      </svg>

  )
}