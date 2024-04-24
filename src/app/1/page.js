"use client";
import React from "react";
import Link from "next/link";
import DragNDrop from "/components/DragNDrop";
export default function Page() {
  return (
    <main className="p-12 sm:p-18 md:p-18 lg:p-28 flex flex-col justify-center pt-18 items-center h-full sm:gap-10 md:gap-12  pb-20">
      <h1>Applicant Document Submission Quality Control</h1>
      <DragNDrop />
      <DragNDrop />
      <DragNDrop />
      <DragNDrop />
      <DragNDrop />
      <DragNDrop />
      <Link href="/" title="Homepage">
        Home
      </Link>
    </main>
  );
}
