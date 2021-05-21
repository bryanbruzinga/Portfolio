import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tooltip from '../../components/Tooltip';
import styles from './styles.module.scss';
import Lottie from 'react-lottie'
import animationData from '../../lotties/coronavirus.json'
import {Bounce, Fade} from 'react-reveal'

const index = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <section className={styles.sectionAbout}>
            <div className={styles.sectionAboutLeft}>
                <Fade top>
                    <h1>Um pouco sobre mim</h1>
                </Fade>
                <Bounce left>
                    <Lottie options={defaultOptions} height={500} width={500} />
                </Bounce>            
            </div>

            <div className={styles.sectionAboutRight}>
                <Fade bottom>
                    <p>Estou mudando de carreira, atuei no ramo industrial durante anos e estou em busca da minha primeira oportunidade.</p>

                    <p>No momento só trabalho com Front-End, mas nada me impede de aprender e me especializar em outras áreas, como Back-End.</p>

                    <p>Estou cursando Engenharia de Software na Unicesumar e venho fazendo projetos pessoais para aplicar e ampliar meus conhecimentos, bora ser meu chefe? rsrs</p>
                </Fade>
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
