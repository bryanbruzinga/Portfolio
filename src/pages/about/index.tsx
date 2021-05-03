import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tooltip from '../../components/Tooltip';
import styles from './styles.module.scss';

const index = () => {
    return (
        <section className={styles.sectionAbout}>
            <div className={styles.sectionAboutLeft}>
                <h1>Um pouco sobre mim</h1>

                <Image width={100} height={100} src="https://github.com/bryanbruzinga.png" alt="Bryan" objectFit='cover' className={styles.imgPhoto} />

                <h2>Veja meu perfil</h2>

                <Link href="https://www.linkedin.com/in/bryan-da-silva-bruzinga-b6830960/">
                    <a target="__blank">
                        <Image width={50} height={50} src="/linkedin.svg" alt="Linkedin" objectFit='cover' />
                    </a>
                </Link>
            </div>

            <div className={styles.sectionAboutRight}>
                <p>Estou iniciando no ramo de desenvolvimento, em transição de carreira, atuei como eletricista industrial a maior parte do tempo e também atuei como Técnico de telecomunicações.</p>

                <p>Hoje busco uma oportunidade para atuar na área, inicialmente como desenvolvedor Front End, porém quero me especializar mais ainda para me tornar Full Stack.</p>

                <p>Atualmente curso Engenharia de Software na Unicesumar e venho fazendo projetos pessoais para aplicar meus conhecimentos, assim como evoluir na arte de codar.</p>
                <div className={styles.btnAbout}>
                    
                <Tooltip text="Tecnologias que uso">
                    <Link href="/techs">
                    <Image width={50} height={50} src="/skills.svg" alt="tecnologias" objectFit='cover' />
                    </Link>
                </Tooltip>

                <Tooltip text="Meu Currículo">
                    <Link href="https://drive.google.com/file/d/1g9-HX8VxfmqIVgprbZn9hfUyqqpTUBVU/view?usp=sharing">
                        <Image width={50} height={50} src="/cv.svg" alt="Currículo" objectFit='cover' />
                    </Link>
                </Tooltip>                   
                </div>
            </div>
        </section>
    )
}

export default index
