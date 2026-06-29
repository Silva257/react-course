import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessages";

function App() {
  return (
    <>
      <h1>chatbot app</h1>

      <ChatMessage message="hello now" sender="user" />

      <ChatMessage message="hello how can i help you" sender="robot" />

      <ChatInput />
    </>
  );
}

export default App;
