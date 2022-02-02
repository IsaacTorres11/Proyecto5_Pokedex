import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PokemonDetail = () => {
  
  const pokemon = useSelector(state => state.pokemon)

  console.log('este es el pokemon' + pokemon);
  const {name} = useParams()

  return (
      <section className='datelle-pokemon'>
          <h2>Detalles</h2>
          <p >El nombre del pokemon es: <span>{name}</span></p>
          <div className='infoPokemon'>
            <p className='namePokemon'>{pokemon?.name}</p>
            {
              pokemon.abilities?.map((habilidad)=>(
                <p key={habilidad.ability?.name}>Habilidad: {habilidad.ability?.name}</p>
              ))
            }
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="imagen"/>
          </div>
      </section>
  )
};

export default PokemonDetail;
