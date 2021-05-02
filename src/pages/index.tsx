import Link from 'next/link';
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import Slide from '../components/Slide';

export default function Home() {

  return (
    <main className={styles.mainContainer}>
      <section className={styles.mainLeft}>
        <h2>Olá, me chamo Bryan e sou</h2>
        <h1>Desenvolvedor Front End</h1>
        <Link href="https://github.com/bryanbruzinga">
          <a target="__blank"><Image height={35} width={35} src='/github.svg' alt='Github' objectFit='cover' /></a>
        </Link>
      </section>
      <Slide />
    </main>
  );
}
