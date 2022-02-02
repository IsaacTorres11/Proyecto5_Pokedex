import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Estilos
import './CaracterInfo.styles.css';

const CaracterInfo = ({url}) => {

    //Esados
    const [pokemon, setPokemon] = useState({})

    //Effect
    useEffect(()=>{
        axios.get(url)
            .then(res => setPokemon(res.data) )
    },[])

    return (
        
        <Link className='enlace' to={`/pokedex/${pokemon.id}`}>
            <p>{pokemon?.name}</p>
        </Link>
    
  )
};

export default CaracterInfo;
