import React, { useState, useEffect } from "react";
import axios from "axios";
import './Chatbot.css';

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const chatBox = document.querySelector(".chat-box");
        if (chatBox) {
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages([...messages, userMessage]);

        setLoading(true); 

        try {
            const response = await axios.post("http://localhost:5000/chat", {
                message: input,
            });

            const botMessage = {
                sender: "bot",
                text: response.data.message || response.data,
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            const botError = {
                sender: "bot",
                text: "There was an error connecting to the server.",
            };
            setMessages((prev) => [...prev, botError]);
        }

        setInput("");
        setLoading(false); 
    };

    return (
        <div className="chat-container">
            <h2 className="chat-title">Chatbot</h2>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender === "user" ? "message-user" : "message-bot"}`}
                    >
                        <b>{msg.sender === "user" ? "You: " : "Bot: "}</b>
                        {msg.sender === "bot" ? (
                            typeof msg.text === "string" ? (
                                msg.text.split("\n").map((line, i) => (
                                    <div key={i}>{line}</div>
                                ))
                            ) : Array.isArray(msg.text) ? (
                                msg.text.map((item, i) => (
                                    <div key={i} className="product-card">
                                        <h4 className="product-name">{item.name}</h4>
                                        <p className="product-description">{item.description}</p>
                                        <p className="product-price">Price: ${item.price}</p>
                                        <p className="product-category">Category: {item.category}</p>
                                    </div>
                                ))
                            ) : (
                                <div>{JSON.stringify(msg.text)}</div>
                            )
                        ) : (
                            msg.text
                        )}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="input-box"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                />
                <button
                    onClick={sendMessage}
                    className="send-button"
                    disabled={!input.trim()}
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </div>
        </div>
    );
}

export default Chatbot;
