import React, {useEffect} from "react";
import {default as bug} from '../assets/TypeBadges/Bug.png'
import {default as dark} from '../assets/TypeBadges/Dark.png'
import {default as dragon} from '../assets/TypeBadges/Dragon.png'
import {default as electric} from '../assets/TypeBadges/Electric.png'
import {default as fairy} from '../assets/TypeBadges/Fairy.png'
import {default as fighting} from '../assets/TypeBadges/Fighting.png'
import {default as fire} from '../assets/TypeBadges/Fire.png'
import {default as flying} from '../assets/TypeBadges/Flying.png'
import {default as ghost} from '../assets/TypeBadges/Ghost.png'
import {default as grass} from '../assets/TypeBadges/Grass.png'
import {default as ground} from '../assets/TypeBadges/Ground.png'
import {default as ice} from '../assets/TypeBadges/Ice.png'
import {default as normal} from '../assets/TypeBadges/Normal.png'
import {default as poison} from '../assets/TypeBadges/Poison.png'
import {default as psychic} from '../assets/TypeBadges/Psychic.png'
import {default as rock} from '../assets/TypeBadges/Rock.png'
import {default as steel} from '../assets/TypeBadges/Steel.png'
import {default as water} from '../assets/TypeBadges/Water.png'
import '../pages/pages.css'


const TypeBadges = (props) => {
    const {result} = props; 
    const typeArray = result.types.map((type) => type.type.name);
    const typeImageMap = {
        bug,
        dark,
        dragon,
        electric,
        fairy,
        fighting,
        fire,
        flying,
        ghost,
        grass,
        ground,
        ice,
        normal,
        poison,
        psychic,
        rock,
        steel,
        water,
      };



    useEffect(() => {
    result.types.map((type, idx) => (
        typeArray.push(type.type.name) ))
        console.log(result, typeArray)}, [])

    return (
        <div className="type-badges">
            <div className="badges">
                <img src={typeImageMap[typeArray[0]]} alt={typeArray[0]} />
            </div>
            <div className="badges">
            {typeArray[1] && (
                <img src={typeImageMap[typeArray[1]]} alt={typeArray[1]} />
                )}  
            </div>
        </div>
    )
}

export default TypeBadges;