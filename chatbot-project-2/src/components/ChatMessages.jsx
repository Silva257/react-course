import userImage from "../assets/user.png";
import robotImage from "../assets/robot.png";

function ChatMessage({ message, sender }) {
  
  const user = <img src={userImage} alt="user" width="50" />;
  const robot = <img src={robotImage} alt="user" width="50" />;

  return (
    <div>
      {sender === "user" && user}
      {message}
      {sender === "robot" && robot}
    </div>
  );
}

export default ChatMessage;
