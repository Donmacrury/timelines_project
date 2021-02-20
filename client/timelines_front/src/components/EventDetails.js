const EventDetails = ({eventDetails}) => {



    return (
        <div>
        <h2>{eventDetails.name}</h2>
        <p>{eventDetails.description}</p>
        </div>
    )


}

export default EventDetails;