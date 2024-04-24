import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <Link href="/" title="Homepage" style={{ color: "red" }}>
        <img
          src="/logo.png"
          alt="logo"
          className="w-64 flex items-center"
        />
      </Link>
    </header>
  );
}
