import Layout from '../../components/Layout'
import FrameworkCard from '../../components/FrameworkCard'
import { useEffect, useState } from 'react'

const frameworks = [
  {
    slug: 'scqa',
    title: 'SCQA',
    group: 'Structured Thinking',
    desc: 'Situation → Complication → Question → Answer — concise narrative for problem framing.'
  },
  {
    slug: 'proact',
    title: 'PROACT',
    group: 'Structured Thinking',
    desc: 'Problem → Objectives → Alternatives → Consequences → Trade-offs — decision-focused analysis.'
  },
  {
    slug: 'mece',
    title: 'MECE',
    group: 'Structured Thinking',
    desc: 'Mutually Exclusive, Collectively Exhaustive — a way to structure options without overlap.'
  },
  {
    slug: '5-whys',
    title: '5 Whys',
    group: 'Structured Thinking',
    desc: 'Root-cause analysis by iteratively asking why a problem occurs.'
  },
  {
    slug: 'fishbone',
    title: 'Fishbone (Ishikawa)',
    group: 'Structured Thinking',
    desc: 'Cause-and-effect diagram to map potential drivers of a problem.'
  },
  {
    slug: 'first-principles',
    title: 'First Principles Thinking',
    group: 'Structured Thinking',
    desc: 'Break problems down to fundamental truths and reason up from there.'
  },
  {
    slug: 'rice',
    title: 'RICE',
    group: 'Prioritization',
    desc: 'Reach × Impact × Confidence / Effort — scoring model to prioritize initiatives.',
    example: 'Example RICE score:\nReach: 1000 users, Impact: 3 (medium), Confidence: 0.8, Effort: 5 person-weeks\nScore = (1000 * 3 * 0.8) / 5 = 480'
  },
  {
    slug: 'moscow',
    title: 'MoSCoW',
    group: 'Prioritization',
    desc: 'Must / Should / Could / Won’t — simple prioritization to align stakeholders.'
  },
  {
    slug: 'kano',
    title: 'Kano Model',
    group: 'Prioritization',
    desc: 'Categorize features into Basic, Performance and Delight to guide investments.'
  },
  {
    slug: 'ice',
    title: 'ICE',
    group: 'Prioritization',
    desc: 'Impact × Confidence × Ease — a quick heuristic for prioritization.'
  },
  {
    slug: 'tradeoffs',
    title: 'Trade-offs & Decision Tools',
    group: 'Decision',
    desc: 'Product trade-offs, cost–benefit matrices and risk analysis for evaluating options.'
  }
]

export default function Frameworks() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const sections = Array.from(document.querySelectorAll('[id]'))
      .filter((el) => el.id && el.id !== 'undefined')
      .map((el) => ({ id: el.id, top: el.getBoundingClientRect().top }))

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 })

    document.querySelectorAll('[id]').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <Layout>
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Frameworks</h1>
        <p className="text-slate-600 mb-6">Common frameworks used in product management for structured thinking, prioritization and decision-making.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar TOC - sticky on medium+ screens */}
          <aside className="md:col-span-1">
            <div className="mb-4 md:sticky md:top-24 md:self-start">
              <h2 className="font-semibold">Quick links</h2>
              <ul className="mt-3 space-y-2">
                {frameworks.map((f) => (
                  <li key={`toc-${f.slug}`}>
                    <a href={`#${f.slug}`} className={`block text-sky-600 hover:underline ${active === f.slug ? 'font-bold underline decoration-sky-300' : ''}`}>{f.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content - cards */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {frameworks.map((f) => (
                <div id={f.slug} key={f.slug}>
                  <FrameworkCard slug={f.slug} title={f.title} example={f.example}>
                    {f.desc}
                  </FrameworkCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
