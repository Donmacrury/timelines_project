import Person from "./Person";

const MapComponent = ({persons}) => {

    console.log({persons})

        const personNodes = persons.map((currentPerson, index)=>{
            return(
                <li key={index}> 
            <Person person={currentPerson}/></li>
            )
        });
    
        return (
            <section >
                {personNodes}
            </section>
        )

 }

export default MapComponent;
