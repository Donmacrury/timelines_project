import Event from "./Event";

const Eventlist = ({newEvents, index}) => {

    if (!newEvents){
        return <span>SOMETHING AINT RIGHT</span>;
    } else {

        return(
            
            <li key={index}> 
            <Event event={newEvents}/>
            </li>
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