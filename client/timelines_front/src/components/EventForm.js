import {useState, useEffect} from "react";

const EventForm = ({events, eventDetails }) =>{

const [newEvent, setNewEvent] = useState([]);


    const handleEventSubmit = (e) => {
        e.preventDefault();
       const addedEvent = eventDetails(newEvent);
       events.push(addedEvent)
        
       console.log(events);
    }


    const handleChange = (e) => {
        setNewEvent(e.target.value)
      }
    
    return (
        <form onSubmit={handleEventSubmit}>
        <label>
          Name:
          <input type="text" value={newEvent} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
};

export default EventForm;