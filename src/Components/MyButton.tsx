import React,{useState} from 'react';

interface MyButtonProps{
  text: string | number | boolean,
  onClick?:()=> void,

}

interface movie{
  name:string,
  price?:number | string,
}


const MyButton:React.FC <MyButtonProps> = (props) => {
  
  const [value,setValue] = useState<movie>({name:'Genius',price:10});
   
  return (
    <div>
      
      <h1> BookName:{value.name} and Price :{value.price}  </h1>

      <button onClick={props.onClick} > {props.text}</button>
      <button onClick={()=> setValue({name:'Hammer',price:"five hundred"})} > INCREASE VALUE </button>
    </div>
  )
}

export default MyButton
