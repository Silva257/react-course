import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessages";
import { useEffect, useRef, useState } from "react";
import './App.css'

function App() {

  const chatsElem = useRef(null);

  useEffect(()=>{
    const chatsRef = chatsElem.current;
    chatsRef.scrollTo(
      {
        top: chatsRef.scrollHeight,
        behavior: 'smooth'
      }
    )
  })

  const userId = new Date();
  console.log(userId);
  const botId = crypto.randomUUID();
  console.log(botId);

  const [chatMessages, setChatMessages] = useState([
    // {
    //   message: "hello chatBot",
    //   sender: "user",
    //   id: userId,
    // },
    // {
    //   message: "hello user",
    //   sender: "robot",
    //   id: botId,
    // },
  ]);

  const chats = chatMessages.map((chatMessage) => {
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.id}
      />
    );
  });

  return (
    <div className="general-container">
      <h1>chatbot app.</h1>

      <div className="app-container">
        <div className="chats-container" ref={chatsElem}>{chats}</div>

        <div className="chat-input">
          <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
