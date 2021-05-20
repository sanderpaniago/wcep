import express from 'express';
import CepControll from './controllers/CepControll';

const routes = express.Router()

routes.get('/cep/:cep', (req, res) => CepControll.create(req,res))
routes.get('/', (req, res) => CepControll.index(req,res))


export default routes