// welcome mwssage

export function WelcomeMessage({ chatMessages }) {
  return (
    chatMessages.length === 0 && (
      <div className="welcome-message">
        <p>Welcome to chatbot Project..</p>
        <p>Send a message to start ⏬</p>
        <p>🔻🔻🔻🔻🔻</p>
      </div>
    )
  );
}
