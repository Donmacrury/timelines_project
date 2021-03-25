import React, { useEffect, useState} from "react";
import EventList from "../components/Event/EventList";
import FilterSearch from "../components/FilterSearch";

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

    const deleteEventEntry = (userId) => {
        return fetch(`http://localhost:8080/events/${userId}`, {
            method: "DELETE"
        })
    setEvents(events.filter(event => event.id !== userId));
    }


    useEffect(()=>{
        fetchEvents();
        setEvents();
    }, []);
    
return (
    <>
        
        <FilterSearch onUserInput={handleUserFilter}/>
        <br/>
        <br/>
        <EventList filteredEvents = {eventFilter} deleteEntry={deleteEventEntry}/> 
    
    </>
)

}
export default EventContainer;