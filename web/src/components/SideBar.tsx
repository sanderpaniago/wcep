import { ReactNode } from 'react'
import styles from '../styles/components/sidebar.module.scss'

type SidebarProps = {
    children: ReactNode
}
export default function Sidebar({children}: SidebarProps) {
    return (
        <div className={styles.container}>
            <img src="/logo.svg" alt="W'Cep" />
            {children}
        </div>
    )
}