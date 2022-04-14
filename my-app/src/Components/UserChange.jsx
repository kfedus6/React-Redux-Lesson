import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserChange = () => {
   const [name, setName] = useState('');
   const [age, setAge] = useState('');

   const users = useSelector(state => state.users)
   const dispach = useDispatch();

   const findAndChangeUser = () => {
      let findUsers = users.filter(u => u.name === name && u.age === age)
      console.log(findUsers);
   }

   return (
      <div>
         <div>Old user
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='age' onChange={(e) => setAge(e.target.value)} />
            <button onClick={findAndChangeUser} >Change</button>
         </div>
      </div >
   )
}

export default UserChange;