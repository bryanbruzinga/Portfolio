import React from 'react'
import styles from './styles.module.scss'
import axios from 'axios'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { MdVisibility } from 'react-icons/md'
import Tooltip from '../../components/Tooltip'
import {GrReactjs} from 'react-icons/gr'

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
                            <Tooltip text="Veja online">
                                <Link href={item.site}>
                                <a target="__blank"><MdVisibility /></a>
                                </Link>
                            </Tooltip>
                            <Tooltip text="Veja o código">
                                <Link href={item.github}>
                                    <a target="__blank"><AiFillGithub /></a>
                                </Link>
                            </Tooltip>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default index
