import {getEventDetails} from '../containers/TimelineContainer';

const Event = ({event, getEventDetails}) => {

    const getEventID = () => {
        getEventDetails(event.id)  
    }


    return (
        <>
        <p>{event.location.name}</p>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <button onClick={getEventID}k>More Details</button>
        </>
    
    )



}
export default Event;