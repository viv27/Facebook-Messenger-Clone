import './App.css';
import {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import { Input, InputLabel,FormHelperText } from '@material-ui/core';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input,setInput] = useState('')
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState('')
  useEffect(()=>{
      db.collection("messages").orderBy('timestamp','desc').onSnapshot(snapshot=>{
        setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
      })
  },[])

  useEffect(()=>{
      setUsername(prompt("Please enter you name"))
  },[])

  const sendMessage=(event)=>{
    event.preventDefault()
    db.collection("messages").add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    
    setInput('')
  }
  
   return (
     <div className="App">
       <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt=""/>
       <h1>Facebook Messenger!</h1>
       <h2>Welcome! {username}</h2>
      <form className="app__form" action="">
        <FormControl className ="app__formControl">
          
          <Input className="app__input" placeholder="Enter a message" value={input} onChange ={event=>setInput(event.target.value)} type="text" />
          <FormHelperText ></FormHelperText>

          <IconButton className="app__iconButton" varient="contained" color="secondary" disabled ={!input}  type="submit" onClick ={sendMessage}>
              <SendIcon/>
          </IconButton>



          {/* <Button varient="contained" color="secondary" disabled ={!input}  type="submit" onClick ={sendMessage}>Send Message</Button> */}
        </FormControl>
        

       </form>
      
      <FlipMove>
      {
        messages.map(({id,message})=>(
          <Message key ={id} username ={username} message = {message}/>
        ))
      } 
      </FlipMove>

     </div>
   )
   
  
}

export default App;
