const FilterComponent = ({userChange}) => {

    const handleUserInput = (event) => {
        const userInput = event.target.value;
        userChange(userInput);
    }
    
return (
    <div>
        <span>
            search events
        </span>
        <input type="text" placeholder="search..." onChange={handleUserInput}> </input>
    </div>
)

}
export default FilterComponent;