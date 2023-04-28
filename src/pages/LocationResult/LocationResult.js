import React from "react";


const LocationResult = (props) => {
const {result} = props;



return (
<div className="result-container">
  <div className="name-container">
    <h2>{!result ? null: result.name}</h2>
  </div>  
</div>
)

}

export default LocationResult;