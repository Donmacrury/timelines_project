// import { Button } from 'semantic-ui-react';

const Event = ({event, viewEventDetails}) => {


    const getEventID = () => {
        viewEventDetails(event.id)  
    }
   

    return (

        <>
        <p>Location: {event.location.name}</p> 
        <p>Date: {event.date}</p>
        <p>Latitude ({event.location.latitude})</p>
        <p> Longitude ({event.location.longitude})</p>
        <Button color='instagram' onClick={getEventID}>More Details</Button>
    
        </>
    
    )



}
export default Event;