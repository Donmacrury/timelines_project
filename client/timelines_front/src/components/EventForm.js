import {useState, useEffect} from "react";
import Dropdown from "./Dropdown"

const EventForm = ({events, eventDetails }) =>{

const [name, setName] = useState("");
const [date, setDate] = useState("");
const [location, setLocation] = useState({id: 3});


    const handleEventSubmit = (e) => {
        e.preventDefault();
       
    const eventObject = {
      name: name,
      date: date,
      location: location
    }

      eventDetails(eventObject)
         
       console.log(events);
  }


    const handleNameChange = (e) => {
        setName(e.target.value)
      
      }

    const handleDateChange = (e) => {
      setDate(e.target.value)
    }
    
    const handleLocationSelect = (e) => {
      setLocation(e.target.value)
    }

    return (
        <form onSubmit={handleEventSubmit}>
        <label>
          Name:
          <input name="newEvent" type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Date:
          <input name="newEvent" type="text"  value={date} onChange={handleDateChange} />
        </label>
        <pre>
        {/* <Dropdown options={location} onChange={handleLocationSelect} value={defaultOption} placeholder="Select an option" /> */}
              
            </pre>
        <input type="submit" value="Submit" />
      </form>
    )
};

export default EventForm;