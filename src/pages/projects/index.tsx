import React from 'react'
import styles from './styles.module.scss'
import axios from 'axios'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { MdVisibility } from 'react-icons/md'

const index = () => {
    const [dados, setDados] = React.useState(null)

    React.useEffect(() => {
        puxarDados()
    }, [])

    async function puxarDados() {
        const info = await axios.get('http://localhost:3333/projetos')
        setDados(info.data)
    }

    return (
        <div className={styles.projectContainer}>
            <h1>Projetos executados</h1>
            <div className={styles.projectCardContainer}>
                {dados && dados.map(item => {
                    return (<div key={item.id} className={styles.projectCard}>
                        <img src={item.img} alt={item.id} />
                        <h3>{item.id}</h3>
                        <p>{item.description}</p>
                        <p>{item.techs}</p>
                        <div className={styles.projectLinks}>
                            <Link href={item.site}>
                               <a target="__blank"><MdVisibility /></a>
                            </Link>
                            <Link href={item.github}>
                                <a target="__blank"><AiFillGithub /></a>
                            </Link>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default index
