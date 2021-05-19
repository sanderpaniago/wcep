import express from 'express';
import CepControll from './controllers/CepControll';

const routes = express.Router()

routes.get('/', (req, res) => CepControll.create(req,res))
routes.get('/:cep', (req, res) => CepControll.index(req,res))


export default routes