import {getEventDetails} from '../containers/TimelineContainer';


const Event = ({event, viewEventDetails}) => {


    const getEventID = () => {
        viewEventDetails(event.id)  
    }
   

    return (
        <>
        <p>{event.location.name} ({event.date})</p>
        <p>{event.location.latitude}, {event.location.longitude}</p>
        <button onClick={getEventID}>More Details</button>
        </>
    
    )



}
export default Event;