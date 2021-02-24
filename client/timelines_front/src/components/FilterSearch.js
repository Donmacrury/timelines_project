import { Segment, Input} from 'semantic-ui-react';
const FilterSearch = ({onUserInput}) => {

    // function to callwhenever we want this state of our events to change depending on user input matching object individual elements details

 const handleFilterInput = (e) => {
     const userInput = e.target.value
        onUserInput(userInput);
    }


    return (
        <>
            <Segment >
                <Input type="text" 
                placeholder="Search event" 
                onChange={handleFilterInput}/>
                {/* <h6>{filteredEvents}</h6> */}
            </Segment>
        </> 

    
    )
} 
export default FilterSearch;