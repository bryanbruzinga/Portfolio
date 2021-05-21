import Link from 'next/link';
import React from 'react';
import styles from './home.module.scss';
import TypeWritter from '../components/Typewritter';
import {GoLogoGithub} from 'react-icons/go'
import {AiFillGithub} from 'react-icons/ai'
import {FaHandSpock} from 'react-icons/fa'
import Lottie from 'react-lottie'
import animationData from '../lotties/person.json'
import {Fade} from 'react-reveal'

export default function Home() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <main className={styles.mainContainer}>      
        <section className={styles.mainLeft}>
          <Fade>
            <div>
              <span>&lt;h1&gt;</span>
              <TypeWritter />
              <span>&lt;/h1&gt;</span>
            </div>
          </Fade>
          <Fade bottom>
            <div className={styles.mainLinks}>
              <Link href="https://github.com/bryanbruzinga">
                <a target="__blank">
                  <AiFillGithub />
                  <GoLogoGithub />
                </a>
              </Link>
              <Link href="/projects">
                <a>
                <span><FaHandSpock /></span>Meus projetos
                </a>
              </Link>
            </div>
          </Fade>
        </section>
      <Fade right>
        <Lottie options={defaultOptions} height={600} width={400} />
      </Fade>
    </main>
  );
}
