import Link from "next/link";

export default function Card({ title, href, imgSrc, description }) {
  return (
    <>
      <div className="border-2 border-black border-solid p-4 rounded-lg text-center flex flex-col items-center">
        <Link href={href} passHref>
          {title}
          <img src={imgSrc} alt={title} className="w-24 h-24 object-cover" />
        </Link>
        <p className="mt-2">{description}</p>
      </div>
    </>
  );
}