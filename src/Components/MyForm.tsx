import { useState } from "react"




const MyForm = () => {
   const [email,setEmail] = useState('');
   

   const emailHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
     setEmail(e.target.value)
   }

   const submitHandler = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(e)
   }



  return (
    <div>

   <h1>Email: {email}</h1>
    <form onSubmit={submitHandler}>
        <input
            type="text"
            placeholder="Enter an email"
            onChange={emailHandler}
            value={email}
        />

    
    <button type="submit" >SUBMIT BUTTON </button>

    </form>


      
    </div>
  )
}

export default MyForm
