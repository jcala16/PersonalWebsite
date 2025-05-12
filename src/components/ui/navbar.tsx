"use client"
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relativew-full bg-background border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button
          className="md:hidden flex items-center px-2 py-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
          <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">Projects</Link>
          <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">Skills</Link>
          <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">Experience</Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
        </nav>
      </div>

      {open && (
        <nav className="md:hidden absolute flex flex-col gap-2 px-4 pb-4 bg-background border-b">
          <Link href="#about" className="text-sm font-medium py-2 hover:underline underline-offset-4" onClick={() => setOpen(false)}>About</Link>
          <Link href="#projects" className="text-sm font-medium py-2 hover:underline underline-offset-4" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#skills" className="text-sm font-medium py-2 hover:underline underline-offset-4" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="#experience" className="text-sm font-medium py-2 hover:underline underline-offset-4" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="#contact" className="text-sm font-medium py-2 hover:underline underline-offset-4" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
