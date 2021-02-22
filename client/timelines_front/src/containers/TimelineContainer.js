import MapComponent from "../components/MapComponent";
import {useEffect, useState} from "react";
import "./TimeLineContainer.css";
import EventContainer from "../components/EventContainer";
import EventForm from "../components/EventForm";
import LocationForm from "../components/LocationForm";
import { Container, Header, Grid, Segment} from 'semantic-ui-react'


const TimelineContainer = () => {

const [events, setEvents] = useState([]);
const [persons, setPersons] = useState([]);
const [locations, setLocations] = useState([]);
const [eventDetails, setEventDetails] = useState(null);

const fetchEvents = () => {
    const eventURL = `http://localhost:8080/events`;
    fetch(eventURL)
    .then((res) => res.json())
    .then((data) => {
      setEvents(data)  
    })
}


const fetchPersons = () => {
    const personURL = `http://localhost:8080/persons`;
    fetch(personURL)
    .then((res)=>res.json())
    .then((data)=> {
        
        setPersons(data)
    })
}

const fetchLocations = () => {

    const locationURL = `http://localhost:8080/locations`;
    fetch(locationURL)
    .then((res)=>res.json())
    .then((data)=> {
        setLocations(data)
    })
}

 const getEventDetails = (idToView)=>{

     return fetch(`http://localhost:8080/events/${idToView}`)
    .then(res => res.json())
}

 const viewEventDetails = idToView => {
    
    getEventDetails(idToView)
    .then((data) => {
        console.log(data)
        setEventDetails(data)
    })
    
}

 const addEventDetails = (data)=>{ 
     
     return fetch(`http://localhost:8080/events/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data)=>{
        setEvents([...events, data])
    })
    .catch((error) => console.log(error))

};

const addLocationDetails = (data)=>{ 
     
    return fetch(`http://localhost:8080/locations/`, {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
           'Content-Type': 'application/json'
       }
   })
   .then(res => res.json())
   .then((data)=>{
       setLocations([...locations, data])
    console.log({data});   })
   .catch((error) => console.log(error))

};

useEffect(()=>{
    fetchEvents();
    fetchPersons();
    fetchLocations();
}, [])

return (
    <>
        <div id="mainComponentCont">
            <Container style={{ padding: '5em 0em' }}>
                <Grid columns={1}>
                    <Grid.Column>

                        {/* <EventForm events={events} eventDetails={addEventDetails} setEvents={setEvents}/> */}
                        {/* <Dropdown locations={locations} locationDetails={addLocationDetails}/> */}

                        <Segment.Group>

                        <Segment>
                        <Header as='h2'>Historical Timeline</Header>
                        </Segment>

                            <Segment.Group>

                                <Segment>
                                    <EventForm locations={locations} events={events} eventDetails={addEventDetails} setEvents={setEvents}/>
                                </Segment>
                                <Segment>
                                    <LocationForm locations={locations} locationDetails={addLocationDetails} setLocations={setLocations}/>
                                </Segment>
                                
                            </Segment.Group>
                            <Segment>
                                <MapComponent viewEventDetails={viewEventDetails} events={events} locations={locations} persons={persons} eventDetails={eventDetails} newEvent={addEventDetails}/>
                            </Segment>
                            
                        </Segment.Group>

                    </Grid.Column>
                </Grid>
            </Container>

        </div>
    </>

    )

}

export default TimelineContainer;