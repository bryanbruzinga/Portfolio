import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './styles.module.scss';

const index = () => {
    return (
        <section className={styles.sectionAbout}>
            <h1>Um pouco sobre mim</h1>

            <Image width={100} height={100} src="https://github.com/bryanbruzinga.png" alt="Bryan" objectFit='cover' className={styles.imgPhoto} />

            <p>Estou inciando no ramo de desenvolvimento, no caso mudando de carreira, atuava como eletricista industrial a maior parte do tempo, porém também atuei como Técnico de telecomunicações.</p>

            <p>Hoje busco uma oportunidade para atuar na área, inicialmente como desenvolvedor Front End, porém quero me especializar mais ainda para me tornar Full Stack.</p>

            <Link href="/techs">
                <a>Veja as Tecnologias que conheço e utilizo</a>
            </Link>

            <p>Atualmente curso Engenharia de Software na Unicesumar e venho fazendo projetos pessoais para aplicar meus conhecimentos, assim como evoluir na arte de codar.</p>

            <h2>Veja meu perfil</h2>

            <Link href="https://www.linkedin.com/in/bryan-da-silva-bruzinga-b6830960/">
                <a target="__blank">
                    <Image width={50} height={50} src="/linkedin.svg" alt="Linkedin" objectFit='cover' />
                </a>
            </Link>
        </section>
    )
}

export default index
