import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserAction } from '..';

const UsersList = () => {

   const users = useSelector(state => state.users);
   const dispach = useDispatch();

   const removeUser = (user) => {
      dispach(removeUserAction(user.name, user.age))
   }

   return (
      <div>
         {users.map((item, index) => {
            return (
               <div key={index}>
                  {item.name} {item.age}
                  <button onClick={() => removeUser(item)} >remove</button>
               </div>
            )
         })
         }
      </div>
   )
}

export default UsersList;