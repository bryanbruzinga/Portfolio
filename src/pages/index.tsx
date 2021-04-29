import Link from 'next/link';
import React from 'react';
import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <section>
        <h2>Olá, me chamo Bryan e sou</h2>
        <h1>Desenvolvedor Front End</h1>

        <Link href="https://github.com/bryanbruzinga">Meu Github</Link>
      </section>
      <section>
        <Link href="/projects">Veja meus projetos</Link>
      </section>
    </main>
  );
}
