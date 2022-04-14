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
      case "ADDUSER": {
         return { ...state, users: [...state.users, action.payload] }
      }
      case "REMOVEUSER": {
         return { ...state, users: action.payload }
      }
      case "FINDANDCHANGE": {
         return { ...state, users: action.payload }
      }
      default: {
         return state
      }
   }
}

export const addNumAction = (num) => {
   return { type: 'ADDNUM', payload: num }
}

export const addUserAction = (user) => {
   return { type: 'ADDUSER', payload: user }
}

export const removeUserAction = (newUsers) => {
   return { type: 'REMOVEUSER', payload: newUsers }
}

export const findAndChangeUserAction = (users) => {
   return { type: 'FINDANDCHANGE', payload: users }
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
