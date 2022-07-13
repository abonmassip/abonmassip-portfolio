import ReactFullpage from '@fullpage/react-fullpage'
import { useState, useEffect } from 'react'
import Head from 'next/head'

import { Header } from '../components/header/Header.component'
import { Home } from '../components/home/home.component'
import { Projects } from '../components/projects/projects.component'
import { About } from '../components/about/about.component'

import { getProjectsData } from '../lib/projects'

export default function App({ projectsReact, projectsThreejs }) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    })
  }, [])
  const [scrollingTo, setScrollingTo] = useState('home')
  const [active, setActive] = useState('home')

  function onLeave(origin, destination, direction) {
    // console.log('scrolling to ', destination.anchor);
    setScrollingTo(destination.anchor)
  }

  function afterLoad(origin, destination, direction) {
    // console.log('active ', destination.anchor);
    setActive(destination.anchor)
  }

  return (
    <div>
      <Head>
        <title>Albert Bonmassip</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>

      <Header scrollingTo={scrollingTo} />

      <ReactFullpage
        licenseKey="7B41902B-58344F4B-8F05FF7C-D6511DD6"
        scrollingSpeed={500}
        anchors={['home', 'react', 'threejs', 'about']}
        onLeave={onLeave}
        afterLoad={afterLoad}
        slidesNavigation={true}
        credits={{ enabled: false }}
        // responsiveHeight={900}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Home scrollingTo={scrollingTo} />
              <Projects projectsData={projectsReact} what="react" />
              <Projects projectsData={projectsThreejs} what="threejs" />
              <About />
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export async function getStaticProps() {
  const projectsReact = await getProjectsData('react')
  const projectsThreejs = await getProjectsData('threejs')
  return {
    props: {
      projectsReact,
      projectsThreejs,
    },
  }
}
