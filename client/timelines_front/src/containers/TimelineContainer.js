import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "../components/NavigationBar";
import TimelinePage from "../components/TimelinePage";
import MapComponent from "../components/MapComponent";
import {useEffect, useState} from "react";
import "./TimeLineContainer.css";
import EventContainer from "../components/EventContainer";
import EventForm from "../components/EventForm";
import LocationForm from "../components/LocationForm";
import PersonForm from "../components/PersonForm";
import { Container, Header, Grid, Segment, Input} from 'semantic-ui-react';
import FilterSearch from '../components/FilterSearch';
import EventList from "../components/Event/EventList";


const TimelineContainer = () => {

const [events, setEvents] = useState([]);
const [persons, setPersons] = useState([]);
const [locations, setLocations] = useState([]);
const [eventDetails, setEventDetails] = useState(null);
const [eventFilter, setEventFilter] = useState([])


const fetchEvents = () => {
    const eventURL = `http://localhost:8080/events`;
    fetch(eventURL)
    .then((res) => res.json())
    .then((data) => {
      setEvents(data)  
      setEventFilter(data)
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

const addPersonDetails = (data)=>{ 
     
    return fetch(`http://localhost:8080/persons/`, {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
           'Content-Type': 'application/json'
       }
   })
   .then(res => res.json())
   .then((data)=>{
       setPersons([...persons, data])
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

const deleteEventEntry = (Id) => {
    return fetch(`http://localhost:8080/events/${Id}`, {
        method: "DELETE"
    })
}

const handleDelete = Id => {
    deleteEventEntry(Id);

    // delete from event list
    setEventFilter(eventFilter.filter(e => e.id !== Id));
    // delete from map 
    setEvents(events.filter(event => event.id !== Id));
    
}

const handleUserFilter = (userInput) => {
    const timelineDetails = events.filter((event)=>{
        return event.name.toUpperCase().includes(userInput.toUpperCase())
    })
    setEventFilter(timelineDetails); 
    }


useEffect(()=>{
    fetchEvents();
    fetchPersons();
    fetchLocations();
}, [])

return (
    <>
    <Router>
      <NavBar/>
        <Switch>
          <Route path="/timeline" exact render={()=> <TimelinePage events={events}/>}/>
        </Switch>
    </Router>

        <div id="mainComponentCont">
            <Container style={{ padding: '3rem 0rem' }}>
                <Container text>
                <Segment.Group>
                    <Segment raised>
                        <Header as='h2'>Enter some historical details</Header>
                    </Segment>
                    <Segment raised>
                        <Grid divided>
                            
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                        <Header as='h3'>New Location</Header>
                                        <LocationForm locations={locations} locationDetails={addLocationDetails} setLocations={setLocations}/>                             
                            </Grid.Column>
                            <Grid.Column>                   
                                        <Header as='h3'>New Event</Header>
                                        <EventForm locations={locations} events={events} eventDetails={addEventDetails} setEvents={setEvents}/>
                            </Grid.Column>
                            <Grid.Column>
                                        <Header as='h3'>New Participant</Header>
                                        <PersonForm persons={persons} events={events} personDetails={addPersonDetails} />                     
                            </Grid.Column>
                        </Grid.Row>                      
                        </Grid>
                    </Segment>
                </Segment.Group>
                </Container>   
                </Container>  
                <Container>
                                    <Segment>
                                        <MapComponent viewEventDetails={viewEventDetails} events={events} locations={locations} persons={persons} eventDetails={eventDetails} newEvent={addEventDetails}/>
                                    </Segment>
                </Container>
                <Container >
                                    <Header as='h2' content='Events' textAlign='left'/>
                                    <FilterSearch onUserInput={handleUserFilter}/>
                        <Grid container columns={1} >
                            <Grid.Column>
                        
                                    <EventList filteredEvents={eventFilter} deleteEntry={handleDelete} /> 
                            </Grid.Column>
                        </Grid> 
                </Container>
                    

        </div>
    </>

    )

}

export default TimelineContainer;