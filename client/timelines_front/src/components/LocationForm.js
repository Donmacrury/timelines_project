import {useState, useEffect} from "react";
import { Input, Select } from 'semantic-ui-react';

const LocationForm = ({locations, locationDetails}) => {

const [name, setName] = useState("");
const [latitude, setLatitude] = useState(0.00);
const [longitude, setLongitude] = useState(0.00);
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
          <Input size='small' name="name" type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Latitude:
          <Input size='small' name="latitude" type="text"  value={latitude} onChange={handleLatitudeChange} />
        </label><br/>
        <label>
            Logitude:
            <Input size='small' name="longitude" type="text" value={longitude} onChange={handleLongitudeChange}/>
        </label>
        <label>
            Description:
            <Input size='small' name="description" type="text" value={description} onChange={handleDescriptionChange}/>
        </label>
        <Input size='small' type="submit" value="Submit" />
      </form>
    )

};

export default LocationForm;