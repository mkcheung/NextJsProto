import { Linden_Hill } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <Header />
      <p><Link href="/about">About Us</Link></p>
    </div>
  );
}
