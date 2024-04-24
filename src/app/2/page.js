"use client";
import React from "react";
import Link from "next/link";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "/configs/config";
import MessageParser from "/configs/MessageParser";
import ActionProvider from "/configs/ActionProvider";

export default function Page() {
  return (
    <main className="p-12 flex flex-col justify-center pt-18 items-center gap-10 ">
      <h1>Project 2</h1>
      <Link href="/" title="Homepage" style={{ color: "red" }}>
        Home
      </Link>
      <div className="flex gap-20 p-10">
        <div className="App">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
        <p className="max-w-80">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </main>
  );
}
