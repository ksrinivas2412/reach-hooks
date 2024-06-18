import './App.css';
import { useState } from 'react';
import Box from './component/Box';
import User from './component/User';
function App() {
  const [count, setcount] = useState(0);
  const [userData, setuserData] = useState("");
  let name = "srinivas";

  const getUserInput = (event) => {
    //console.log("srinivas --"+ event);
    setuserData(event);
  }

  
  //let count = 0;
   const increment = () => {
    setcount((prestate) => prestate + 1);
    //count += 1;
    //console.log(count);
   }
  return (
    <div>
      <h1>Hi welcome to react programing ! </h1>
      <button onClick={increment}> Click me !</button>
      <Box value = {count} nam = {name} fun = {getUserInput}></Box>
      <User data ={userData}></User>
    </div>
  );
}

export default App;
