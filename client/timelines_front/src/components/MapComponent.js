import Person from "./Person";
import Event from "./Events";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const MapComponent = ({events}) => {

    console.log({events})

        const eventNodes = events.map((currentEvent, index)=>{
            return(
                <li key={index}> 
            <Event event={currentEvent}/></li>
            )
        });
    
        return (
            <>
            <MapContainer id = 'mapid'center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
            <section>
                {eventNodes}
            </section>
            </>
        )

 }

export default MapComponent;
