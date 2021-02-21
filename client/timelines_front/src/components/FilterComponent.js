
import { useEffect, useState} from "react";
import EventList from "./Event/EventList";

const FilterComponent = ({events}) => {

    const [filteredEvents, setFilteredEvents] = useState([])

    const handleUserInput = (userInput) => {
        const timelineDetails = events.filter((eventObject)=>{
            if (eventObject.includes(userInput.toUpperCase())){
                return eventObject;
            }})
        setFilteredEvents(timelineDetails); 
        }
        
    
        // const timelineDetails = events.filter((eventObject) =>{
        //     if (userInput == eventObject[0]) {
        //         return 
        //     }}

    // function to callwhenever we want this state of our events to change depending on user input matching object individual elements details

    // const handleFilter = (userInput) => {
    //     const timelineDetails = events.filter((eventObject) =>{
    //         return eventObject.toUpperCase().includes(userInput.toUpperCase())
    // }) 
    // setFilteredEvent(timelineDetails);
    // }

    // setFilteredEvent(userInput);


    // const eventNodes = (handleUserInput) => {
    //     return (
    //         <EventList changeEvent= {filteredEvent}/>
    //     )
    // }

    // useEffect(()=>{
    //     setFilteredEvents();
    // }, []);

    return (
        <>
        
                <label> Search for event</label> 
                <input type="text" 
                placeholder="e.g. Battle of Culloden" 
                onChange={() => handleUserInput()}/>
                {/* <h6>{filteredEvents}</h6> */}

                <EventList newEvents={filteredEvents}/>

                
            
        </> 

    
    )
} 
export default FilterComponent;