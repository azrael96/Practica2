import { isEmpty } from "lodash";
import React,{useState} from "react";
import Home from "./Home.js"

function Login({ navigation }){
const [task, setTask] = useState(null);

const addTask = (e) => {
  e.preventDefault()
  if(isEmpty(task)){
    alert("No deben estar los campos vacios")
  }else{
    return(
      navigation.navigate('Home')
   );
  }
  

}

return (
  <div className="container mt-5">
  <h1>
   Login
  </h1>
  <hr/>
  <form onSubmit={addTask}>

  <input type="text"
    onChange = {(text) => setTask(text.target.value)}>
  </input>
  <hr/>
  <input type="password"
  onChange = {(text) => setTask(text.target.value)}>
  </input>
  <hr/>
 <button type = "submit">
   Login
 </button>
 </form>
</div>


);
}
export default Login;