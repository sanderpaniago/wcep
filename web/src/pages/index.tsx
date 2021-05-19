import Sidebar from "../components/SideBar";

import styles from '../styles/pages/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar>
        <div className={styles.searchCepContainer}>
            <div>
                <label htmlFor="">Digite seu cep:</label>
                <input type="text" placeholder='00000-000' />
            </div>

            <button>Pesquisar</button>
        </div>
      </Sidebar>

      <div className={styles.content}>
        <img src="/home.svg" alt="" />
      </div>
    </div>
  )
}
