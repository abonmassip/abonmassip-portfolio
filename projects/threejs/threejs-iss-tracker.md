---
date: '2022-10-05'
title: 'Three.js ISS Tracker'
links:
  {
    Github: 'https://github.com/abonmassip/iss-tracker-threejs',
    ['Live demo']: 'https://statuesque-kataifi-933e9a.netlify.app/#debug',
  }
---

I used this [API](https://wheretheiss.at/w/developer) to show the current ISS position on a 3D scene. This project helped me improve my skills using Three.js and better organize my code. I also played a bit with custom shaders, creating the atmosphere shader using the Fresnel Schlick's Approximation formula, and modifying the built in material of the earth to show the lights only on the shadow side. There is a debug menu adding `#debug` at the end of the URL.

Built with **Three.js**, used **GSAP** for animations and **lil-gui** for the debug menu.
