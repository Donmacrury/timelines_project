import {useEffect, useState} from 'react';
import { Input, Select, Dropdown } from 'semantic-ui-react';

const PersonForm  = ({persons, events, personDetails}) => {

const [name, setName] = useState("");
const [nationality, setNationality] = useState("");
const [birthDate, setBirthDate] = useState("");
const [deathDate, setDeathDate] = useState("");
const [personEvents, setPersonEvents] = useState([]);


    const handlePersonSubmit = (e) => {
        // e.preventDefault();
       
    const personObject = {
      name: name,
      nationality: nationality,
      birthDate: birthDate,
      deathDate: deathDate,
      events: [{id: personEvents}]
    }

      personDetails(personObject)
         
       console.log(personObject);
  }


    const handleNameChange = (e) => {
        setName(e.target.value)
      }

    const handleNationalityChange = (e) => {
      setNationality(e.target.value)
    }
    
    const handleBirthDateChange = (e) => {
      setBirthDate(e.target.value)
    }

    const handleDeathDateChange = (e) => {
        setDeathDate(e.target.value)
      }

    // const eventNodes = events.map((event) => {
    //   if (event) {
    //     return (
    //         <option value={event.id}>
    //          {event.name}
    //         </option>
    //     )
    //   }
    // })

    const handleEventsChange = (e, {value}) => {
        setPersonEvents(value)
        
      }

      // semantic UI select/dropdown feature
      const DropdownSelection = () => (
          <Select
            placeholder='Select Event'
            fluid
            selection
            onChange={handleEventsChange}  
            options={events.map((event) => {
              if (event) {
                return{
                  name: event.id,
                  key: event.name,
                  text: event.name,
                  value: event.id,
                }
              }
             
            })}/>
        )

    return (
        <form onSubmit={handlePersonSubmit}>

        <label>
          Name:
          <Input size='small' name="newPerson" type="text" value={name} onChange={handleNameChange} />
        </label>

        <label>
          Nationality:
          <Input size='small' name="newPerson" type="text"  value={nationality} onChange={handleNationalityChange} />
        </label>

        <label><br/>
          BirthDate:
          <Input size='small' name="newPerson" type="text"  value={birthDate} onChange={handleBirthDateChange} />
        </label>

        <label>
          DeathDate:
          <Input size='small' name="newPerson" type="text"  value={deathDate} onChange={handleDeathDateChange} />
        </label>

        <label>
            Events:
            {DropdownSelection()}
        
        </label>

        <Input type="submit" value="Submit" />
      </form>
    )

}
export default PersonForm;