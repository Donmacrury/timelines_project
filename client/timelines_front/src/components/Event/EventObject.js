

const Event = ({filteredEvent}) => {


    return (
        <div>
            <p>{filteredEvent.name}</p>
            <p>{filteredEvent.description}</p>
            <p>{filteredEvent.date}</p>
        </div>
        
    
    )



}
export default Event;