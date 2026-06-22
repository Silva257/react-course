import { useState, useRef, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import { WelcomeMessage } from './components/WelcomeMessage';
import './App.css'

function App() {

  const chatMessagesRef = useRef(null);

  const [chatMessages, setChatMessages] = useState([
    /*{
      sender: "user",
      message: "Hello now",
      id: "id1"
    },{
      sender: "robot",
      message: "Hello how can we help you",
      id: "id2"
    }*/
  ]);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTo({
        top: containerElem.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatMessages]);

  return (
    <div
      className={
        chatMessages.length === 0 ? "app-container-empty" : "app-container"
      }
    >
      <h2 className="chats-header">Chat with our Assistant</h2>

      <WelcomeMessage chatMessages={chatMessages} />

      <div className="chats-container" ref={chatMessagesRef}>
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMessages
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          );
        })}
      </div>

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
