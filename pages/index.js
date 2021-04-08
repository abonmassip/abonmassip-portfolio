import ReactFullpage from '@fullpage/react-fullpage'
import { useState } from 'react'
import Head from 'next/head'

import { Header } from '../components/header/Header.component'
import { Home } from '../components/home/home.component'
import { Projects } from '../components/projects/projects.component'
import { About } from '../components/about/about.component'

import { getProjectsData } from '../lib/projects'

export default function App({ projectsData }) {
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
        anchors={['home', 'projects', 'about']}
        onLeave={onLeave}
        afterLoad={afterLoad}
        slidesNavigation={true}
        // responsiveHeight={900}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Home />
              <Projects projectsData={projectsData} />
              <About />
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export async function getStaticProps() {
  const projectsData = await getProjectsData()
  return {
    props: {
      projectsData,
    },
  }
}
