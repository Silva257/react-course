import userImage from "../assets/user.png";
import robotImage from "../assets/robot.png";


function ChatMessage({ message, sender, children }) {
  
  const user = <img src={userImage} alt="user" width="50" />;
  const robot = <img src={robotImage} alt="user" width="50" />;

  return (
    <div className="message-container">
      <div>{sender === "user" && user}</div>
      <div>{message}</div>
      { children }
      <div>{sender === "robot" && robot}</div>
    </div>
  );
}

export default ChatMessage;
