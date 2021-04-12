import { Segment } from 'semantic-ui-react';
import React from 'react';

const PokedexHeader = ({name}) => {
  
    return (
        <Segment basic inverted padded='very'>
          <h1 className="ui massive center aligned header">Historical Timelines </h1>
          <h3 className="ui center aligned header"> {name} </h3>
        </Segment>
        
    )
} 

export default PokedexHeader;