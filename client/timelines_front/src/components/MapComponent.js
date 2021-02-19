import Event from "./Event";
import Location from "./Location";
import "../containers/TimeLineContainer.css";
import Person from "./Person";

const MapComponent = ({events, locations, persons}) => {

    if (!events || !locations || !persons){
        return <span>SOMETHING AINT RIGHT</span>;
    }

        const eventNodes = events.map((currentEvent, index)=>{
            return(
                <li key={index}> 
            <Event event={currentEvent}/></li>
            )
        });


        const locationNodes = locations.map((currentLocation, index)=>{
            return(
                <li key={index}> 
            <Location location={currentLocation}/></li>
            )
        });

        const personNodes =  persons.map((currentPerson, index) => {
            return (
                <li key={index}>
            <Person person={currentPerson}/> </li>
            )
        });
    
        return (
            <>
                <div className="eventGrid">
                    {eventNodes}
                </div>
                <div className="locationGrid">
                    {locationNodes}
                </div>
                <div className="personsGrid">
                    {personNodes}
                </div>
            </>
        )

 }

export default MapComponent;
