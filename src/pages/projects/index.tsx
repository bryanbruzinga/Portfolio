import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { MdVisibility } from 'react-icons/md'
import Tooltip from '../../components/Tooltip'
import {GetStaticProps} from 'next'
import Lottie from 'react-lottie'
import animationData from '../../lotties/programming.json'
import {projects}  from '../../projetos'
import Pagination from '../../components/Pagination'

interface Projects {
    id: string,
    img: string,
    description: string,
    github: string,
    site: string,
    techs: string
}

interface ProjectProps {
    projects: Projects[]
}

export default function index ({projects} : ProjectProps) {
    const [currentPage, setCurrentPage] = React.useState<number>(1)
    const [newProjects, setNewProjects] = React.useState(null)
    const amountProjectsPerPage = 2

    React.useEffect(() => {
        setNewProjects(projects.slice(((currentPage - 1) * amountProjectsPerPage), (currentPage * amountProjectsPerPage)))     
    }, [currentPage, amountProjectsPerPage])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectTitle}>
                <h1>Projetos Pessoais</h1>
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className={styles.projectCardContainer}>
                <div className={styles.projectCardList}>
                    {newProjects && newProjects.map(item => {
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
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} total={projects.length} amountProjectsPerPage={amountProjectsPerPage} />
            </div>
            
        </div>
    )
}

export const getStaticProps : GetStaticProps<ProjectProps> = async () => {

    return {
        props: {
            projects
        }
    }
}