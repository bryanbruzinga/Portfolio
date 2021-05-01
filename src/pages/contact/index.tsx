import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss';

type dados = {
    id: string;
    link: string;
    description: string;
    src: string;
}

const index = () => {

    const formasContato = [
        {
            'id': 'Github',
            'link': 'https://github.com/bryanbruzinga',
            'description': '',
            'src': '/github.svg'
        },
        {
            'id': 'Linkedin',
            'link': 'https://www.linkedin.com/in/bryan-da-silva-bruzinga-b6830960/',
            'description': '',
            'src': '/linkedin.svg'
        },
        {
            'id': 'Whatsapp',
            'link': 'https://wa.me/5543984057266',
            'description': '(43) 9 8405-7266',
            'src': '/whatsapp.svg'
        },
        {
            'id': 'Email',
            'link': 'mailto:bryanbruzinga1990@gmail.com',
            'description': 'bryanbruzinga1990@gmail.com',
            'src': '/gmail.svg'
        }
    ]

    return (
        <section className={styles.sectionContact}>
            <h1>Fale comigo</h1>
            {formasContato.map(dados => {
                return (
                <a href={dados.link} target="__blank" key={dados.id}>
                    <Image width={50} height={50} src={dados.src} alt={dados.id} objectFit='cover' />
                    {dados.description}
                </a>
                )})}
        </section>
    )
}

export default index
