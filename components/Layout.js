import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const NAV_ITEMS = [
  { href: '/products', label: 'Products' },
  { href: '/docs', label: 'Docs' },
  { href: '/learn', label: 'Learn' },
  { href: '/learn/foundations', label: 'Foundations' },
  { href: '/learn/jargons', label: 'Jargons' },
  { href: '/frameworks', label: 'Frameworks' },
  { href: '/resources', label: 'Resources' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/career', label: 'Career' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // close mobile menu on navigation
  useEffect(() => {
    setOpen(false)
  }, [router.pathname])

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname === href || router.pathname.startsWith(href + '/')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <a className="text-xl font-semibold">productlifecycle.in</a>
            </Link>

            {/* desktop nav */}
            <nav className="hidden md:flex items-center gap-4 text-sm" role="navigation" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`hover:underline ${isActive(item.href) ? 'font-semibold underline' : ''}`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* mobile controls */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation"
              aria-controls="main-navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {/* simple hamburger icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* show a compact link on md+ already handled; keep no-op for larger screens */}
          </div>
        </div>

        {/* mobile menu panel */}
        <div id="main-navigation" className={`md:hidden ${open ? 'block' : 'hidden'}`} role="navigation" aria-label="Mobile main navigation">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`block px-3 py-2 rounded ${isActive(item.href) ? 'bg-slate-100 font-semibold' : 'hover:bg-slate-50'}`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
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
