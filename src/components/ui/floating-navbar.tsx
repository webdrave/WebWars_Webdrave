"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { JSX } from "react"

export const FloatingNav = ({
  navItems,
  className,
  logo,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
  logo?: string
}) => {
  return (
    <div className="fixed top-4 left-4 right-4 z-[5000] flex justify-center">
      <nav
        className={cn(
          "flex items-center justify-between p-4 bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] rounded-full shadow-lg max-w-3xl w-full",
          className,
        )}
      >
        <div className="flex items-center">
          {logo && <Image src={logo || "/placeholder.svg"} alt="Logo" width={32} height={32} className="mr-4" />}
          <div className="hidden md:flex space-x-4">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
                )}
              >
                <span className="text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="md:hidden flex space-x-2">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`icon-link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 p-2",
                )}
              >
                {navItem.icon}
              </Link>
            ))}
          </div>
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        </div>
      </nav>
    </div>
  )
}

