import React from "react";

import './MessageItem.css';

export default ({data,user}) => {

    return (

        <div className="messageLine"

        style={{
            
            justifyContent: user.id === data.Author? 'flex-end':'flex-start' // se sou autor da mensagem, fica flexend, caso contrário flex start
        
            }}
        
        >
            
        <div className="messageItem"
        style={{
            
            backgroundColor: user.id === data.Author? '#DCF8C6':'#FFF' // se sou autor da mensagem, fica flexend, caso contrário flex start
            
            }}
            
        >

            <div className="messageText">{data.body}</div>
            <div className="messageDate"> 19:00</div>

            </div>

        </div>
    )

}