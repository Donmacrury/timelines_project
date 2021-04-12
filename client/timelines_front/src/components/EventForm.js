import {useState, useEffect} from "react";
import LocationForm from "./LocationForm";
import { Form, Input, Select, Dropdown, Menu } from 'semantic-ui-react';

const EventForm = ({events, setEvents, eventDetails, locations}) =>{

const [name, setName] = useState("");
const [date, setDate] = useState("");
const [location, setLocation] = useState("");
const [description, setDescription] = useState("");

    const handleEventSubmit = (e) => {
        e.preventDefault();
       
    const eventObject = {
      name: name,
      date: date,
      description: description,
      location: {id: location}
    }
      eventDetails(eventObject)
       
       console.log(eventObject);
  }


    const handleNameChange = (e) => {
        setName(e.target.value)
      
      }

    const handleDateChange = (e) => {
      setDate(e.target.value)
    }
    
    const handleLocationSelect = (e, {value}) => {
      setLocation(value)
    }

    const handleDescriptionChange = (e) => {
      setDescription(e.target.value)
    }

    // const locationNodes = locations.map((location) => {
    //   if (location) {
    //     return(
    //       <option
    //         value={location.id}>
    //         {location.name}
    //       </option>
    //      )
    //   }
    // });

    
    // semantic UI select/dropdown feature

    const DropdownSelection = () => (
      <Select
        placeholder='Select Location'
        fluid
        selection       
        onChange={handleLocationSelect}  
        options={locations.map((location) => {
            return{
              name: location.id,
              key: location.name,
              text: location.name,
              value: location.id,
            }                  
        })}/>
    )

    return (
      <form onSubmit={handleEventSubmit}>

        <label>
          Name:
          <Input size='small' name="name" type="text" value={name} onChange={handleNameChange}/>
        </label>

        <label><br/>
          Date:<br/>
          <Input size='small' name="date" type="text" value={date} onChange={handleDateChange} />
        </label>

        <label>
          Description:
          <Input size='small' name="description" type="text"  value={description} onChange={handleDescriptionChange}/>
        </label>

        <label>
          Location:
          {DropdownSelection()}
        </label>

        <Input type="submit" value="Submit" />
      </form>
    )
};

export default EventForm;