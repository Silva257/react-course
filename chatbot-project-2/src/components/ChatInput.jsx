import { useState } from "react";
import { chatbot } from "supersimpledev"

function ChatInput({ chatMessages, setChatMessages }) {

  const [inputValue, setInputValue] = useState("");

  function getInputValue(e) {
    setInputValue(e.target.value);
  }

  function addMessage() {

    const addChatMessages = [
      ...chatMessages,
      {
        message: inputValue,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(addChatMessages);
    console.log(addChatMessages);
    setInputValue("");

    const response = chatbot.getResponse(inputValue);
    
    setChatMessages(
      [
        ...addChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]
    )
  }

  function keyDownSend(e) {
    e.key === "Enter" && addMessage();
  }

  return (
    <>
      <input
        type="text"
        placeholder="chat with the bot"
        onChange={getInputValue}
        value={inputValue}
        onKeyDown={keyDownSend}
      />
      <button onClick={addMessage}>send</button>
    </>
  );
}

export default ChatInput;
