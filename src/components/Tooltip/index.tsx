import React from 'react'
import styles from './styles.module.scss';

const Tooltip = ({text, children}) => {
    return (
        <div className={styles.tooltip}>
            {children}
            <span>{text}</span>
        </div>
    )
}

export default Tooltip
