import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss';
import Lottie from 'react-lottie'
import animationData from '../../lotties/contact-us.json'

type dados = {
    id: string;
    link: string;
    description: string;
    src: string;
}

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
        <section className={styles.sectionContact}>
            <h1>Fale comigo</h1>
            <div className={styles.contact}>
            <Lottie options={defaultOptions} height={400} width={400} />
                <div className={styles.containerContact}>
                    
                </div>
            </div>
        </section>
    )
}

export default index
