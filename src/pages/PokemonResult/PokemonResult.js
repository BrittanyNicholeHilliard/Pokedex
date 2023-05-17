import React, {useEffect} from "react";
import '../pages.css';
import TypeBadges from "../../Components/TypeBadges.js";
import MovesList from '../../Components/MoveList.js';
import ball from '../../assets/pb2.png'
const PokemonResult = (props) => {

const {result, pokemonResults} = props;

const pokeName = result.name.charAt(0).toUpperCase() + result.name.slice(1);

useEffect (() => {
console.log(`pokemonResults: ${pokemonResults.flavor_text_entries[0]}`)
}, [])


return (

<div id="p-r-container" className="result-container">
<div id="top-middle"><h2>{pokeName}</h2></div>
<div id="top-bottom">
  <div className="prev-in-dex">
  {pokemonResults.id > 1 ? 
  <div classname="prevButton">
  <div><img id="prevButton" src={ball} alt="pokeball-icon"/></div>
  <div><p>«</p></div>
  </div>
  : null}
</div>
<div className="top-section">
  
  <div className="top-left-section">
    <div className="name-container">
        
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
  </div>  
  <div className="top-right-section">
  <div className="height-weight-container">
      <h6>Height:</h6>
      <p>{result.height}dm</p>
      <h6>Weight:</h6>
      <p>{result.weight / 10}kg</p>
    </div>
    <div className="base-stat-container">
      <h4>Base Stats:</h4>
      {result.stats.map((statistic, idx ) => ( 
      <div className="statList" key={idx}>
        <p className="stat-p">{statistic.stat.name} - Base: {statistic.base_stat}</p>
      </div>))}
    </div>
  </div>
</div>
<div className="next-in-dex">
  {pokemonResults.id > 1 ? 
  <div classname="nextButton">
  <div><img id="nextButton" src={ball} alt="pokeball-icon"/></div>
  <div><p>»</p></div>
  </div>
  : null}
</div>
</div>
  
 
  
  
<MovesList result={result} />

</div>

)}

export default PokemonResult;