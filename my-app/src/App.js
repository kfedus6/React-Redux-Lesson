import { useDispatch, useSelector } from "react-redux";
import { addNumAction } from ".";


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
      </>
   );
}

export default App;
