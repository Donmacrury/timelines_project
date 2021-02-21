import React, { useEffect, useState} from "react";
import EventList from "./Event/EventList";
import FilterSearch from "./FilterSearch";

const EventContainer = () => {

    const [events, setEvents] = useState([]);
    const [eventFilter, setEventFilter] = useState([])


    const fetchEvents = () => {

        const eventURL = `http://localhost:8080/events`;
        fetch(eventURL)
        .then((res)=>res.json())
        .then((data)=> {
            // console.log(data)
            setEvents(data)
            setEventFilter(data)
        })
    }

    const handleUserFilter = (userInput) => {
        const timelineDetails = events.filter((event)=>{
            return event.name.toUpperCase().includes(userInput.toUpperCase())
        })
        setEventFilter(timelineDetails); 
        }


    useEffect(()=>{
        fetchEvents();
        setEvents();
        // setEventFilter(timelineDetails);
    }, []);
    
return (
    <>
        <FilterSearch onUserInput={handleUserFilter}/>
        <EventList filteredEvents = {eventFilter}/> 
        
    </>
)

}
export default EventContainer;