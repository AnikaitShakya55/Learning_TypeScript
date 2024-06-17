import React from 'react'
import MyButton from './Components/MyButton';


const App = () => {
    return (

    <div>
       
       <h1>functioncal Component and how to handle props as well </h1>
       
       <MyButton onClick={()=> alert("Click me more")} text="Click Me more!!" />

    </div>
  )
}

export default App
