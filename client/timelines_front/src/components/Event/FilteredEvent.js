

const Event = ({filteredEvent, deleteEntry}) => {

    const deleteButton = () => {
        deleteEntry(filteredEvent.id)
    }

    return (
        <div>
            <p>{filteredEvent.name}</p>
            <p>{filteredEvent.description}</p>
            <p>{filteredEvent.date}</p><button onClick={deleteButton}>Delete Event</button>
        </div>
        
    
    )



}
export default Event;