import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom'

//Componentes
import NameForm from './Componentes/NameForm/NameForm';
import Caracters from './Componentes/Characters/Caracters';
import ProtectedRoutes from './Componentes/ProtectedRoutes/ProtectedRoutes';
import CaracterDeail from './Componentes/CaracterDetail/CaracterDeail';
import PokemonDetail from './Componentes/PokemonDetail/PokemonDetail';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path ="/" element ={<NameForm/>} />

          {/* Protegemos la ruta Caracter */}
          <Route element ={<ProtectedRoutes />}>
            <Route path ="/pokedex"  element = {<Caracters/>}/>
            <Route path ="/pokedex/:id" element ={<CaracterDeail />} />
            {/* Ingresaremos a la ruta de abajo con el formulario 
            para buscar a un pokemon por nombre  */}
            <Route path ="/pokedex/detail/:name" element ={<PokemonDetail />} />
          </Route>
          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
