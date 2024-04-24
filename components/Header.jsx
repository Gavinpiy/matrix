import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <Link href="/" title="Homepage" style={{ color: "red" }}>
        <img src="/logo.png" alt="logo" style={{ width: 250 }} />
      </Link>
    </header>
  );
}
