import React,{useState} from "react";

import './App.css';

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';



export default () => {

  const [chatlist, setChatList] = useState([
    
    {chatId:1, title: 'Fulano de tal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU'},
    {chatId:2, title: 'Fulano de tal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU'},
    {chatId:3, title: 'Fulano de tal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU'},
    {chatId:4, title: 'Fulano de tal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU'}
  
  ]);


  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    
    id: 1234,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU',
    name: 'Fernando Frisso'
    
  })

  const [showNewChat, setShowNewChat] = useState(false)

  const handleNewChat = ()=>{

    setShowNewChat(true)

  }


  return (

    <div className="app-window">

      <div className="sidebar">

        <NewChat 

          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />

         <header>

            <img className="header--avatar" src={user.avatar} alt="" />
            
            <div className="header--buttons">

                <div className="header--btn">

                    <DonutLargeIcon style= {{color:'#919191'}}/>
                  
                </div>

                <div onClick={handleNewChat} className="header--btn">

                    <ChatIcon style= {{color:'#919191'}}/>
                  
                </div>

                <div className="header--btn">

                    <MoreVertIcon style= {{color:'#919191'}}/>
                  
                </div>


            </div>

         </header>

         <div className="search">

            <div className="search--input">

                <SearchIcon font-size='small' style= {{color:'#919191'}}/>

                <input type='search' placeholder="Procurar ou começar uma nova conversa"/>

              
            </div>

         </div>

         <div className="chatlist">
-
            {chatlist.map((item, key) => (


              <ChatListItem

                key={key}
                data={item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={()=>setActiveChat(chatlist[key])}
              
              />



            ))}

         </div>

      </div>

      <div className="contentarea">

          {activeChat.chatId !== undefined && // quando o id do chat atvio existir (ou seja, for diferente de undefined)
          
              <ChatWindow

              user={user}
              
              />

          }

          {activeChat.chatId == undefined && // quando o id do chat atvio existir (ou seja, for diferente de undefined)
          
              <ChatIntro/>

           }

        
      </div>

    </div>

  )

}