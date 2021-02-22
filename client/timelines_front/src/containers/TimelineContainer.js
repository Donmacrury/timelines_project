import MapComponent from "../components/MapComponent";
import {useEffect, useState} from "react";
import "./TimeLineContainer.css";
import EventForm from "../components/EventForm";
// import Dropdown from "./Dropdown";


const TimelineContainer = () => {

const [events, setEvents] = useState([]);
const [persons, setPersons] = useState([]);
const [locations, setLocations] = useState([]);
const [eventDetails, setEventDetails] = useState(null);


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

 const getEventDetails = (idToView)=>{

     return fetch(`http://localhost:8080/events/${idToView}`)
    .then(res => res.json())
}

 const viewEventDetails = idToView => {
    
    getEventDetails(idToView)
    .then((data) => {
        console.log(data)
        setEventDetails(data)
    })
    
}

 const addEventDetails = (data)=>{ 
     
     return fetch(`http://localhost:8080/events/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data)=>{
        setEvents([...events, data])
    })
    .catch((error) => console.log(error))

};

const addLocationDetails = (data)=>{ 
     
    return fetch(`http://localhost:8080/locations/`, {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
           'Content-Type': 'application/json'
       }
   })
   .then(res => res.json())
   .then((data)=>{
       setLocations([...locations, data])
   })
   .catch((error) => console.log(error))

};

    

useEffect(()=>{
    fetchEvents();
    fetchPersons();
    fetchLocations();
}, [])




return (
<>
    <div id="mainComponentCont">
    <EventForm events={events} eventDetails={addEventDetails} setEvents={setEvents}/>
    {/* <Dropdown locations={locations} locationDetails={addLocationDetails}/> */}
    <MapComponent viewEventDetails={viewEventDetails} events={events} locations={locations} persons={persons} eventDetails={eventDetails} newEvent={addEventDetails}/>

    </div>
</>

)

}

export default TimelineContainer;