const EventDetails = ({eventDetails}) => {



    return (
        <div>
        <h2>{eventDetails.name}</h2>
        <p>{eventDetails.description}</p>
        <h3>Partcipants</h3>
        <ul>
        <li>{eventDetails.persons[0].name}</li>
        <li>{eventDetails.persons[1].name}</li>
        <li>{eventDetails.persons[2].name}</li>
        <li>{eventDetails.persons[3].name}</li>
        {/* <li>{eventDetails.persons[4].name}</li> */}
        </ul>
        </div>
    )


}

export default EventDetails;