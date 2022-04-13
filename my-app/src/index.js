import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const defaultState = {
   users: [],
   numbers: 10,
}

const reducer = (state = defaultState, action) => {
   switch (action.type) {
      case "ADDNUM": {
         return { ...state, numbers: state.numbers + action.payload }
      }
      default: {
         return state
      }
   }
}


export const addNumAction = (num) => {
   return { type: 'ADDNUM', payload: num }
}


const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>
);
