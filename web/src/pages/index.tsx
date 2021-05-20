import Link from 'next/link'
import {useRouter} from 'next/router'
import { useState } from 'react';
import Sidebar from "../components/SideBar";

import styles from '../styles/pages/index.module.scss'

export default function Home() {
  const routes = useRouter()
  const [cep, setCep] = useState('')


  function handleSubmitCep(e) {
    e.preventDefault()

    routes.push(`/cep/${cep}`)
  }

  return (
    <div className={styles.container}>
      <Sidebar>
      <img src="/logo.svg" alt="W'Cep" id={styles.logo}/>
        <div className={styles.searchCepContainer}>
            <form onSubmit={handleSubmitCep} onKeyPress={e=> e.key === 'Enter' && handleSubmitCep}>
              <div>
                  <label htmlFor="">Digite seu cep:</label>

                  <input 
                    type="number" 
                    placeholder='00000-000' 
                    value={cep} 
                    onChange={e=> setCep(e.target.value)}
                    minLength={8}
                    maxLength={8}
                    required
                    
                    />
              </div>  

              <button>Pesquisar</button>
            </form>
        </div>
      </Sidebar>

      <div className={styles.content}>
        <img src="/home.svg" alt="" />
      </div>
    </div>
  )
}
