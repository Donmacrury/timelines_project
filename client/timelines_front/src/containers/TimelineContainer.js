import MapComponent from "../components/MapComponent";
import {useEffect, useState} from "react";
import "./TimeLineContainer.css";
import FilterComponent from "../components/FilterComponent";

const TimelineContainer = () => {

const [events, setEvents] = useState([]);
const [persons, setPersons] = useState([]);
const [locations, setLocations] = useState([]);
const [eventFilter, setEventFilter] = useState([]);
const [eventDetails, setEventDetails] = useState([]);


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

const fetchEvents = () => {

    const eventURL = `http://localhost:8080/events`;
    fetch(eventURL)
    .then((res)=>res.json())
    .then((data)=> {
        setEvents(data)
    })
}

// const getEventDetails = (idToView)=>{

//     return fetch(`http://localhost:8080/events/${idToView}?key=${userKey}`)
//     .then(res => res.json())
//     }
//     // .then((data) => {
//     //     setEventDetails(data)

// const viewEventDetails = (idToView) => {
//     getEventDetails(idToView)
//     .then((data) => {
//         setEventDetails(data)
//     });  

// }

const handleUserFilter = (userInput) => {
    const timelineDetails = events.filter((eventObject) =>{
        return eventObject.name.toUpperCase().includes(userInput.toUpperCase())
    }) 
    setEventFilter(timelineDetails)
}

useEffect(()=>{
    fetchEvents();
    fetchPersons();
    fetchLocations();
    // setEventFilter(timelineDetails);
}, [])

// filter each event object in array that meets user input search query terms. contains conditional statement (if events.query.params.value == events.name[0] { return object(s) matching these values})



    return (
        <>
            <div id="mainComponentCont">
            <FilterComponent userChange={handleUserFilter}/>
            {/* <EventList /> */}
            <MapComponent mapEvents={eventFilter} events={events} locations={locations} persons={persons} eventDetails={eventDetails}/>

            </div>
        </>

    )

}

export default TimelineContainer;