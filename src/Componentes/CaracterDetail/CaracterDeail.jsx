import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

//Estilos
import './CaracterDeail.styles.css';

const CaracterDeail = () => {

  const {id} = useParams()

  //Estados
  const [infoPokemon, setInfoPokemon] = useState({})

  //Effect
  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setInfoPokemon(res.data))
},[id])

  return (
      <section className='datelle-pokemon'>
          <h2>Detalles</h2>
          <p >El ID del pokemon es: <span>{id}</span></p>
          <div className='infoPokemon'>
            <p className='namePokemon'>{infoPokemon.name}</p>
            {
              infoPokemon.abilities?.map((habilidad)=>(
                <p key={habilidad.ability?.name}>Habilidad: {habilidad.ability?.name}</p>
              ))
            }
            <img src={infoPokemon.sprites?.other.dream_world.front_default} alt="imagen"/>
          </div>
      </section>
  )
};

export default CaracterDeail;
