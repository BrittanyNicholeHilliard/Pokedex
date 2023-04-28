
import React from "react";
import pachurisu from '../assets/pachirisu.png'


const Intro = () => {

return (
<div className="intro-container">

<div className="intro-header">
  <h2> Welcome to your Pokedex!</h2>
  <h3>Your pokemon encyclopedia!</h3>
</div>

    <div className="intro-text">
        <p>Hello there! Welcome to the world of Pokémon!
            Pokémon-short for pocket monsters— are magical creatures with incredible abilities. 
            For some people, pokémon are pets. Others use them for competitive battling. 
            No matter what kind of adventure you choose to take with your pokemon partner, 
            This pokedex will keep all of the information you could ever need at your fingertips!
        </p>
        <img className="pachurisu" src={pachurisu} alt="pachurisu" />
    </div>

    
</div>

)
}

export default Intro;