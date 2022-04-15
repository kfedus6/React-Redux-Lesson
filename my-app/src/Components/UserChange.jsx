import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAndChangeUserAction } from '..'

const UserChange = () => {
   const [newName, setNewName] = useState('');
   const [newAge, setNewAge] = useState('');
   const [name, setName] = useState('')

   const users = useSelector(state => state.users)
   const dispach = useDispatch();

   const findAndChangeUser = () => {
      dispach(findAndChangeUserAction(name, newName, newAge))
   }

   return (
      <div>
         <div>Old user
            <input type="text" placeholder='new' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='new name' onChange={(e) => setNewName(e.target.value)} />
            <input type="text" placeholder='new age' onChange={(e) => setNewAge(e.target.value)} />
            <button onClick={findAndChangeUser} >Change</button>
         </div>
      </div >
   )
}

export default UserChange;