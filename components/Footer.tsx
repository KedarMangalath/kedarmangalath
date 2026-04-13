"use client"

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-7 border-t border-primary/8 flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="font-mono text-[9px] tracking-[0.35em] text-primary/70">
        © {new Date().getFullYear()} KEDAR MANGALATH. ALL RIGHTS RESERVED.
      </p>
      <p className="font-mono text-[9px] tracking-[0.35em] text-primary/70">
        BUILT WITH NEXT.JS & FRAMER MOTION
      </p>
    </footer>
  )
}
