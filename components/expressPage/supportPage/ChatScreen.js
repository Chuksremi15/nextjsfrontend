import React, { useEffect, useRef } from "react";
import ChatHead from "./ChatHead";
import MessageForm from "./MessageForm";
import MessageScreen from "./MessageScreen";

function ChatScreen() {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, []);
  return (
    <div className="max-w-screen-sm w-full bg-white shadow-xl  p-6 rounded-lg">
      <h1 className="text-green-black font-bold text-lg font-[Poppins]">
        You’re chatting with:
      </h1>
      <ChatHead />
      <MessageScreen messagesEndRef={messagesEndRef} />
      <MessageForm />
    </div>
  );
}

export default ChatScreen;
