
import React from 'react';

import { useState } from 'react';

import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';



export default ({user, chatlist, show, setShow}) => {

    const [list, setList] = useState([
    
        {id: 123, avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU', name: 'Fernando Frisso'},
        {id: 123, avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU', name: 'Fernando Frisso'},
        {id: 123, avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU', name: 'Fernando Frisso'},
        {id: 123, avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU', name: 'Fernando Frisso'}
        
    ]);

    const handleClose = () => {

        setShow(false)

    }

    return (    

        <div className='newChat' style={{left: show? 0:-415}}>

            <div className='newChat--head'>

                <div onClick={handleClose} className='newChat--backbutton'>

                    <ArrowBackIcon style={{color:'#FFFFFF'}}/>  

                </div>

                <div className='newChat--headtitle'> Nova conversa </div>

            </div>

            <div className='newChat--list'>

                {list.map((item, key)=>(

                    <div className='newChat--item' key={key}> 

                        <img className='newChat--itemavatar' src={item.avatar} alt=''></img>
                        <div className='newChat--itemname'>{item.name}</div>

                    </div>

                ))}

            </div>

        </div>



    )
}

