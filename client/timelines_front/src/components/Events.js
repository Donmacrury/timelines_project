

const Events = ({event}) => {

    return (
        <>
        <p>{event.location.name}</p>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <button onClick>Click Here</button>
        </>
    
    )



}
export default Events;