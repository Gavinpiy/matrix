"use client";
import React from "react";
import Link from "next/link";
import DragNDrop from "/components/DragNDrop";
export default function Page() {
  return (
    <main className="p-12">
      <div className="flex justify-center pt-18 items-center sm:gap-10 md:gap-12  pb-20">
        <div className=" sm:p-18 md:p-18 flex flex-col justify-center items-center sm:gap-10 md:gap-12">
          <div className="flex justify-end">
            <h1>Applicant Document Submission Quality Control</h1>
          </div>
          <DragNDrop />
          <DragNDrop />
          <DragNDrop />
          <DragNDrop />
          <DragNDrop />
          <DragNDrop />
        </div>
        <div className="gap-10 flex flex-col text-center">
          <p>
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
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like). Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin Rackham.
          </p>
          <Link href="/" title="Homepage" style={{ color: 'red' }} className="flex justify-end" >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
