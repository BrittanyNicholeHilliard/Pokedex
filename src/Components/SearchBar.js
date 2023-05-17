import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/*This search bar component is used in the site header.
Input field takes a search query, and the drop down allows the user
to select the type of information they are looking for. 
When the submit button is clicked, axios calls to the API with the 
search query and drop down selection interpolated into the URL to receive the 
proper response. Upon response, the user is redirected to the results page. 
*/

const SearchByNameNum = (props) => {

const {setSearchResults, setPokemonResults, dropDown, setDropDown} = props;

const [searchValue, setSearchValue] = useState('');
const [error, setError] = useState(null)
const navigate = useNavigate();


useEffect(()=> {
}, [])

const changeInput = evt => {
    const {value} = evt.target;
    setSearchValue(value.toLowerCase())
}

const handleChange = evt => {
    setDropDown(evt.target.value);
    
}

const onSubmit = (evt) => {
    if (searchValue === null) {
        setError("Please enter a query")
    }
    if (dropDown === null) {
        setError("Please choose a query type")
        evt.preventDefault();
    } else {
        evt.preventDefault();
    if (dropDown ==="pokemon") {
        axios.get(`https://pokeapi.co/api/v2/${dropDown}-species/${searchValue}`)
        .then((res)=> {
            setPokemonResults(res.data)
            console.log(res.data);
        }).catch((err) => {
            console.log('no results')
        })
    }
    axios.get(`https://pokeapi.co/api/v2/${dropDown}/${searchValue}/`)
    .then((res) => {
        console.log(res.data)
        setSearchResults(res.data)
        navigate(`/${dropDown}-result`)
    }).catch((err) => {
        console.log('no results')
    })
    }
}


return (
    <div className="sbnn-contanier">
        <div className="searchForm">
        <form onSubmit={onSubmit}>
            <input id="nnSearch" type="text" value={searchValue} onChange={changeInput} />
            
           
            <select onChange={handleChange} id="search-options" >
            <option value="null">Select One</option>
            <option value="pokemon">Species</option>
            <option value="type">Type</option>
            <option value="ability">Ability</option>
            <option value="egg-group">Egg Group</option>
            <option value="nature">Nature</option>
            <option value="location">Location</option>
            </select>
            
            <br/>
            <button id="searchSubmit" type="submit">Search</button>
        </form>
        {!error ? null : <div className="searchError">
        <p>{error}</p>
        </div>}

        </div>

    </div>
)

}

export default SearchByNameNum;