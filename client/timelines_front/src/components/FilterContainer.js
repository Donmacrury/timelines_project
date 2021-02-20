import React, { useEffect, useState} from "react";
import FilterComponent from "./FilterComponent";
import EventList from "./Event/EventList";

const FilterContainer = () => {

    const [events, setEvents] = useState([]);
    const [eventFilter, setEventFilter] = useState([]);

    const fetchEvents = () => {

        const eventURL = `http://localhost:8080/events`;
        fetch(eventURL)
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data)
            setEvents(data)
        })
    }

    const handleUserFilter = (userInput) => {
        const timelineDetails = events.filter((eventObject) =>{
            return eventObject.name.toUpperCase().includes(userInput.toUpperCase())
    }) 
    setEventFilter(timelineDetails)
    }

    useEffect(()=>{
        handleUserFilter();
        fetchEvents();
    }, []);
    
return (
    <div>

        <FilterComponent events={events} changeEvent={handleUserFilter}/> 
        <EventList userChange={eventFilter} filteredEvents={events}/>
    </div>
)

}
export default FilterContainer;