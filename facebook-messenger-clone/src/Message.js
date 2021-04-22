import { CardContent, Typography,Card } from '@material-ui/core'
import React,{forwardRef} from 'react'
import "./Message.css"

const Message = forwardRef(({username,message},ref)=> {
    console.log("Username",username)
    console.log("Message",message)
    const isUser = username === message.username
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message__userCard":"message__guestCard"} >
                <CardContent>
                    <Typography
                    
                    varient ="h5"
                    component ="h2"
                    >
                     {!isUser && `${message.username}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>    
           
        
    )
})

export default Message
