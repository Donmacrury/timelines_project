import React, { useEffect, useState} from "react";
import FilterComponent from "./FilterComponent";
import EventList from "./Event/EventList";

const FilterContainer = () => {

    const [events, setEvents] = useState([]);
    // const [parentEventFilter, setParentEventFilter] = useState([]);


    const fetchEvents = () => {

        const eventURL = `http://localhost:8080/events`;
        fetch(eventURL)
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data)
            setEvents(data)
        })
    }

    // const handleUserFilter = (e) => {
    //     setParentEventFilter(e);
    // }


    useEffect(()=>{
       
        fetchEvents();
    }, []);
    
return (
    <div>

        <FilterComponent events={events} /> 
        
        
    </div>
)

}
export default FilterContainer;