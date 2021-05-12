import Link from 'next/link';
import React from 'react';
import styles from './home.module.scss';
import TypeWritter from '../components/Typewritter';
import {motion} from 'framer-motion'
import {GoLogoGithub} from 'react-icons/go'
import {AiFillGithub} from 'react-icons/ai'
import {FaHandSpock} from 'react-icons/fa'
import Image from 'next/image';

export default function Home() {

  return (
    <main className={styles.mainContainer}>      
        <section className={styles.mainLeft}>
          <TypeWritter />
          <div className={styles.mainLinks}>
            <Link href="https://github.com/bryanbruzinga">
              <a target="__blank">
                <AiFillGithub />
                <GoLogoGithub />
              </a>
            </Link>
            <Link href="/projects">
              <a>
               <FaHandSpock />Meus projetos
              </a>
            </Link>
          </div>
        </section>
      
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .5
          }
        }
      }}>
        <Image height={400} width={400} src="/giphy.gif" alt="Developer" objectFit='cover' />
      </motion.div>
    </main>
  );
}
