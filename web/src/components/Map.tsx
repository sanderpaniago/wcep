import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type MapProps = {
    longitude: number;
    latitude: number;
}

export default function Map({longitude, latitude} : MapProps) {
    return (
        <MapContainer 
            center={[ latitude, longitude ]} 
            zoom={14}
            scrollWheelZoom={false}
            style={{minHeight: '100vh' ,width: '100%'}}
            touchZoom={false}
            dragging={false}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
            />
        </MapContainer>
    )
}