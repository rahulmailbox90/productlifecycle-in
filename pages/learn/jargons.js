import { useEffect, useMemo, useState } from 'react'
import Layout from '../../components/layout/Layout'
import jargonsData from '../../data/jargons.json'

const CATEGORIES = [
  { key: 'All', label: 'All', icon: '📚' },
  { key: 'Strategy', label: 'Strategy & Vision', icon: '🎯' },
  { key: 'Discovery', label: 'Discovery & Research', icon: '🔍' },
  { key: 'Roadmapping', label: 'Roadmapping', icon: '🧩' },
  { key: 'Design', label: 'Design & Dev', icon: '🖌️' },
  { key: 'Launch', label: 'Launch & Growth', icon: '🚀' },
  { key: 'Metrics', label: 'Metrics & Analytics', icon: '📊' },
  { key: 'Collaboration', label: 'Collaboration', icon: '🤝' },
  { key: 'Lifecycle', label: 'Lifecycle', icon: '🔄' },
]

// Attempt to infer a category from term text when data lacks explicit categories
function inferCategory(term) {
  const t = term.toLowerCase()
  if (/(mvp|prototype|g[o0]t|go to market|gtm|launch)/.test(t)) return 'Launch'
  if (/(kpi|nps|dau|retention|churn|metrics|analytics)/.test(t)) return 'Metrics'
  if (/(roadmap|backlog|prioritiz|moscow|rice)/.test(t)) return 'Roadmapping'
  if (/(research|discovery|user research|interview|persona)/.test(t)) return 'Discovery'
  if (/(design|ux|ui|prototype)/.test(t)) return 'Design'
  if (/(agile|scrum|sprint|kanban|product owner)/.test(t)) return 'Collaboration'
  return 'Strategy'
}

export default function Jargons() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('az')
  const [favorites, setFavorites] = useState({})

  // enriched data with category
  const jargons = useMemo(() => {
    return jargonsData.map((item) => ({
      ...item,
      category: item.category || inferCategory(item.term),
      short: item.definition ? item.definition.split('.').slice(0, 1).join('.') : '',
    }))
  }, [])

  const filtered = useMemo(() => {
    let list = jargons.filter((j) => {
      const matchesQuery = query.trim() === '' || j.term.toLowerCase().includes(query.toLowerCase()) || (j.definition || '').toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || j.category === category
      return matchesQuery && matchesCategory
    })

    if (sort === 'az') list = list.sort((a, b) => a.term.localeCompare(b.term))
    if (sort === 'recent') list = list.reverse()
    return list
  }, [jargons, query, category, sort])

  useEffect(() => {
    // hydrate favorites from localStorage
    try {
      const raw = localStorage.getItem('jargon:fav')
      if (raw) setFavorites(JSON.parse(raw))
    } catch (e) {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('jargon:fav', JSON.stringify(favorites))
    } catch (e) {}
  }, [favorites])

  function toggleFav(term) {
    setFavorites((s) => ({ ...s, [term]: !s[term] }))
  }

  // group by category for the grid/accordion
  const grouped = useMemo(() => {
    const map = {}
    filtered.forEach((j) => {
      map[j.category] = map[j.category] || []
      map[j.category].push(j)
    })
    return map
  }, [filtered])

  // commonly confused pairs (static)
  const confused = [
    { a: 'MVP', b: 'Prototype', diff: 'MVP is released to real users; Prototype is a pre-launch mock.' },
    { a: 'KPI', b: 'OKR', diff: 'KPI = metric; OKR = goal + key results framework.' },
    { a: 'Roadmap', b: 'Backlog', diff: 'Roadmap = strategic plan; Backlog = execution list.' },
  ]

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-16 pb-12 px-8 bg-gradient-to-b from-slate-50 to-sky-50" style={{ minHeight: '60vh' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Product Management Jargons — Explained Simply</h1>
            <p className="mt-4 text-lg text-slate-700">Decode every product term, from MVP to PMF — with real-world context and use cases.</p>

            <div className="mt-6">
              <label htmlFor="search" className="sr-only">Search a jargon</label>
              <div className="flex items-center gap-3 max-w-md">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">🔍</span>
                  <input id="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a jargon..." className="pl-10 pr-4 py-3 w-full rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300" />
                </div>
                <button onClick={() => setQuery('')} className="px-4 py-3 bg-white border border-slate-200 rounded-lg">Clear</button>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-full max-w-sm mx-auto bg-white rounded-lg p-6 shadow">
              <div className="text-center text-4xl">📘</div>
              <div className="mt-4 text-slate-700">Quick reference for product terms, grouped by category. Use the search above to find specific terms instantly.</div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY TOOLBAR */}
      <div className="sticky top-16 z-30 bg-transparent">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-white rounded-lg shadow-sm px-4 py-3 flex gap-3 items-center">
            <div className="flex-1">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="🔍 Search a term..." className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300" />
            </div>

            <div className="flex items-center gap-3">
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 bg-white">
                {CATEGORIES.map((c) => <option key={c.key} value={c.key}>{c.icon} {c.label}</option>)}
              </select>

              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 bg-white">
                <option value="az">A–Z</option>
                <option value="recent">Recently Added</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-10 grid lg:grid-cols-4 gap-8">
        {/* Main content */}
        <main className="lg:col-span-3">
          {/* Categories and Jargons (accordion) */}
          {Object.keys(grouped).length === 0 && (
            <div className="p-6 bg-white rounded-lg shadow text-center">No terms found for your search.</div>
          )}

          {Object.entries(grouped).map(([cat, items]) => (
            <section key={cat} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{(CATEGORIES.find(c=>c.key===cat)||{}).icon || '🔹'}</div>
                <h3 className="text-xl font-semibold">{cat} <span className="text-sm text-slate-500">({items.length})</span></h3>
                <button title="Info" className="ml-2 text-slate-400">ℹ️</button>
              </div>

              <div className="space-y-3">
                {items.map((j) => (
                  <details key={j.term} className="group bg-white rounded-lg p-4 border border-slate-100 shadow-sm hover:shadow-md">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <div>
                        <div className="text-lg font-semibold">{j.term} {favorites[j.term] ? '⭐' : ''}</div>
                        <div className="text-sm text-slate-600 mt-1">{j.short}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={(e)=>{ e.preventDefault(); e.stopPropagation(); toggleFav(j.term) }} className="text-sm text-slate-500 hover:text-yellow-500">{favorites[j.term] ? 'Unfav' : 'Fav'}</button>
                        <span className="text-slate-400">▾</span>
                      </div>
                    </summary>

                    <div className="mt-3 text-slate-700">
                      {j.definition}
                      {j.scenario && <div className="mt-2 italic text-sm text-slate-600">{j.scenario}</div>}

                      {j.related && (
                        <div className="mt-3">
                          <div className="text-sm font-semibold">Related:</div>
                          <div className="flex gap-2 mt-2 flex-wrap">
                            {j.related.map(r=> <button key={r} className="text-xs px-2 py-1 bg-slate-100 rounded">{r}</button>)}
                          </div>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}

          {/* Usage scenarios highlight block */}
          <section className="mt-12 bg-sky-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">How Jargons Come Alive in Real PM Scenarios</h3>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <div className="font-semibold">During Sprint Planning</div>
                <div className="mt-2 text-sm text-slate-600">MVP, Tech Debt, Dependencies — used to prioritize and sequence work.</div>
              </div>

              <div className="p-4 bg-white rounded shadow-sm">
                <div className="font-semibold">In Go-To-Market Meetings</div>
                <div className="mt-2 text-sm text-slate-600">GTM, Churn, Adoption — used to align launch and growth plans.</div>
              </div>

              <div className="p-4 bg-white rounded shadow-sm">
                <div className="font-semibold">When Analyzing Performance</div>
                <div className="mt-2 text-sm text-slate-600">DAU, NPS, Retention — used to measure impact and health.</div>
              </div>
            </div>
          </section>

          {/* Commonly confused terms */}
          <section className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Commonly Confused Terms</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {confused.map(c => (
                <div key={c.a} className="p-4 bg-gray-50 rounded shadow-sm">
                  <div className="font-semibold">{c.a} <span className="text-slate-500">vs</span> {c.b}</div>
                  <div className="mt-2 text-sm text-slate-600">{c.diff}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick reference & downloads */}
          <section className="mt-12 text-center">
            <h3 className="text-xl font-semibold">Download or Explore All Jargons</h3>
            <div className="mt-4 flex justify-center gap-4">
              <a href="/downloads/Product-Jargon-Handbook.pdf" className="px-5 py-3 bg-slate-900 text-white rounded-lg">📥 Download Handbook (PDF)</a>
              <a href="/learn/jargons?view=alpha" className="px-5 py-3 border border-slate-200 rounded-lg">🗂️ View Alphabetical Index</a>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Quick Navigation</div>
              <div className="mt-3 text-sm text-slate-600 space-y-2">
                {Object.keys(grouped).map(k => <a key={k} href={`#${k}`} className="block hover:underline">{k}</a>)}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Related Learning Paths</div>
              <div className="mt-3 text-sm text-slate-600">
                <a href="/frameworks" className="block hover:underline">Frameworks (RICE, MoSCoW)</a>
                <a href="/learn/foundations" className="block hover:underline">Foundations</a>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Did you know?</div>
              <div className="mt-2 text-sm text-slate-600">MVP originally came from Eric Ries' Lean Startup — it emphasizes learning over launching full features.</div>
            </div>
          </div>
        </aside>
      </div>

      {/* CTA */}
      <section className="py-12 bg-teal-600 mt-8">
        <div className="max-w-6xl mx-auto px-8 text-center text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold">Now that you speak Product — time to build it.</h2>
          <p className="mt-3 text-teal-100">Explore frameworks, problem-solving techniques, and case studies.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/frameworks" className="px-6 py-3 bg-white text-teal-600 rounded-xl font-medium">Explore Frameworks →</a>
            <a href="/case-studies" className="px-6 py-3 border border-white text-white rounded-xl">View Case Studies →</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
 
