"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(255,237,227,0.88)] backdrop-blur-[24px] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-syne text-2xl font-extrabold tracking-tight">
          throw<span className="text-tangelo">baq</span>
        </a>
        <a
          href="#waitlist"
          className="inline-flex items-center justify-center rounded-full bg-tangelo px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-tangelo-hover"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
