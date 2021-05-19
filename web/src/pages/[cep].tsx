import dynamic from 'next/dynamic'
import {useMemo} from 'react'

import Sidebar from "../components/SideBar";

import styles from '../styles/pages/cep.module.scss'

export default function Cep() {
    
    const Map = useMemo( () => dynamic(
            ()=> import('../components/Map'),{
            loading: ()=> <p>Carregando o mapa</p>, 
            ssr: false
            }),[])

    return(
        <div className={styles.container}>
            <Sidebar>
                <div className={styles.contentCep}>
                    <h2>Aqui está as informações disponiveis referente ao seu CEP</h2>
                    <ul>
                        <li>
                            <h4>CEP</h4>
                            <p>79550-000</p>
                        </li>
                        <li>
                            <h4>Logadouro</h4>
                            <p>Praça da Sé</p>
                        </li>
                        <li>
                            <h4>Complemento</h4>
                            <p>Lado Ímpar</p>
                        </li>
                        <li>
                            <h4>Bairro</h4>
                            <p>Sé</p>
                        </li>
                        <li className={styles.cityUF}>
                            <div>
                                <h4>Cidade</h4>
                                <p>79550-000</p>
                            </div>

                            <div>
                                <h4>UF</h4>
                                <p>SP</p>
                            </div>
                        </li>
                        <li>
                            <h4>DDD</h4>
                            <p>11</p>
                        </li>
                    </ul>

                    <button>Fazer uma nova pesquisa</button>
                </div>
            </Sidebar>

            <Map />
        </div>
    )
}