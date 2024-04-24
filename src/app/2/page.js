"use client";
import React from "react";
import Link from "next/link";
import Header from "/components/Header";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
//configs for chatbot
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
      <main className="p-10 flex flex-col justify-center items-center gap-10 min-w-600">
        <h1>Project 2</h1>

        <div className="flex gap-20 ">
          <div className="App">
            <ChatbotComponent />
          </div>
          <div className="flex flex-col gap-10">
            <p className="max-w-80 flex ">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <p> Type in hello to activate the chatbot.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
