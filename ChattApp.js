// ChatApp.js
import React, { useEffect, useState, useRef } from "react";

const ChatApp = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  // Connect to WebSocket on component mount
  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:3001");

    // Receive messages from server
    socketRef.current.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prev) => [...prev, newMessage]);
    };

    return () => socketRef.current.close();
  }, []);

  // Send message to server
  const sendMessage = () => {
    if (message.trim() !== "") {
      const userMessage = { sender: "user", text: message };
      socketRef.current.send(JSON.stringify(userMessage));
      setMessages((prev) => [...prev, userMessage]);
      setMessage("");
    }
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-xl shadow-md bg-gradient-to-r from-indigo-100 to-blue-50">
      <h2 className="text-3xl font-bold mb-4 text-center text-indigo-700">
        AI Chatbot
      </h2>

      <div className="h-80 overflow-y-auto border p-4 mb-4 bg-white rounded shadow-inner flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 p-3 rounded-xl max-w-xs ${
              msg.sender === "user"
                ? "bg-blue-200 self-end ml-auto"
                : "bg-gray-200 self-start mr-auto"
            }`}
          >
            <strong>{msg.sender === "user" ? "You" : "Bot"}</strong>: {msg.text}
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l focus:outline-none"
          placeholder="Ask me anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white p-2 px-4 rounded-r hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
