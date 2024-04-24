"use client";
import React from "react";
import Header from "/components/Header";
import DragNDrop from "/components/DragNDrop";
export default function Page() {
  return (
    <div>
      <Header />
    <main className="p-10 flex flex-col items-center gap-10 min-w-600">
      <div className="flex flex-col items-center gap-2">
        <h1>Applicant Document Submission Quality Control</h1>
      </div>
      <div className="flex justify-center pt-18 items-center sm:gap-10 md:gap-12">
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
        <div className="gap-10 flex flex-col text-center ">
          <p style={{ minWidth: "500px", maxWidth: "600px" }}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
          </p>
        </div>
      </div>
    </main>
    </div>
  );
}
