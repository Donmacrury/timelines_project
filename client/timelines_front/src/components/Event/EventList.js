import Event from "./Event";

const Eventlist = ({filteredEvents}) => {

    if (!filteredEvents){
        return <span>SOMETHING AINT RIGHT</span>;
    }

    const eventNodes = filteredEvents.map((currentEvent, index)=>{
        return(
            
        <li key={index}> 
        <Event event={currentEvent}/>
        </li>
        )
    });

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

    return(
        <section>
{eventNodes}
        </section>
    )

}
export default Eventlist;