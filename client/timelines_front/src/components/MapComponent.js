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
    
        // TODO: get working coordinates for each event
        const handleEventCoordinates = () => {
            // work out which form o fhte events list we need to grab the relevant 
            // location data
            // const centerCoords = eventNodes[0]//get this events location
        }

        // TODO: a hook for events
        // useEffect(()=>{handleEventCoordinates()},[events])

        // TODO: handle date for each individual event

        return (
            <>
            <MapContainer id = 'mapid'center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
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
