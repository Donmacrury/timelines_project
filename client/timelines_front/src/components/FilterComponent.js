
const FilterComponent = ({events, changeEvent}) => {

    const handleUserInput = (e) => {
        const userInput = e.target.value;
        changeEvent(userInput);
    }

    return (

        <div>
            <span> search event bar </span> 
            <input type="text" 
            placeholder="Search something..." 
            onChange={handleUserInput}></input>
        </div>

    
    )
} 
export default FilterComponent;