"use client";
import React from "react";

import DragNDrop from "/components/DragNDrop";
import Header from "/components/Header";
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
    <div>
      <Header />
      <main className="p-10 flex flex-col justify-center pt-18 items-center sm:gap-10 ">
        <h1 className="font-extrabold"> Automated Document Requests</h1>

        <div className="flex gap-10">
          <form className="sm:p-18 md:p-18 flex flex-col justify-center items-center gap-10 border-2 border-black p-4 rounded-lg">
            <DragNDrop />
            <DragNDrop />
            <DragNDrop />
            <DragNDrop />
            <DragNDrop />
            <DragNDrop />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
          <ChatbotComponent />
        </div>
      </main>
    </div>
  );
}
