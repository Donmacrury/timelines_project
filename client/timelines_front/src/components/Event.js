import {getEventDetails} from '../containers/TimelineContainer';


const Event = ({event, viewEventDetails}) => {


    const getEventID = () => {
        viewEventDetails(event.id)  
    }
   

    return (
        <>
        <p>{event.location.name}</p>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <button onClick={getEventID}>More Details</button>
        </>
    
    )



}
export default Event;