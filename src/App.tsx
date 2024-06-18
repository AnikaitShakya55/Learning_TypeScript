import React from 'react'
import MyButton from './Components/MyButton';
import MyForm from './Components/MyForm';


const App = () => {
    return (

    <div>
       
       <MyForm/>
       
       <MyButton onClick={()=> alert("Click me more")} text="Click Me more!!" />

    </div>
  )
}

export default App
