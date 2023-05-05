import React from "react";
import '../pages.css';
import TypeBadges from "../../Components/TypeBadges.js";
import MovesList from '../../Components/MoveList.js';

const PokemonResult = (props) => {

const {result, pokemonResults} = props;

const pokeName = result.name.charAt(0).toUpperCase() + result.name.slice(1);


return (
<div id="p-r-container" className="result-container">


<div className="top-left">
  <div className="name-container">
      <h2>{!result ? null: pokeName}</h2>
      <hr color="#337AB7" size="3" width="100%"/>
  </div>  
  <div className="sprite-container">
    <p>Default Game Sprites:</p>
      <img className="sprite-img" src={result.sprites.front_default} alt='in-game front view'/>
      <img className="sprite-img" src={result.sprites.back_default} alt='in-game back view'/>
    <p>Shiny Game Sprites</p>
  <img className="sprite-img" src={result.sprites.front_shiny} alt="in-game shiny sprite front view"/>
  <img className="sprite-img" src={result.sprites.back_shiny} alt="in-game shiny sprite back view"/>
  </div>
  <div className="type-container">
      <h4>Typing:</h4>
      <TypeBadges result={result} />
  </div>
  <div className="height-weight-container">
    <h6>Height:</h6>
    <p>{result.height}</p>
    <h6>Weight:</h6>
    <p>{result.weight}</p>
  </div>
  <div className="base-stat-container">
    {result.stats.map((statistic, idx ) => ( 
    <div className="statList" key={idx}>
      <p className="stat-p">{statistic.stat.name} - Base: {statistic.base_stat}</p>
    </div>))}
  </div>
    
</div>
  







{/* 
<MovesList result={result} /> */}




</div>
)

}

export default PokemonResult;