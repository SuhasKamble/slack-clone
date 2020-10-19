import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Chat.css'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase';
import Message from './Message';
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import firebase from 'firebase'
function Chat() {
    const {roomId} = useParams()
    const [channelName,setChannelName] = useState([])
    const [roomMessages,setRoomMessages] =useState([])
    const [input,setInput] = useState("")
    const [{user},dispatch] = useStateValue()
    useEffect(()=>{
        if(roomId){
            // for roomName
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
                setChannelName(snapshot.data().name)
            ))
            // for message
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot=>(
                setRoomMessages(snapshot.docs.map(doc=>doc.data()))
            ))
        }
    },[roomId])
    const sendMessage =(e)=>{
        e.preventDefault()
       if(roomId){
            db.collection('rooms').doc(roomId).collection('messages').add({
                user:user.displayName,
                userImage: user.photoURL,
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
        
       }
       setInput("")
        
        
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
            <h4 className="chat__ChannelName">
            <strong>#{channelName}</strong>
                <StarBorderOutlinedIcon/>
            </h4>
                </div>
                <div className="chat__headerRight">
                <p>
                    <InfoOutlinedIcon/> Details
                </p>
                </div>
            </div>
            <div className="chat__messages">
               {roomMessages.map(({message,timestamp,user,userImage})=>(
                   <Message message={message} timestamp={timestamp} user={user} userImage={userImage}/>
               ))}
            </div>
            <div className="chat__footer">
                <form>
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                    <Button variant="contained" disabled={!input} type="submit" onClick={sendMessage}>Send</Button>
                </form>
            </div>
        </div>
    )
}

export default Chat
