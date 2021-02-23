import Event from "./FilteredEvent";

const Eventlist = ({filteredEvents, deleteEntry}) => {

    if (!filteredEvents){
        return <span>SOMETHING AINT RIGHT</span>;
    } else {

        const eventNodes = filteredEvents.map((object, index) => {
            return (
                <>
                

                    <li> <Event filteredEvent={object} key={index} deleteEntry={deleteEntry}/>
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