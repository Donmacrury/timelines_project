
import { List, Button } from 'semantic-ui-react'
const Event = ({filteredEvent, deleteEntry}) => {

    const deleteButton = () => {
        deleteEntry(filteredEvent.id)
    }

    return (
        <div>
        <List.Icon name='chess knight' />
        <List.Content>
            <List.Header as='h3'>{filteredEvent.name}</List.Header>
            <List.Content floated="right">{filteredEvent.date}</List.Content>
            <List.Description>
            {filteredEvent.description}
            </List.Description>
            <Button secondary onClick={deleteButton}>Delete Event</Button>
        </List.Content>

        
        </div>
        
    
    )



}
export default Event;