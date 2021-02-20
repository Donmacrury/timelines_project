import Event from "./Event/Event";
import Location from "./Location/Location";
import "../containers/TimeLineContainer.css";
import Person from "./Person/Person";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const MapComponent = ({viewEventDetails, mapEvents, eventDetails}) => {

    // if (!events || !locations || !persons){
    //     return <span>SOMETHING AINT RIGHT</span>;
    // }

    
        // TODO: get working coordinates for each event
        const handleEventCoordinates = () => {
            // work out which form o fhte events list we need
            //  to then grab the relevant location data
            // const centerCoords = eventNodes[0]

            //get this events location
        }

        // TODO: a hook for events
        // useEffect(()=>{handleEventCoordinates()},[events])

        // TODO: handle date for each individual event

        return (
            <>
            <MapContainer id = 'mapid'center={[54.4, -3.8]} zoom={5.2} scrollWheelZoom={false}>
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
            {/* <section> */}
                
        
                {/* <div className="eventGrid">
                    {eventNodes}
                </div>
                <div className="locationGrid">
                    {locationNodes}
                </div>
                <div className="personsGrid">
                    {personNodes} */}
                {/* </div>
                
            </section> */}
            </>
        )

 }

export default MapComponent;
