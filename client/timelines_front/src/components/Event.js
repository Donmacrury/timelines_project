import { Button } from 'semantic-ui-react';
import {addEventDetails} from '../containers/TimelineContainer';


const Event = ({event, viewEventDetails}) => {


    const getEventID = () => {
        viewEventDetails(event.id)  
    }
   

    return (
        <>
        <p>{event.location.name} ({event.date})</p>
        <p>{event.location.latitude}, {event.location.longitude}</p>
        <Button color='instagram' onClick={getEventID}>More Details</Button>
    
        </>
    
    )



}
export default Event;