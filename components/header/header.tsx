import Link from "next/link";
import Navbar from "./_comp/navbar";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-10 mx-20">
      <Link href={"/"}>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </Link>

      <Navbar />
    </div>
  );
}
