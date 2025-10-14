import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const NAV_ITEMS = [
  { href: '/products', label: 'Products' },
  { href: '/docs', label: 'Docs' },
  { href: '/learn', label: 'Learn' },
  { href: '/learn/foundations', label: 'Foundations' },
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

  const [menuOpen, setMenuOpen] = useState(false)
  const [openSections, setOpenSections] = useState({})

  useEffect(() => {
    // close menu when route changes
    setMenuOpen(false)
  }, [router.pathname])

  const toggleSection = (key) => {
    setOpenSections((s) => ({ ...s, [key]: !s[key] }))
  }

  const MENU = [
    {
      key: 'learn',
      label: 'Learn',
      items: [
        { href: '/learn', label: 'Overview' },
        { href: '/learn/foundations', label: 'Foundations' },
        { href: '/learn/jargons', label: 'Jargons' },
        { href: '/learn/frameworks', label: 'Frameworks' },
        { href: '/learn/skills', label: 'Skills' },
        { href: '/learn/strategy', label: 'Strategy' },
        { href: '/learn/development', label: 'Development' },
        { href: '/learn/growth', label: 'Growth' }
      ]
    },
    { key: 'frameworks', label: 'Frameworks', items: [{ href: '/frameworks', label: 'All Frameworks' }] },
    { key: 'resources', label: 'Resources', items: [{ href: '/resources', label: 'Overview' }, { href: '/resources/templates', label: 'Templates' }, { href: '/resources/tools', label: 'Tools' }] },
    { key: 'case-studies', label: 'Case Studies', items: [{ href: '/case-studies', label: 'All Case Studies' }] },
    { key: 'career', label: 'Career', items: [{ href: '/career', label: 'Overview' }, { href: '/career/beginner', label: 'Beginner' }, { href: '/career/intermediate', label: 'Intermediate' }, { href: '/career/advanced', label: 'Advanced' }] },
    { key: 'other', label: 'Other', items: [{ href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }, { href: '/products', label: 'Products' }, { href: '/docs', label: 'Docs' }] }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <a className="text-xl font-semibold">productlifecycle.in</a>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop: show top-level section buttons that toggle dropdowns */}
            <div className="hidden md:flex items-center gap-2">
              {MENU.map((section) => (
                <div key={section.key} className="relative">
                  <button
                    onClick={() => toggleSection(section.key)}
                    className="px-3 py-2 rounded bg-slate-50 hover:bg-slate-100 text-sm"
                    aria-expanded={!!openSections[section.key]}
                    aria-controls={`section-${section.key}`}
                  >
                    {section.label}
                  </button>

                  {/* dropdown panel */}
                  <div
                    id={`section-${section.key}`}
                    className={`${openSections[section.key] ? 'block' : 'hidden'} absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg z-50`}
                    role="region"
                    aria-label={`${section.label} submenu`}
                  >
                    <ul className="p-3 space-y-1">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href}>
                            <a className={`block px-2 py-1 rounded ${isActive(item.href) ? 'bg-slate-100 font-semibold' : 'hover:bg-slate-50'}`} aria-current={isActive(item.href) ? 'page' : undefined}>
                              {item.label}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Menu button */}
            <div className="md:hidden">
              <button
                aria-controls="site-menu"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                onClick={() => setMenuOpen((v) => !v)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded bg-slate-50 hover:bg-slate-100"
              >
                Menu
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M5 8h10v2H5zM5 11h10v2H5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* accordion panel */}
        <div id="site-menu" className={`${menuOpen ? 'block' : 'hidden'} border-t bg-white`}> 
          <div className="container mx-auto px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MENU.map((section) => (
                <div key={section.key}>
                  <button
                    onClick={() => toggleSection(section.key)}
                    className="w-full text-left px-3 py-2 bg-slate-50 rounded flex justify-between items-center"
                    aria-expanded={!!openSections[section.key]}
                    aria-controls={`section-${section.key}`}
                  >
                    <span className="font-semibold">{section.label}</span>
                    <span aria-hidden="true">{openSections[section.key] ? '−' : '+'}</span>
                  </button>

                  <div id={`section-${section.key}`} className={`${openSections[section.key] ? 'block' : 'hidden'} mt-2`}>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href}>
                            <a className={`block px-3 py-2 rounded ${isActive(item.href) ? 'bg-slate-100 font-semibold' : 'hover:bg-slate-50'}`} aria-current={isActive(item.href) ? 'page' : undefined}>
                              {item.label}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
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
