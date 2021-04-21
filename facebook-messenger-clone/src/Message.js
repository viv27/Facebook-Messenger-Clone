import { CardContent, Typography,Card } from '@material-ui/core'
import React from 'react'
import "./Message.css"

function Message({username,message}) {
    console.log("Username",username)
    console.log("Message",message)
    const isUser = username === message.username
    return (
        <div className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message__userCard":"message__guestCard"} >
                <CardContent>
                    <Typography
                    
                    varient ="h5"
                    component ="h2"
                    >
                     {message.username}: {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>    
           
        
    )
}

export default Message
