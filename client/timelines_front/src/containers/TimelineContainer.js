import {useEffect, useState} from "react";

const TimelineContainer = () => {

const [events, setEvents] = useState([]);
const [persons, setPersons] = useState([]);
const [location, setLocation] = useState([]);

const eventURL = `http://localhost:8080/events`;
const personURL = `http://localhost:8080/persons`;
const locationURL = `http://localhost:8080/locations`;


const fetchEvents = () => {
    fetch(eventURL)
    .then((res)=>res.json())
    .then((data)=> {
        setEvents(data)
    })
}

const fetchPersons = () => {
    fetch(personURL)
    .then((res)=>res.json())
    .then((data)=> {
        setPersons(data)
    })
}

const fetchLocation = () => {
    fetch(locationURL)
    .then((res)=>res.json())
    .then((data)=> {
        setLocation(data)
    })
}

useEffect(()=>{
    fetchEvents();
    fetchPersons();
    fetchLocation();
}, [])



return (
    <MapComponent events={events} />
)

}

export default TimelineContainer;