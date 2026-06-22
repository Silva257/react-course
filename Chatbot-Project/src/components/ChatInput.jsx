import { useState } from "react";
import { chatbot } from "supersimpledev";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputValue, setInputValue] = useState("");

  function getInputValue(e) {
    setInputValue(e.target.value);
  }

  function sendMessage() {
    const newId = Date.now().toString();
    const anotherId = new Date().toString();

    if (!inputValue) return;

    const newMessages = [
      ...chatMessages,
      {
        message: inputValue,
        sender: "user",
        id: newId,
      },
    ];

    setChatMessages(newMessages);
    console.log(newMessages);
    // console.log(anotherId)

    const response = chatbot.getResponse(inputValue);

    setChatMessages([
      ...newMessages,
      {
        message: response,
        sender: "robot",
        id: anotherId,
      },
    ]);
    setInputValue("");
  }

  function keyButtonSend(e) {
    e.key === "Enter" && sendMessage();
  }

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="ask chatbot"
        className="input-text"
        onChange={getInputValue}
        value={inputValue}
        onKeyDown={keyButtonSend}
      />
      <button onClick={sendMessage} className="input-button">
        send
      </button>
    </div>
  );
}
