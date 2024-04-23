import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-12 sm:p-18 md:p-18 lg:p-28 flex flex-col justify-center pt-18 items-center h-full sm:gap-10 md:gap-12 lg:gap-20 pb-20">
      <h1>Project 3</h1>
      <Link href="/" title="Homepage">
          Home
        </Link>
    </main>
  );
}
