
import './App.css';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import React from 'react';



function App() {

  const [input,setInput] = useState('')
  const [messages,setMessages] = useState([])
  const sendMessage=(event)=>{
    event.preventDefault()
    setMessages([...messages,input])
    setInput('')
  }
  
   return (
     <div className="App">
       <h1>Hello World</h1>
      <form action="">
        <input value={input} onChange ={event=>setInput(event.target.value)} type="text"/> 

       <button disabled ={!input}  type="submit" onClick ={sendMessage}>Send Message</button>
       



       </form>
      

      {
        messages.map(message=>(
          <p>{message}</p>
        ))
      } 

     </div>
   )
   
  
}

export default App;
