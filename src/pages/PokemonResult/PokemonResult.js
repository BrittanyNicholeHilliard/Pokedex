import React, {useEffect} from "react";
import '../pages.css';
import TypeBadges from "../../Components/TypeBadges.js";


const PokemonResult = (props) => {


const {result} = props;

const pokeName = result.name.charAt(0).toUpperCase() + result.name.slice(1);


return (
<div className="result-container">

  <div className="name-sprite-type">
  <div className="name-container">
    <h2>{!result ? null: pokeName}</h2>
    <hr color="#337AB7" size="3" width="100%"/>
  </div>  
  <div className="type-container">
    <h4>Type:</h4>
    <TypeBadges result={result} />
  </div>
  </div>

  <div className="height-weight-container">
  <h6>Height:</h6>
  <p>{result.height}</p>
  <h6>Weight:</h6>
  <p>{result.weight}</p>
  </div>


  <div className="sprite-container">
    <p>Default Game Sprites:</p>
      <img className="sprite-img" src={result.sprites.front_default} alt='in-game front view'/>
      <img className="sprite-img" src={result.sprites.back_default} alt='in-game back view'/>
   <p>Shiny Game Sprites</p>
   <img className="sprite-img" src={result.sprites.front_shiny} alt="in-game shiny sprite front view"/>
   <img className="sprite-img" src={result.sprites.back_shiny} alt="in-game shiny sprite back view"/>
  </div>

<div className="move-list-container">
  {result.moves.map((move, idx) => (
    <div className="move-list" key={idx}>
      <details><summary><h4>{move.move.name}</h4></summary>
      {move.version_group_details.map((version, idx) =>(
        <>
        <h5 key={idx}>{version.version_group.name}</h5>
        <p key={idx.idx}>{version.move_learn_method.name}</p>
        
        </>
      ))}</details>
    </div>
  ))}

</div>
    


  <div className="base-stat-container">
    {result.stats.map((statistic, idx ) => ( 
    <div className="statList" key={idx}>
      <p>{statistic.stat.name} - Base: {statistic.base_stat}</p>
    </div>))}
  </div>


</div>
)

}

export default PokemonResult;