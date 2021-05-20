import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const coordenadasApi = async (localidade: string, uf:string) => {
    const {data } = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${localidade}  ${uf}.json?access_token=${process.env.MAPBOX_KEY}`)
    
    const [longitude, latitude] = data.features[0].center

    return {
        longitude, 
        latitude
    }
}

export { 
    coordenadasApi
}