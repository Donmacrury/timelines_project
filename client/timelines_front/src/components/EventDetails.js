const EventDetails = ({eventDetails, events}) => {

    const handleEventPersons = eventDetails.persons.map((currentPerson, index) => {
        return ( <li>{currentPerson.name}</li> 
        )
    })

    return (
        <div>
            <h2>{eventDetails.name}</h2>
            <p>{eventDetails.description}</p>
            <h3>Partcipants</h3>
            <ul>
            {handleEventPersons}
            </ul>
        </div>
    )


}

export default EventDetails;