import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
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
  const headerRef = useRef(null)
  const buttonsRef = useRef([])
  const submenuRefs = useRef({})

  useEffect(() => {
    // close menu when route changes
    setMenuOpen(false)
  }, [router.pathname])

  const toggleSection = (key) => {
    setOpenSections((s) => {
      // if the clicked section is already open, close it
      if (s[key]) return {}
      // otherwise open only the clicked section and close others
      return { [key]: true }
    })
  }

  // Close menus when clicking outside the header, and handle keyboard navigation
  useEffect(() => {
    const onDocClick = (e) => {
      if (!headerRef.current) return
      if (!headerRef.current.contains(e.target)) {
        setOpenSections({})
        setMenuOpen(false)
      }
    }

    const onKey = (e) => {
      // Close all menus on Escape
      if (e.key === 'Escape' || e.key === 'Esc') {
        setOpenSections({})
        setMenuOpen(false)
        // move focus back to first menu button if any
        if (buttonsRef.current && buttonsRef.current[0]) buttonsRef.current[0].focus()
      }

      // Arrow navigation between top-level buttons when focused
      const active = document.activeElement
      const idx = buttonsRef.current.findIndex((b) => b === active)
      if (idx !== -1) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault()
          const next = buttonsRef.current[(idx + 1) % buttonsRef.current.length]
          if (next) next.focus()
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault()
          const prev = buttonsRef.current[(idx - 1 + buttonsRef.current.length) % buttonsRef.current.length]
          if (prev) prev.focus()
        }
        if (e.key === 'Enter' || e.key === ' ') {
          // Space/Enter toggles open state
          e.preventDefault()
          const key = buttonsRef.current[idx]?.dataset?.key
          if (key) toggleSection(key)
        }
        // If the section is open and the user presses ArrowDown, move into submenu
        const key = buttonsRef.current[idx]?.dataset?.key
        if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && key && openSections[key]) {
          const items = submenuRefs.current[key] || []
          if (items[0]) {
            e.preventDefault()
            items[0].focus()
          }
        }
      }

      // If focus is inside a submenu, allow up/down/home/end navigation
      const subActive = Object.keys(submenuRefs.current).find((k) => (submenuRefs.current[k] || []).includes(document.activeElement))
      if (subActive) {
        const items = submenuRefs.current[subActive]
        const pos = items.findIndex((el) => el === document.activeElement)
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          const next = items[(pos + 1) % items.length]
          if (next) next.focus()
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          const prev = items[(pos - 1 + items.length) % items.length]
          if (prev) prev.focus()
        }
        if (e.key === 'Home') {
          e.preventDefault()
          if (items[0]) items[0].focus()
        }
        if (e.key === 'End') {
          e.preventDefault()
          if (items[items.length - 1]) items[items.length - 1].focus()
        }
        if (e.key === 'Escape' || e.key === 'Esc') {
          // Close submenu and focus the parent button
          setOpenSections({})
          const btnIdx = buttonsRef.current.findIndex((b) => b?.dataset?.key === subActive)
          if (buttonsRef.current[btnIdx]) buttonsRef.current[btnIdx].focus()
        }
      }
    }

    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('touchstart', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('touchstart', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

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
    { key: 'frameworks', label: 'Frameworks', items: [
      { href: '/frameworks', label: 'All Frameworks' },
      { href: '/frameworks/rice', label: 'RICE' },
      { href: '/frameworks/moscow', label: 'MoSCoW' },
      { href: '/frameworks/kano', label: 'Kano Model' },
      { href: '/frameworks/ice', label: 'ICE' }
    ] },
    { key: 'resources', label: 'Resources', items: [{ href: '/resources', label: 'Overview' }, { href: '/resources/templates', label: 'Templates' }, { href: '/resources/tools', label: 'Tools' }] },
    { key: 'case-studies', label: 'Case Studies', items: [{ href: '/case-studies', label: 'All Case Studies' }] },
    { key: 'career', label: 'Career', items: [{ href: '/career', label: 'Overview' }, { href: '/career/beginner', label: 'Beginner' }, { href: '/career/intermediate', label: 'Intermediate' }, { href: '/career/advanced', label: 'Advanced' }] },
    { key: 'other', label: 'Other', items: [{ href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }, { href: '/products', label: 'Products' }, { href: '/docs', label: 'Docs' }] }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow sticky top-0 z-40">
  <div ref={headerRef} className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <a className="flex items-center gap-3">
                {/* Logo image: place the file at /public/images/productlifecycle-logo.png */}
                <img
                  src="/images/productlifecycle-logo.png"
                  alt="productlifecycle.in"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-xl font-semibold">productlifecycle.in</span>
              </a>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop: show top-level section buttons that toggle dropdowns */}
            <div className="hidden md:flex items-center gap-2">
              {MENU.map((section, idx) => (
                <div key={section.key} className="relative">
                  <button
                    ref={(el) => (buttonsRef.current[idx] = el)}
                    data-key={section.key}
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
                    className={`absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg z-50 transform transition-all duration-200 origin-top-right ${openSections[section.key] ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                    role="region"
                    aria-label={`${section.label} submenu`}
                  >
                    <ul className="p-3 space-y-1">
                      {section.items.map((item, j) => (
                        <li key={item.href}>
                          <Link href={item.href}>
                            <a
                              ref={(el) => {
                                submenuRefs.current = submenuRefs.current || {}
                                submenuRefs.current[section.key] = submenuRefs.current[section.key] || []
                                submenuRefs.current[section.key][j] = el
                              }}
                              className={`block px-2 py-1 rounded ${isActive(item.href) ? 'bg-slate-100 font-semibold' : 'hover:bg-slate-50'}`}
                              aria-current={isActive(item.href) ? 'page' : undefined}
                            >
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

                  <div id={`section-${section.key}`} className={`${openSections[section.key] ? 'block' : 'hidden'} mt-2 transition-all duration-200`}> 
                    <ul className="space-y-1">
                      {section.items.map((item, j) => (
                        <li key={item.href}>
                          <Link href={item.href}>
                            <a
                              ref={(el) => {
                                submenuRefs.current = submenuRefs.current || {}
                                submenuRefs.current[section.key] = submenuRefs.current[section.key] || []
                                submenuRefs.current[section.key][j] = el
                              }}
                              className={`block px-3 py-2 rounded ${isActive(item.href) ? 'bg-slate-100 font-semibold' : 'hover:bg-slate-50'}`}
                              aria-current={isActive(item.href) ? 'page' : undefined}
                            >
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
