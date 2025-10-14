import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <a className="text-xl font-semibold">productlifecycle.in</a>
            </Link>
            <nav className="hidden md:flex items-center gap-4 text-sm">
              <Link href="/products"><a className="hover:underline">Products</a></Link>
              <Link href="/docs"><a className="hover:underline">Docs</a></Link>
              <Link href="/learn"><a className="hover:underline">Learn</a></Link>
              <Link href="/learn/foundations"><a className="hover:underline">Foundations</a></Link>
              <Link href="/learn/jargons"><a className="hover:underline">Jargons</a></Link>
              <Link href="/frameworks"><a className="hover:underline">Frameworks</a></Link>
              <Link href="/resources"><a className="hover:underline">Resources</a></Link>
              <Link href="/case-studies"><a className="hover:underline">Case Studies</a></Link>
              <Link href="/career"><a className="hover:underline">Career</a></Link>
              <Link href="/about"><a className="hover:underline">About</a></Link>
              <Link href="/contact"><a className="hover:underline">Contact</a></Link>
            </nav>
          </div>

          {/* mobile menu: simple link to main Learn page and Products */}
          <nav className="md:hidden flex items-center gap-3 text-sm">
            <Link href="/products"><a className="hover:underline">Products</a></Link>
            <Link href="/learn"><a className="hover:underline">Learn</a></Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 flex-1">
        {children}
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-6 text-sm text-slate-600">
          © {new Date().getFullYear()} productlifecycle.in — Learn product management by example.
        </div>
      </footer>
    </div>
  )
}
