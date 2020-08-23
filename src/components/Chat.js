import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import './Chats.css';

const Chat = ({ name, message, time, profilePic }) => {
    return (
        <div className="chat">
            <Avatar className="chat__image" alt={name} src={profilePic} />
            <div className="chat__details">
                <h3>{name}</h3>
                <p>{message}</p>   
            </div>
            <p className="chat__time">{time}</p>
        </div>
    );
}
 
export default Chat;