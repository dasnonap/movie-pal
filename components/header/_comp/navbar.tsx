import Link from "next/link";

export default function Navbar() {
  return (
    <div className="">
      <ul className="flex space-x-4 font-[family-name:var(--font-geist-mono)]">
        <li>
          <Link
            href={"/auth/login"}
            className="text-underline-offset-6 hover:underline"
          >
            Sign In
          </Link>
        </li>

        <li>
          <Link
            href={"/auth/register"}
            className="text-underline-offset-6 hover:underline"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}
