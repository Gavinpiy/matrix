import Link from "next/link";

export default function Home() {
  return (
    <main className="p-12 sm:p-18 md:p-18 lg:p-28 flex flex-col justify-center pt-18 items-center h-full sm:gap-10 md:gap-12 lg:gap-20 pb-20">
      <h1>Homepage</h1>
      <div className="flex gap-10">
        <Link href="/1" title="Project 1">
          Project 1
        </Link>
        <Link href="/2" title="Project 2">
          Project 2
        </Link>
        <Link href="/3" title="Project 3">
          Project 3
        </Link>
      </div>
    </main>
  );
}
