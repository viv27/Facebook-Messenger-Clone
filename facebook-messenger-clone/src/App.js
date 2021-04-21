
import './App.css';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import { Input, InputLabel,FormHelperText } from '@material-ui/core';
import Message from './Message'


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
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input value={input} onChange ={event=>setInput(event.target.value)} type="text" />
          <FormHelperText ></FormHelperText>
          <Button varient="contained" color="secondary" disabled ={!input}  type="submit" onClick ={sendMessage}>Send Message</Button>
        </FormControl>
        

       
       



       </form>
      

      {
        messages.map(message=>(
          <Message text = {message}/>
        ))
      } 

     </div>
   )
   
  
}

export default App;
