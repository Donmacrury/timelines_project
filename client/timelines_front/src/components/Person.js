const Person = ({person}) => {


    return (
        <div>
            <p>{person.name}</p>
            <p>{person.nationality}</p>
            <p>{person.birthDate}</p>
            <p>{person.deathDate}</p>   
        </div>

    )
}

export default Person;