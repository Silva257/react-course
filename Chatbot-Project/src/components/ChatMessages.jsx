// ChatMessages component

import user from "../assets/user.png";
import robot from "../assets/robot.png";

export function ChatMessages({ sender, message }) {
  const userImage = <img src={ user } width="50" alt="user" />;
  const robotImage = <img src={ robot } width="50" alt="robot" />;

  return (
    <div className={sender === "user" ? "message-user" : "message-robot"}>
      <div className="user-image">{sender === "user" && userImage}</div>
      <div className="message-text">{message}</div>
      <div className="robot-image">{sender === "robot" && robotImage}</div>
    </div>
  );
}