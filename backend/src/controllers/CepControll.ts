import {Request, Response} from 'express'
import { getRepository } from 'typeorm'

import axios from 'axios'
import * as Yup from 'yup'

import {Cep} from '../models/Cep'

import { coordenadasApi } from '../service/mapBox'

const apiVia = axios.create({
    baseURL: 'https://viacep.com.br'
})


export default {
    async create(req: Request, res: Response) {

        try {
            const { cep } = req.params
            
            const cepRespository = getRepository(Cep)

            const verifyIsCepCach = await cepRespository.findOne({cep: cep})
            
            if(verifyIsCepCach) {
                return res.status(200).json(verifyIsCepCach)
            }

            const {data: resViaCep} = await apiVia.get(`/ws/${cep}/json/`)   
            const coordenadas = await coordenadasApi(resViaCep.localidade, resViaCep.uf)
            
            const data = {
                cep,
                logradouro: resViaCep.logradouro || '',
                complemento: resViaCep.complemento || '',
                bairro: resViaCep.bairro || '',
                localidade: resViaCep.localidade,
                uf: resViaCep.uf,
                ddd: resViaCep.ddd,
                latitude: coordenadas.latitude,
                longitude: coordenadas.longitude,
            }

            const schema = Yup.object().shape({
                cep: Yup.string().required(),
                logradouro: Yup.string(),
                complemento: Yup.string(),
                bairro: Yup.string(),
                localidade: Yup.string().required(),
                uf: Yup.string().required(),
                ddd: Yup.string(),
                latitude: Yup.string().required(),
                longitude: Yup.string().required(),
            })
            
            await schema.validate(data, {abortEarly: false})
            
            const newCep = cepRespository.create(data)
            await cepRespository.save(newCep)
            
            return res.status(201).json(newCep)


        } catch (err) {
            return res.json(err)
        }
    },

    index: async (req: Request, res: Response) => {
        const cepRespository = getRepository(Cep)

        const cep = await cepRespository.find();

        return res.status(200).json(cep)
    }
}