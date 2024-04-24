import Link from "next/link";

export default function Card({ title, href, imgSrc, description }) {
  return (
    <>
      <div className="border border-black border-solid p-4 rounded-lg text-center">
        <Link href={href} passHref>
          {title}
          <img src={imgSrc} alt={title} className="mt-2" />
        </Link>
        <p className="mt-2">{description}</p>
      </div>
    </>
  );
}
