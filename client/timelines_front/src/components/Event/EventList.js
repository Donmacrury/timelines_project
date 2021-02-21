import Event from "./Event";

const Eventlist = ({filteredEvents}) => {

    if (!filteredEvents){
        return <span>SOMETHING AINT RIGHT</span>;
    } else {

        const eventNodes = filteredEvents.map((object, index) => {
            return (
                <li> <Event filteredEvent={object} key={index}/>
                </li>
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

    // const locationNodes = locations.map((currentLocation, index)=>{
    //     return(
    //         <li key={index}> 
    //     <Location location={currentLocation}/></li>
    //     )
    // });

    // const personNodes =  persons.map((currentPerson, index) => {
    //     return (
    //         <li key={index}>
    //     <Person person={currentPerson}/> </li>
    //     )
    // });

    // return(
    //     <section>
    //         {eventNodes}
    //     </section>
    // )

}
export default Eventlist;