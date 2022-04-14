import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAction } from '..';

const UserForm = () => {
   const [user, setUser] = useState({ name: '', age: '' });

   const dispach = useDispatch();


   const addUser = () => {
      dispach(addUserAction(user));
   }

   return (
      <div>
         <input type="text" placeholder="name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
         <input type="text" placeholder="age" onChange={(e) => setUser({ ...user, age: e.target.value })} />
         <button onClick={addUser} >add user</button>
      </div>
   )
}

export default UserForm;