export function Logo({scale, lightColor, shadowColor}) {
  let opacity = 0;

  function trackPosition(e) {
    const mousePos = e.clientX - e.currentTarget.getBoundingClientRect().x;
    const logoWidth = e.currentTarget.getBoundingClientRect().width;
    const newOpacity = mousePos/logoWidth;
    const logo = document.querySelectorAll(".pathAnimation");
    logo.forEach(element => element.setAttribute("fill-opacity", newOpacity));
    opacity = newOpacity;
  }

  function fixOpacity() {
    const logo = document.querySelectorAll(".pathAnimation");
    if (opacity >= 0.5) {
      logo.forEach(element => element.setAttribute("fill-opacity", "1"));
    } else {
      logo.forEach(element => element.setAttribute("fill-opacity", "0"));
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
        <path d="M0 500L500 500L250 -2L-1 500Z" fill={lightColor}/>
        <path d="M500 500H550L300 0H250L500 500Z" fill={shadowColor}/>
        <path d="M200 250L325 500H375L250 250H200Z" fill={shadowColor}/>
        <path d="M200 250L75 500" stroke={shadowColor}/>
        <path className="pathAnimation" d="M0 500L500 500L250 -2L-1 500Z" fill={shadowColor} fillOpacity={opacity}/>
        <path className="pathAnimation" d="M500 500H550L300 0H250L500 500Z" fill={lightColor} fillOpacity={opacity}/>
        <path className="pathAnimation" d="M200 250L325 500H375L250 250H200Z" fill={lightColor} fillOpacity={opacity}/>
        <path className="pathAnimation" d="M200 250L75 500" stroke={lightColor} fillOpacity={opacity}/>
        {/* <path d="M200 250L325 500" stroke="white" strokeWidth="2"/>
        <path d="M250 0L0 500" stroke={shadowColor}/>
        <path d="M250 0L500 500" stroke="white" strokeWidth="2"/> */}
      </svg>

  )
}