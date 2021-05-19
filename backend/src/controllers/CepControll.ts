import {Request, Response} from 'express'
import { getRepository } from 'typeorm'

import axios from 'axios'
import * as Yup from 'yup'

import Cep from '../models/Cep'

const apiVia = axios.create({
    baseURL: 'https://viacep.com.br'
})

export default {
    async create(req: Request, res: Response) {
        const { cep } = req.params

        const cepRespository = getRepository(Cep)

        const {data: resViaCep} = await apiVia.get(`/ws/${cep}/json/`)

        console.log(resViaCep)

        const data = {
            ...resViaCep,
            latitude: '',
            longitude: '',
        }

        const schema = Yup.object().shape({
            cep: Yup.string().required(),
            logadouro: Yup.string().required(),
            complemento: Yup.string().required(),
            bairro: Yup.string().required(),
            localidade: Yup.string().required(),
            uf: Yup.string().required(),
            //latitude: Yup.string().required(),
            //longitude: Yup.string().required(),
        })

        await schema.validate(data, {abortEarly: false})

        const newCep = cepRespository.create(data)

        await cepRespository.save(newCep)

        return res.status(201).json(newCep)
    },

    index: async (req: Request, res: Response) => {
        const cepRespository = getRepository(Cep)

        const cep = await cepRespository.find();

        return res.status(200).json(cep)
    }
}