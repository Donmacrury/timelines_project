import Person from "./Person";
import Event from "./Events";

const MapComponent = ({events}) => {

    console.log({events})

        const eventNodes = events.map((currentEvent, index)=>{
            return(
                <li key={index}> 
            <Event event={currentEvent}/></li>
            )
        });
    
        return (
            <section>
                {eventNodes}
            </section>
        )

 }

export default MapComponent;
