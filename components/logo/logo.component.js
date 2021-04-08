import styles from './logo.module.scss';

let position = 0;

function trackPosition(e) {
  const mousePos = e.clientX - e.currentTarget.getBoundingClientRect().x;
  const logoWidth = e.currentTarget.getBoundingClientRect().width;
  position = mousePos/logoWidth;
}

function fixOpacity() {
  document.querySelectorAll('[data-animation]').forEach(el => {
    el.style["fill-opacity"] = el.style["stroke-opacity"] = Math.round(position);
  });
}

export const Logo = ({scale = 1000}) => (
  <svg 
    width={Math.floor(scale * 1.1)}
    height={scale}
    onMouseMove={trackPosition}
    onMouseLeave={fixOpacity}
    viewBox="0 0 550 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path className={styles.fillLight} d="M0 500L549 500L299 0L251 0L1 500Z" />
    <path className={styles.fillShadow} d="M500 500H550L300 0H250L500 500Z" />
    <path className={styles.fillShadow} d="M200 250L325 500H375L250 250H200Z" />
    <path className={styles.strokeShadow} d="M200 250L75 500" />
    <path data-animation className={styles.fillShadow} fillOpacity={0} d="M0 500L550 500L300 0L250 0L0 500Z" />
    <path data-animation className={styles.fillLight} fillOpacity={0} d="M500 500H551L301 0H250L500 500Z" />
    <path data-animation className={styles.fillLight} fillOpacity={0} d="M200 250L325 500H375L250 250H200Z" />
    <path data-animation className={styles.strokeLight} strokeOpacity={0} d="M200 250L75 500" />
  </svg>
);