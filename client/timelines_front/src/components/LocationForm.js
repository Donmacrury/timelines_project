import {useState, useEffect} from "react";

const LocationForm = ({locations, locationDetails}) => {

const [name, setName] = useState("");
const [latitude, setLatitude] = useState("");
const [longitude, setLongitude] = useState("");
const [description, setDescription] = useState("")

const handleLocationSubmit = (e)=> {
    e.preventDefault();

    const locationObject = {
        name: name,
        latitude: latitude,
        longitude: longitude,
        description: description
    }

    locationDetails(locationObject)

}

const handleNameChange = (e) => {
    setName(e.target.value)
}

const handleLatitudeChange = (e) => {
    setLatitude(e.target.value)
}

const handleLongitudeChange = (e) => {
    setLongitude(e.target.value)
}

const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
}


    return (
        <form onSubmit={handleLocationSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Latitude:
          <input name="latitude" type="text"  value={latitude} onChange={handleLatitudeChange} />
        </label>
        <label>
            Logitude:
            <input name="longitude" type="text" value={longitude} onChange={handleLongitudeChange}/>
        </label>
        <label>
            Description:
            <input name="description" type="text" value={description} onChange={handleDescriptionChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )

};

export default LocationForm;