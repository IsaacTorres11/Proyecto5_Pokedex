import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Estilos
import './NameForm.styles.css';


const NameForm = () => {

//Redux
const dispatch = useDispatch()

// Router Navigate
const navigate = useNavigate ()

//Estados
const [name, setName] = useState("")

//Funciones 
const submit =(e)=>{
    e.preventDefault()
    dispatch({type: "SET_NAME", payload: name})
    // navigate("/characters")
    navigate("/pokedex")
}

  return (
      <div className='FormularioNombre'>
          <form onSubmit={submit} >
              <label>
                  <div className='texto'>Coloca Tu Nombre</div>
                  <input 
                    className='control'
                    type="text"
                    value={name}
                    onChange={e => {setName(e.target.value)}} 
                  />
              </label>
              <button className='enviar'>Submmit</button>
          </form>
      </div>
  )
};

export default NameForm;
