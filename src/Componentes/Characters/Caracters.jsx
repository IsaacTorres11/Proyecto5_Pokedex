import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

//Estilos
import './Caracters.styles.css';


//Componentes
import CaracterInfo from '../CaracterInfo/CaracterInfo';
import Search from '../Search/Search';
const Caracters = () => {

//Estados
const [caracter, setCaracter] = useState([])

// Redux accediendo al valor
const name = useSelector( state => state.name)


//useEffect
useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then(res => setCaracter(res.data.results))
},[])

return (
    <div className='Lista-pokemones'>
        <h1>Pokedex</h1>
        <p>Bienvenido: <span>{name}</span></p>
        <Search />
        <div className='contenedor-pokemon'>
            {
                caracter.map(caracterActual =>(
                    <div className='pokemon'key={caracterActual.name}>
                        <li>
                            <CaracterInfo url = {caracterActual.url}/>  
                        </li>
                    </div>
                    
                ))
            }
        </div>
    </div>
  )
};

export default Caracters;
