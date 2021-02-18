import MapComponent from "../components/MapComponent";
import {useEffect, useState} from "react";

const TimelineContainer = () => {

const [events, setEvents] = useState([]);
// const [persons, setPersons] = useState([]);
// const [locations, setLocations] = useState([]);

// const personURL = `http://localhost:8080/persons`;
// const locationURL = `http://localhost:8080/locations`;


const fetchEvents = () => {

    const eventURL = `http://localhost:8080/events`;
    fetch(eventURL)
    .then((res)=>res.json())
    .then((data)=> {
        setEvents(data)
    })
}

// const fetchPersons = () => {
//     fetch(personURL)
//     .then((res)=>res.json())
//     .then((data)=> {
//         setPersons(data)
//     })
// }

// const fetchLocation = () => {
//     fetch(locationURL)
//     .then((res)=>res.json())
//     .then((data)=> {
//         setLocations(data)
//     })
// }

useEffect(()=>{
    fetchEvents();
    // fetchPersons();
    // fetchLocation();
}, [])



return (
    
    <MapComponent events={events} />
)

}

export default TimelineContainer;