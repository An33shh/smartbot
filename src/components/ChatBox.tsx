import React, { useState } from "react";
import { Input, Button, List, Typography } from "antd";
import { motion } from "framer-motion";

type Message = {
  sender: "user" | "bot";
  text: string;
};

interface ChatBoxProps {
  messages: Message[];
  onSendMessage: (message: string) => Promise<void>;
}

const { Text } = Typography;

const ChatBox: React.FC<ChatBoxProps> = ({ messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      className="chat-container poppins-thin"
      style={{
        padding: "20px",
        backgroundColor: "#1a1a1a",
        borderRadius: "15px",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <List
        className="message-list"
        dataSource={messages}
        locale={{
          emptyText: <span style={{ color: "#fff" }}>No messages yet</span>,
        }}
        renderItem={(msg) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`message-item ${
              msg.sender === "user" ? "user-message" : "bot-message"
            }`}
            style={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            <List.Item
              style={{
                textAlign: msg.sender === "user" ? "right" : "left",
                backgroundColor: msg.sender === "user" ? "#1890ff" : "#404040",
                color: "#fff",
                padding: "10px 15px",
                borderRadius: "20px",
                marginBottom: "10px",
                maxWidth: "70%",
              }}
            >
              <Text style={{ fontSize: "16px", fontWeight: "500" }}>
                {msg.text}
              </Text>
            </List.Item>
          </motion.div>
        )}
      />
      <div style={{ display: "flex", marginTop: "20px", alignItems: "center" }}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown} // Enter key functionality
          placeholder="Type a message..."
          style={{
            flex: 1,
            borderRadius: "25px",
            backgroundColor: "#fff",
            color: "black",
            padding: "12px 20px",
          }}
        />
        <Button
          type="primary"
          onClick={handleSend}
          style={{
            marginLeft: "10px",
            borderRadius: "25px",
            height: "45px",
            backgroundColor: "#1890ff",
            border: "none",
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatBox;
