import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessages";
import { useState } from "react";

function App() {
  const userId = new Date();
  console.log(userId);
  const botId = crypto.randomUUID();
  console.log(botId);
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatBot",
      sender: "user",
      id: userId,
    },
    {
      message: "hello user",
      sender: "robot",
      id: botId,
    },
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
    <>
      <h1>chatbot app.</h1>

      {chats}

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </>
  );
}

export default App;
