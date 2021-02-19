import MapComponent from "../components/MapComponent";
import {useEffect, useState} from "react";
import "./TimeLineContainer.css";

const TimelineContainer = () => {

const [events, setEvents] = useState([]);
const [persons, setPersons] = useState([]);
const [locations, setLocations] = useState([]);


const fetchEvents = () => {

    const eventURL = `http://localhost:8080/events`;
    fetch(eventURL)
    .then((res)=>res.json())
    .then((data)=> {
        setEvents(data)
    })
}

const fetchPersons = () => {
    const personURL = `http://localhost:8080/persons`;
    fetch(personURL)
    .then((res)=>res.json())
    .then((data)=> {
        setPersons(data)
    })
}

const fetchLocations = () => {

    const locationURL = `http://localhost:8080/locations`;
    fetch(locationURL)
    .then((res)=>res.json())
    .then((data)=> {
        setLocations(data)
    })
}

useEffect(()=>{
    fetchEvents();
    fetchPersons();
    fetchLocations();
}, [])



return (
<>
    <div id="mainComponentCont">
    
    <MapComponent events={events} locations={locations} persons={persons} />

    </div>
</>

)

}

export default TimelineContainer;