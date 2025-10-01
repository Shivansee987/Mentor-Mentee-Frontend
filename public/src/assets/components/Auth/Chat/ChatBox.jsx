import React, { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "you" }]);
      setInput("");
    }
  };

  return (
    <div className="p-4 border rounded h-96 flex flex-col">
      <div className="flex-1 overflow-auto mb-2">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender === "you" ? "text-right" : "text-left"}`}>
            <span className="inline-block p-2 rounded bg-gray-200">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="border p-2 flex-1"/>
        <button onClick={sendMessage} className="bg-blue-600 text-white p-2 rounded ml-2">Send</button>
      </div>
    </div>
  );
}
