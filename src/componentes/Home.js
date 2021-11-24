import React from "react";

function Home(navigation){

    const addTask = (e) => {
        
               navigation.navigate('Login')
          
       
      
      }

    return(

<div className="container mt-5">
        <form onSubmit={addTask}>
       <button type = "submit">
         Going Back
       </button>
       </form></div>
    )
}
export default Home;