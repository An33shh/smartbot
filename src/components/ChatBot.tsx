// src/components/chatbot.tsx
"use client"; // Add this line to indicate that this component is a client component

import { useState } from "react";
import axios from "axios";
import Sentiment from "sentiment";
import ChatBox from "./ChatBox"; // Ensure this path is correct

type Message = {
  sender: "user" | "bot";
  text: string;
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const sentiment = new Sentiment();

  const sendMessage = async (message: string) => {
    if (message.trim() === "") return;

    // Add user's message to the chat
    setMessages((prev) => [...prev, { sender: "user", text: message }]);

    // Analyze sentiment
    const sentimentResult = sentiment.analyze(message);
    const sentimentScore = sentimentResult.score;

    let tone = "neutral";
    if (sentimentScore > 0) tone = "positive";
    else if (sentimentScore < 0) tone = "negative";

    try {
      const response = await axios.post("/api/chat", { message, tone });
      const botResponse = response.data.response;

      // Add chatbot's response to the chat
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error sending message to the bot:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I'm having trouble right now." },
      ]);
    }
  };

  return <ChatBox messages={messages} onSendMessage={sendMessage} />;
};

export default ChatBot;
