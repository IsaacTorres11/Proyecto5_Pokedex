import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Componentes
import FormPokemon from '../FormPokemon/FormPokemon'

//Estilos
import './Search.styles.css';


const Search = () => {
//Estado
const [namePokemon, setNamePokemon] =useState("")
const [pokemonDetalle, setPokemonDetalle] = useState({})
//Navigate
const navigate = useNavigate()
const dispatch = useDispatch()


//Recibiendo el nombre del pokemon del formulario
const getName =(target)=>{
    setNamePokemon(target)

}
//Funciones
const searchPokemon =(e) =>{
    e.preventDefault()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
        .then(res => dispatch({type:'POKE_DETAIL', payload: res.data}))   
        navigate(`/pokedex/detail/${namePokemon}`)
}
console.log(pokemonDetalle);

  return (
    <>
        <FormPokemon 
            namePokemon={namePokemon}
            getName ={getName}
            searchPokemon ={searchPokemon}
        />
    </>
  )
};

export default Search;
