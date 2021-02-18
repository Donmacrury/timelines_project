

const Events = ({event}) => {

    return (
        <>
        <p>{event.location.name}</p>
        <p>{event.description}</p>
        <p>{event.date}</p>
        </>
    
    )



}
export default Events;