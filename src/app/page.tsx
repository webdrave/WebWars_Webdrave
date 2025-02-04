import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <nav className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
          <Image
              src="/logo/gulogo.png"
              alt="Galgotias University Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/logo/iccsai_logo.jpeg"
              alt="Galgotias University Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
           
            <Image
              src="/logo/ieee.png"
              alt="Galgotias University Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/logo/sdg.png"
              alt="Galgotias University Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/logo/wie.png"
              alt="Galgotias University Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-[#222222] hover:text-[#787878]/80">
              Home
            </Link>
            <Link href="/guidelines" className="text-sm text-[#222222] hover:text-[#787878]/80">
              Guidelines
            </Link>
            <Link href="/iccsai-2023" className="text-sm text-[#222222] hover:text-[#787878]/80">
              ICCSAI - 2023
            </Link>
            <Link href="/committee" className="text-sm text-[#222222] hover:text-[#787878]/80">
              Committee
            </Link>
            <Link href="/registration" className="text-sm text-[#222222] hover:text-[#787878]/80">
              Registration
            </Link>
            <button className="border-[#787878] text-[#222222] hover:bg-[#787878]/10">
              Submit Your Paper
            </button>
          </div>
        </nav>
      </header>
      <main>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl  leading-tight text-[#222222] tracking-tighter md:text-5xl lg:text-6xl">
            <span className="text-[#787878]">2025 3rd</span> International Conference{" "}
            <span className="text-[#787878]">on</span>
          </h1>
          <h2 className="mb-8 text-2xl font-semibold text-[#222222] md:text-3xl lg:text-4xl">
            Communication, Security, and Artificial Intelligence
          </h2>
          <div className="space-y-2 text-[#787878]">
            <p className="text-lg">(ICCSAI - 2025) (#64074)</p>
            <p className="text-lg">(Mode: Hybrid)</p>
          </div>
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-[#787878] md:text-4xl">4th - 6th April, 2025</h3>
          </div>
        </div>
      </main>
    </div>
  )
}

