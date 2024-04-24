"use client";
import React from "react";
import Link from "next/link";
import DragNDrop from "/components/DragNDrop";

import "react-chatbot-kit/build/main.css";
import Chatbot from "react-chatbot-kit";
import config from "/configs/config";
import MessageParser from "/configs/MessageParser";
import ActionProvider from "/configs/ActionProvider";

function ChatbotComponent() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default function Page() {
  return (
    <main className="p-12 flex flex-col justify-center pt-18 items-center sm:gap-10 ">
      <h1>Automated Document Requests</h1>
      <Link href="/" title="Homepage" style={{ color: "red" }}>
        Home
      </Link>
      <div className="flex gap-10">
        <div className="flex flex-col justify-center gap-10 items-center">
          <DragNDrop />
          <DragNDrop />
          <DragNDrop />
          <DragNDrop />
          <DragNDrop />
          <DragNDrop />
        </div>
        <ChatbotComponent />
      </div>
    </main>
  );
}
