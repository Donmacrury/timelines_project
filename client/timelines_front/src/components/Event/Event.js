

const Event = ({newEvents}) => {

    return (
        <>
        <p>{newEvents.name}</p>
        <p>{newEvents.description}</p>
        <p>{newEvents.date}</p>
        <button onClick>Click Here</button>
        </>
    
    )



}
export default Event;