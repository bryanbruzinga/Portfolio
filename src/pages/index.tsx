import Link from 'next/link';
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import {Slide} from '../components/Slide';
import TypeWritter from '../components/Typewritter';
import {motion} from 'framer-motion'

export default function Home() {

  return (
    <main className={styles.mainContainer}>
      
        <section className={styles.mainLeft}>
          <TypeWritter />
          <Link href="https://github.com/bryanbruzinga">
            <a target="__blank">
              <Image height={35} width={35} src='/github.svg' alt='Github' objectFit='cover' />
            </a>
          </Link>
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
        <Slide />
      </motion.div>
    </main>
  );
}
