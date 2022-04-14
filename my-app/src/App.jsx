import { useDispatch, useSelector } from "react-redux";
import { addNumAction } from ".";
import UserChange from "./Components/UserChange";
import UserForm from "./Components/UserForm";
import UsersList from "./Components/UsersList";


function App() {

   const numbers = useSelector(state => state.numbers)
   const dispath = useDispatch()

   const addNum = () => {
      const num = Number(prompt())
      dispath(addNumAction(num))
   }

   return (
      <>
         <div>{numbers}</div>
         <button onClick={addNum}>AddNum</button>
         <UserForm />
         <UsersList />
         <UserChange />
      </>
   );
}

export default App;
