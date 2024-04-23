import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-12 sm:p-18 md:p-18 lg:p-28 flex flex-col justify-center pt-18 items-center h-full sm:gap-10 md:gap-12 lg:gap-20 pt-20">
      <h1>Homepage</h1>
      <div className="flex gap-10">
        <div className="border-black border-solid border-2 p-4 rounded-lg min-h-60 min-w-40 flex-1 text-center ">
          <Link href="/1" title="Project 1">
            Project 1
          </Link>
          <p>Applicant Document Submission Quality Control</p>
        </div>

        <div className="border-black border-solid border-2 p-4 rounded-lg min-h-60 min-w-40 flex-1 text-center ">
          <Link href="/1" title="Project 1">
            Project 2
          </Link>
          <p>Order Taking and Creation Through Conversational AI</p>
        </div>
        <div className="border-black border-solid border-2 p-4 rounded-lg min-h-60  flex-1 text-center ">
          <Link href="/1" title="Project 1">
            Project 3
          </Link>
          <p>Automated Document Requests</p>
        </div>
      </div>
    </main>
  );
}
