import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessages";
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const chatsElem = useRef(null);

  useEffect(() => {
    const chatsRef = chatsElem.current;
    chatsRef.scrollTo({
      top: chatsRef.scrollHeight,
      behavior: "smooth",
    });
  });

  const userId = new Date();
  console.log(userId);
  const botId = crypto.randomUUID();
  console.log(botId);

  const [chatMessages, setChatMessages] = useState([]);

  const handleDelete = (idToDelete) => {
    setChatMessages(
      chatMessages.filter(chat => chat.id !== idToDelete
      ),
    );
  };

  const chats = chatMessages.map((chatMessage) => {
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.id}
      >
        <button
          onClick={() => {
            handleDelete(chatMessage.id);
          }}
        >
          delete
        </button>
      </ChatMessage>
    );
  });

  return (
    <div className="general-container">
      <h1>chatbot app.</h1>

      <div className="app-container">
        <div className="chats-container" ref={chatsElem}>
          {chats}
        </div>

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
