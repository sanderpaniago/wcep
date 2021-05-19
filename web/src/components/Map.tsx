import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map() {
    return (
        <MapContainer 
            center={[51.505, -0.09]} 
            zoom={13}
            scrollWheelZoom={false}
            style={{height: '100%' ,width: '100%'}}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
            />
        </MapContainer>
    )
}