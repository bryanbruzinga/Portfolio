import Link from 'next/link';
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';

export default function Home() {

  const images = ['/project-1.png', '/project-2.png', '/project-3.png']

  const [currentImage, setCurrentImage] = React.useState<number>(0)

  function imgChanger() {
    if (currentImage < images.length -1) {
      setCurrentImage(currentImage + 1)
    } else {
      setCurrentImage(0)
    }
  }

  return (
    <main className={styles.mainContainer}>
      <section className={styles.mainLeft}>
        <h2>Olá, me chamo Bryan e sou</h2>
        <h1>Desenvolvedor Front End</h1>

        <Link href="https://github.com/bryanbruzinga">
          <a><Image height={35} width={35} src='/github.svg' alt='Github' objectFit='cover' /></a>
        </Link>
      </section>
      <section className={styles.mainRight}>
        <div>          
          <Image height={350} width={600} src={images[currentImage]} alt='projeto' objectFit='cover' onLoad={() => imgChanger} />          
          <Link href="/projects">
            <a>Veja mais projetos</a>
          </Link>
        </div>
      </section>
    </main>
  );
}
