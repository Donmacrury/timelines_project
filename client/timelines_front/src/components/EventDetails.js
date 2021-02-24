
const EventDetails = ({eventDetails, events}) => {

    const handleEventPersons = eventDetails.persons.map((currentPerson, index) => {
        return ( <li>{currentPerson.name}</li> 
        )
    })

    return (
        <div>
            <h3>{eventDetails.name}</h3>
            <p>{eventDetails.description}</p>
                <h3>Participants</h3>
                    <ul>
                
                    {handleEventPersons}
                    
                    </ul>
         </div>
    )


}

export default EventDetails;