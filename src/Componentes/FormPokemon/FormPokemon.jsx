import React from 'react';
//Estilos
import './FormPokemon.styles.css';

const FormPokemon = ({namePokemon, getName ,searchPokemon}) => {


  return (
    <div className='formPokemon'>
        <form onSubmit={e => searchPokemon(e)}>
            <label htmlFor="namepokemon">
                <input type="text" 
                placeholder='Busca un Pokemon'
                value={namePokemon}
                onChange={(e) => getName(e.target.value)}
                />
            </label>            
             <button>Submmit</button>
        </form>
    </div>
  )
};

export default FormPokemon;
