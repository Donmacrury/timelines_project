
const FilterSearch = ({onUserInput}) => {

    // function to callwhenever we want this state of our events to change depending on user input matching object individual elements details

 const handleFilterInput = (e) => {
     const userInput = e.target.value
        onUserInput(userInput);
    }

    // useEffect(()=>{
    //     setEvent();
    // }, [events]);

    return (
        <>
        
                <label> Search for event</label> 
                <input type="text" 
                placeholder="e.g. Battle of Culloden" 
                onChange={handleFilterInput}/>
                {/* // onChange={() => handleUserInput()}/> */}
                {/* <h6>{filteredEvents}</h6> */}

        </> 

    
    )
} 
export default FilterSearch;