function ChatInput({chatMessages, setChatMessages }) {

  function addMessage() {
    setChatMessages([
      ...chatMessages,
      {
        message: "hello bot",
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);
    console.log(chatMessages)
  }
  
  return (
    <>
      <input type="text" placeholder="chat with the bot" />
      <button onClick={addMessage}>send</button>
    </>
  );
}

export default ChatInput;
