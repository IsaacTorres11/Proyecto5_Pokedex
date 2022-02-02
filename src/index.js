import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Estas propiedades se importan para hacer uso de Redux
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

// importamos nuestro archivo Redux que creaWmos 
import rootReducer from './redux'

const store = createStore(
  rootReducer,
  composeWithDevTools()
  )


ReactDOM.render(
  <React.StrictMode>
    {/* Procedemos a encerrar a App en el provider */}
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

