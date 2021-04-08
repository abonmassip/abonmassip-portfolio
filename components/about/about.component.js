import styles from './about.module.scss';

export function About() {
  return (
    <div className="section" data-anchor="about">
      <div className={styles.about}>
        <div className={styles.card}>
          <div className={styles.card_avatar_box}>
            <div className={styles.card_avatar}>
              <img src="/img/avatar_a.png" alt="Albert" />
            </div>
          </div>
          <div className={styles.card_details}>
            <div>
              <p>Albert Bonmassip</p>
              <p>Palms, Los Angeles</p>
              <p>abonmassip@gmail.com</p>
            </div>
            <div className={styles.card_details_logos}>
              <a href="https://github.com/abonmassip" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 439">
                  <path d="M225-.400072C100.8-.400072 0 100.3 0 224.6 0 324 64.5 408.3 153.9 438.1c11.2 2.1 15.4-4.9 15.4-10.8 0-5.4-.2-23.1-.3-41.9-62.6 13.6-75.8-26.5-75.8-26.5-10.2-26-25-32.9-25-32.9-20.4-14 1.5-13.7 1.5-13.7 22.6 1.6 34.5 23.2 34.5 23.2 20.1 34.4 52.6 24.4 65.5 18.7 2-14.5 7.8-24.5 14.3-30.1-50-5.7-102.5-25-102.5-111.2 0-24.6 8.8-44.6 23.2-60.4-2.3-5.7-10-28.5 2.2-59.5001 0 0 18.9-6 61.9 23.1001 17.9-5 37.2-7.5 56.3-7.6 19.1.1 38.4 2.6 56.4 7.6 42.9-29.1001 61.8-23.1001 61.8-23.1001C355.5 124 347.9 146.9 345.5 152.5c14.4 15.7 23.1 35.8 23.1 60.4 0 86.4-52.6 105.4-102.7 111 8.1 7 15.3 20.7 15.3 41.7 0 30.1-.3 54.3-.3 61.7 0 6 4 13 15.5 10.8C385.6 408.2 450 323.9 450 224.5 450 100.3 349.3-.500072 225-.400072z"/>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/abonmassip/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M27.3 27.3h-4.7v-7.4c0-1.8 0-4-2.5-4s-2.8 1.9-2.8 3.9v7.6h-4.7V12H17v2.1h.1c.6-1.2 2.2-2.5 4.5-2.5 4.8 0 5.7 3.2 5.7 7.3v8.4zM7.1 9.9c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.7 2.8-2.7s2.8 1.2 2.8 2.7c0 1.6-1.3 2.8-2.8 2.8zm2.4 17.4H4.7V12h4.7v15.3zM29.6 0H2.4C1.1 0 0 1 0 2.3v27.4C0 31 1.1 32 2.4 32h27.3c1.3 0 2.4-1 2.4-2.3V2.3C32 1 30.9 0 29.6 0z"/>
                </svg>
              </a>

              <a href="mailto:abonmassip@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M371.496 485.52C327.36 505.384 289.104 512 236.872 512 114.76 512 7.352 424.456 7.352 280.28 7.352 130.208 116.224 0 282.488 0c129.472 0 222.16 89.016 222.16 212.6 0 107.4-60.32 175.08-139.768 175.08-34.576 0-59.584-17.656-63.264-56.648h-1.472c-22.8 37.52-55.904 56.648-94.896 56.648-47.816 0-82.392-35.312-82.392-95.64 0-89.744 66.208-171.4 172.136-171.4 32.368 0 69.144 8.096 87.544 18.392l-22.064 136.096c-7.352 43.392-2.208 63.264 18.392 63.992 31.632.736 71.352-39.728 71.352-124.32 0-95.632-61.792-169.936-175.824-169.936-112.544 0-211.128 88.28-211.128 228.784 0 122.848 78.712 192.736 188.328 192.736 37.52 0 77.248-8.088 106.664-23.544l13.24 42.68zm-65.472-303.816c-5.888-1.472-13.248-2.944-22.808-2.944-48.544 0-86.808 47.816-86.808 104.456 0 27.952 12.512 45.608 36.784 45.608 27.216 0 55.912-34.576 62.528-77.24l10.304-69.88z"/>
                </svg>
              </a>

              <a href="https://abonmassip.artstation.com/" target="_blank">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 398">
                  <path d="M0 306.5l38.1 65.8c7.7 15.4 23.4 25.1 40.6 25.1h252.7L279 306.5H0zm442.6-24.3L295.4 24.8001C287.5 9.9001 272 .600098 255.2.600098h-78.3L404.8 397l36-62.4c1.7-2.9 18.6-26.3 1.8-52.4zm-200.8-40.3L139.5 64.8001 37.2 241.9h204.6z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.description}>
          <p>
            <span className={styles.big}>HELLO!</span>
            &nbsp;I'm Albert, a front-end developer based in Los Angeles<span className="emoji">🌴</span>. I recently changed careers looking for new opportunities and challenges. My focus area is front-end development with Javascript and React.
            Previously I worked as a 3D generalist, you can check out my 3D stuff <a href="https://abonmassip.artstation.com/"  target="_blank">here</a>.
          </p>
          <p>
            <span className={styles.big}>SKILLED</span>
            &nbsp;in <b>HTML5</b>, <b>CSS</b> and <b>Javascript</b>. The frameworks and libraries I mostly use are <b>React</b>, <b>Redux</b>, <b>Next.js</b>, <b>Sass</b> and <b>Styled Components</b>. Experienced with <b>Git</b>, version control and responsive web development.
          </p>
          <p>
            Check out my <a href="https://www.notion.so/abonmassip/Albert-Bonmassip-4d7471627e794160999bc4506b01d6a3" target="_blank">CV</a> or download the <a href="/AlbertBonmassip_CV.pdf" target="_blank">PDF</a>.
          </p>
          <span className={styles.big}>I LOVE </span>
          <span className="emoji">🎸🎹🎼 🌄⛺🏖️ 🎮👾</span>
        </div>

        <div className={styles.footer}>
          <p>Albert Bonmassip © 2021</p>
        </div>
      </div>
    </div>
  )
}