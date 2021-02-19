import {useState, useEffect} from "react";
import Event from "./Event";
import Location from "./Location";
import "../containers/TimeLineContainer.css";
import Person from "./Person";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const MapComponent = ({events, locations, persons}) => {

    const [currentLocation, setCurrentLocation] = useState({ lat: 53.4084, lng: -2.9916 });
    const [zoom, setZoom] = useState(5);
    const markerIcon = L.icon({
        
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Muskets.svg/1488px-Muskets.svg.png", 
        iconSize: [32, 32] 
      });

    if (!events || !locations || !persons){
        return <span>SOMETHING AINT RIGHT</span>;
    }

        const eventNodes = events.map((currentEvent, index)=>{
            return(
                
            <li key={index}> 
            <Event event={currentEvent}/>
            </li>
            )
        });


        const locationNodes = locations.map((currentLocation, index)=>{
            return(
                <li key={index}> 
            <Location location={currentLocation}/></li>
            )
        });

        const personNodes =  persons.map((currentPerson, index) => {
            return (
                <li key={index}>
            <Person person={currentPerson}/> </li>
            )
        });


        // const locationNodes = locations.map((currentLocation, index)=>{
        //     return (
        //     <Marker key={index} position={[currentLocation.latitude, currentLocation.longitude]} icon={markerIcon} >
        //         <Popup>
        //             <Location
        //             name={currentLocation.name}
        //             description={currentLocation.description}
        //         />
        //         </Popup>
        //       </Marker>
        //       )
        // })

        const eventMarker = events.map((currentEvent, index)=>{
            return (
                <Marker key={index} position={[currentEvent.location.latitude, currentEvent.location.longitude]} icon={markerIcon} >
                <Popup>
                    Place
                    <Event
                    event={currentEvent}
                /> 
                </Popup>
              </Marker>
            )
        })



    
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
            <MapContainer id = 'mapid' center={currentLocation} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {eventMarker}
            </MapContainer>

            <section>

                <div className="eventGrid">
                    {eventNodes}
                </div>
                <div className="locationGrid">
                    {locationNodes}
              </div>
                <div className="personsGrid">
                    {personNodes}
                </div>
                
            </section>
            </>
        )

 }

export default MapComponent;
