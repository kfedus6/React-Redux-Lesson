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
         return { ...state, users: state.users.filter(u => u.age !== action.payload.age || u.name !== action.payload.name) }
      }
      case "FINDANDCHANGE": {
         const users = state.users.map(user => {
            if (user.name == action.payload.name) {
               user.name = action.payload.newName;
               user.age = action.payload.newAge;
               return user
            }
            return user
         })
         return { ...state, users: users }
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

export const removeUserAction = (name, age) => {
   return { type: 'REMOVEUSER', payload: { name: name, age: age } }
}

export const findAndChangeUserAction = (name, newName, newAge) => {
   console.log(`${name}, ${newName}, ${newAge}`)
   return { type: 'FINDANDCHANGE', payload: { name: name, newName: newName, newAge: newAge } }
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
