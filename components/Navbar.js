import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearchBtn = (e) => {
    e.preventDefault();
    router.push("/ninja?search=" + input);
    setInput("");
  };

  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} alt="" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/ninja">
        <a>Ninja Listing</a>
      </Link>

      <input
        type="text"
        placeholder="Search"
        className="searchInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearchBtn}>Search</button>
    </nav>
  );
}
