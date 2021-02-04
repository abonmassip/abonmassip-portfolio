import ReactFullpage from '@fullpage/react-fullpage';
import { useState } from 'react';
import Head from 'next/head'

import styles from '../styles/App.module.scss'

import { Header } from '../components/header/Header.component';
import { Home } from '../components/home/home.component';
import { Projects } from '../components/projects/projects.component';
import { About } from '../components/about/about.component';

export default function App() {

  const [scrollingTo, setScrollingTo] = useState('home');
  const [active, setActive] = useState('home');

  function onLeave(origin, destination, direction) {
    setScrollingTo(destination.anchor);
  }

  function afterLoad(origin, destination, direction)  {
    setActive(destination.anchor);
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>Albert Bonmassip</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="fullpage.css" />
      </Head>

      <Header scrollingTo={scrollingTo} active={active}/>

      <ReactFullpage
        scrollingSpeed = {500}
        anchors={["home", "projects", "about"]}
        onLeave={onLeave}
        afterLoad={afterLoad}
        render={( {state, fullpageApi}) => {
          return (
            <ReactFullpage.Wrapper>
              <Home/>
              <Projects />
              <About />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  )
}
