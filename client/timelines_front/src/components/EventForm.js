import {useState} from "react";

const EventForm = ({events, eventDetails }) =>{

const [newEvent, setNewEvent] = useState([]);

    const handleEventSubmit = (e) => {
        e.preventDefault();
       eventDetails(newEvent);
        
    //    console.log(events);
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