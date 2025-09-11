import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="text-xl font-semibold">productlifecycle.in</a>
          </Link>
          <nav className="space-x-4">
            <Link href="/products"><a>Products</a></Link>
            <Link href="/docs"><a>Docs</a></Link>
            <Link href="/learn"><a>Learn</a></Link>
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
