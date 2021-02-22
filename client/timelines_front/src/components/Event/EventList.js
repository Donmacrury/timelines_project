import Event from "./EventObject";

const Eventlist = ({filteredEvents}) => {

    if (!filteredEvents){
        return <span>SOMETHING AINT RIGHT</span>;
    } else {

        const eventNodes = filteredEvents.map((object, index) => {
            return (
                <>
                <h3>Below should be the individual event object!</h3>

                    <li> <Event filteredEvent={object} key={index}/>
                    </li>

                </>
                
            );
        })

        return(
            <>
            <ul>
            {eventNodes}
            </ul>
            </>
        )
    }

}
export default Eventlist;