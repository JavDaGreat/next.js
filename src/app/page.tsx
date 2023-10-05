import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen grid place-content-center bg-gray-900">
      <h1>Hello World</h1>
      <Link href="/about"> Go to About</Link>
    </main>
  );
}
