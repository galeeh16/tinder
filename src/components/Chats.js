import React from 'react';
import Chat from './Chat';

const Chats = () => {
    return (
        <div className="chats">
            <Chat 
                name="Kurt Cobain"
                message="Hello bro what's up!"
                time="40 second ago"
                profilePic="https://matamatamusik.com/wp-content/uploads/2020/04/Kurt-Cobain-1024x768.jpg"
            />
            <Chat 
                name="Ariel Tatum"
                message="Tobangado!"
                time="40 minutes ago"
                profilePic="..."
            />
        </div>
    );
}
 
export default Chats;