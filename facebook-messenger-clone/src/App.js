
import './App.css';
import {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import { Input, InputLabel,FormHelperText } from '@material-ui/core';
import Message from './Message'
import db from './firebase';


function App() {

  const [input,setInput] = useState('')
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState('')
  useEffect(()=>{
      db.collection("messages").onSnapshot(snapshot=>{
        setMessages(snapshot.docs.map(doc=>doc.data()))
      })
  },[])

  useEffect(()=>{
      setUsername(prompt("Please enter you name"))
  },[])
  const sendMessage=(event)=>{
    event.preventDefault()
    setMessages([...messages,{username:username,text:input}])
    setInput('')
  }
  
   return (
     <div className="App">
       <h1>Facebook Messenger!</h1>
       <h2>Welcome! {username}</h2>
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
          <Message username ={username} message = {message}/>
        ))
      } 

     </div>
   )
   
  
}

export default App;
