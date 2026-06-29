import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

function App() {
  return (
    <>
      <h1>chatbot app</h1>
      
      <ChatMessages message="hello now" sender="user" />

      <ChatMessages message="hello how can i help you" sender="robot" />

      <ChatInput />
    </>
  );
}

export default App;
