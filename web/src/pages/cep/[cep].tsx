import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic'
import Link from 'next/link';
import { useMemo } from 'react'

import Head from 'next/head';

import Sidebar from "../../components/SideBar";
import api from '../../services/api';

import styles from '../../styles/pages/cep.module.scss'

type CepData = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ddd:string;
    longitude: number;
    latitude: number;
}

type CepProps = {
    cep: CepData
}

export default function Cep({cep} : CepProps) {

    const Map = useMemo(() => dynamic(
        () => import('../../components/Map'), {
        loading: () => <p>Carregando o mapa</p>,
        ssr: false
    }), [])

    return (
        <div className={styles.container}>
            <img src="/logo.svg" alt="W'Cep" id={styles.logo}/>
            <Head>
                <title>W'cep | {cep.cep} </title>
            </Head>
            <Sidebar>
                <div className={styles.contentCep}>
                    <h2>Aqui está as informações disponiveis referente ao seu CEP</h2>
                    <ul>
                        <li>
                            <h4>CEP</h4>
                            <p>{cep.cep}</p>
                        </li>
                        <li>
                            <h4>Logradouro</h4>
                            <p>{cep.logradouro ? cep.logradouro : 'Indisponível'}</p>
                        </li>
                        <li>
                            <h4>Complemento</h4>
                            <p>{cep.complemento ? cep.complemento: 'Indisponível'}</p>
                        </li>
                        <li>
                            <h4>Bairro</h4>
                            <p>{cep.bairro ? cep.bairro : 'Indisponível'}</p>
                        </li>
                        <li className={styles.cityUF}>
                            <div>
                                <h4>Cidade</h4>
                                <p>{cep.localidade}</p>
                            </div>

                            <div>
                                <h4>UF</h4>
                                <p>{cep.uf}</p>
                            </div>
                        </li>
                        <li>
                            <h4>DDD</h4>
                            <p>{cep.ddd}</p>
                        </li>
                    </ul>
                    <Link href="/">
                        <button>Fazer uma nova pesquisa</button>
                    </Link>
                </div>

                <img src="/chevron.svg" alt="" className={styles.scroll}/>
            </Sidebar>

            <Map longitude={cep.longitude} latitude={cep.latitude} />
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { cep } = ctx.params;
    const { data } = await api.get(`/cep/${cep}`)
    if (!data) {
        return 
    } 
    const cepData = {
        cep: data.cep,
        logradouro: data.logradouro || '',
        complemento: data.complemento || '',
        bairro: data.bairro || '',
        localidade: data.localidade,
        uf: data.uf,
        ddd:data.ddd,
        longitude: Number(data.longitude),
        latitude: Number(data.latitude),
    }

    return {
        props: {
            cep: cepData
        },
        revalidate: 60 * 60 * 24
    }
}