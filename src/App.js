import './App.css';
import React, { useState, useEffect }from 'react';
import {Route, Routes, Link } from 'react-router-dom';
import logo from './assets/Pokemon-Logo-PNG.png';
import SearchBar from './Components/SearchBar.js'
import Intro from './Components/Intro.js';

import {AbilityResult} from './pages/AbilityResult/index.js';
import {TypeResult} from './pages/TypeResult/index.js';
import {PokemonResult} from './pages/PokemonResult/index.js';



function App() {
  const [searchResults, setSearchResults] = useState(null)
  const [pokemonResults, setPokemonResults] = useState(null)
  const [dropDown, setDropDown] = useState(null);

  useEffect(() => {
    console.log(`searchResult: ${searchResults}`)
    console.log(`pokemonResults: ${pokemonResults}`)
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <a href="/"><img src={logo} className="pokemon_logo" alt="pokemon_logo" /></a>
        </div>
        <div className="header-text">
          <h1>Pokemon Encyclopedia</h1>
          <h4>Gotta catch them all!</h4>
        </div>
        <div className="header-searchBar">
        <SearchBar setSearchResults={setSearchResults} setPokemonResults={setPokemonResults} setDropDown={setDropDown} dropDown={dropDown}/>
        </div>
      </header>

      <Routes>
        <Route path="/" exact element={<Intro/>} />
        {/* There is one path for each type of search query. 
        Each correlates to an option in the searchbar component dropdown menu */}
        <Route path="/ability-result" element={<AbilityResult result={searchResults} />}/>
        <Route path="/type-result" element={<TypeResult result={searchResults}/>} />
        <Route path='/pokemon-result/' element={<PokemonResult result={searchResults} pokemonResults={pokemonResults}/>} />      
        <Route path="/location-result" />
        <Route path="/egg-group-result" />
        <Route path="/nature-result" />
      </Routes>

  </div>
    
  );
}

export default App;
