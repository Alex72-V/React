import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const botMessage = { author: "Bot", message: "Ваше сообщение очень важно для нас" };

const MessageList = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([botMessage]);

  const ref = useRef();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        setMessages([...messages, botMessage]);
      }, 1500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  const sendMessage = () => {
    if (value) {
      setMessages([...messages, { author: "User", message: value }]);
      setValue("");
    }
  };

  return (
    <div>
      <h1>MessageList</h1>
      
      <input
        ref={ref}
        placeholder="введите сообщение ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={sendMessage}>send</button>

      <hr />

      {messages.map((message) => (
        <div>
          <h2>{message.author}</h2>
          <h2>{message.message}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
};

root.render(
  <React.StrictMode>
    <MessageList />
  </React.StrictMode>
);