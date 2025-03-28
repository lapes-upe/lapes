"use client"
import { texts } from "@/resources/texts"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="mx-auto flex items-center pt-4">
      <div className="w-8 h-8">
      </div>
      <div className="w-full flex items-center justify-end gap-4 font-(family-name:--font-inter)">
        <Link href="/" className="relative group py-1">
          {texts.components.navbar.en.home}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-800 transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full group-hover:bg-amber-400"}`} />
        </Link>
        <Link href="/articles" className="relative group py-1">
          {texts.components.navbar.en.articles}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-800 transition-all duration-300 ${pathname === "/articles" ? "w-full" : "w-0 group-hover:w-full group-hover:bg-amber-400"}`} />
        </Link>
        <Link href="/papers" className="relative group py-1">
          {texts.components.navbar.en.papers}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-800 transition-all duration-300 ${pathname === "/papers" ? "w-full" : "w-0 group-hover:w-full group-hover:bg-amber-400"}`} />
        </Link>
        <Link href="/about" className="relative group py-1">
          {texts.components.navbar.en.about}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-800 transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full group-hover:bg-amber-400"}`} />
        </Link>
      </div>
      <div className="w-8 h-8" />
    </nav>
  )
}
