// src/app/page.tsx

"use client";

import { useState } from "react";
import ChatBox from "../components/ChatBox";
import { Typography } from "antd";
import { motion } from "framer-motion";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const { Title } = Typography;

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (message: string) => {
    if (message.trim() === "") return;

    const userMessage: Message = { sender: "user", text: message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate a bot response for now
    const botResponse = "This is a simulated bot response.";
    const botMessage: Message = { sender: "bot", text: botResponse };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#1a1a1a",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
        }}
      >
        <Title
          level={2}
          style={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          Smartbot
        </Title>
        <ChatBox messages={messages} onSendMessage={sendMessage} />
      </motion.div>
    </div>
  );
}
