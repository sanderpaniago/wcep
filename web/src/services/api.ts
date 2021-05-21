import axios from 'axios';

const api = axios.create({
    baseURL: process.env.AMBIENT === 'dev' ? 'http://localhost:3333/' : process.env.URL_SERVER_EC2
})

export default api