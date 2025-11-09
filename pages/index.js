import Link from 'next/link'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { products } from '../lib/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Master the Art and Science of Product Management</h1>
            <p className="mt-4 text-lg text-slate-700">Learn the frameworks, skills, and structured thinking product people use to solve real problems and ship outcomes.</p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <Link href="/learn"><a className="inline-block bg-slate-900 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg transition">Start Learning</a></Link>
              <Link href="/frameworks"><a className="inline-block border border-slate-300 text-slate-900 px-5 py-3 rounded-lg hover:bg-slate-50 transition">Explore Frameworks</a></Link>
            </div>

            <div className="mt-3 text-sm text-slate-600">Free, Practical, and Example-Driven.</div>
          </div>

          <div className={`mx-auto w-full max-w-md transform transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <img src="/images/frameworks-bg.svg" alt="Product manager workflow illustration" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* ABOUT PLATFORM */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-2xl font-semibold flex items-center justify-center gap-3"><span className="text-2xl">🧭</span> Your Companion in the Product Management Journey</h2>
          <p className="mt-4 text-slate-700">productlifecycle.in is built to teach product management with clarity and context — not just theory. We focus on frameworks, skills, and real-world examples you can apply immediately.</p>
          <p className="mt-3 text-slate-700">Follow structured learning paths, practice with templates, and read case studies that show how decisions are made in the wild.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <div className="text-2xl">🧩</div>
              <div className="font-semibold mt-2">Frameworks Simplified</div>
              <div className="text-sm text-slate-600 mt-1">Clear templates to frame problems and solutions.</div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <div className="text-2xl">⚙️</div>
              <div className="font-semibold mt-2">Skill Development</div>
              <div className="text-sm text-slate-600 mt-1">Hands-on practices for discovery, prioritization and delivery.</div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <div className="text-2xl">🧠</div>
              <div className="font-semibold mt-2">Real-world Application</div>
              <div className="text-sm text-slate-600 mt-1">Case studies and decision walk-throughs.</div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <div className="text-2xl">💬</div>
              <div className="font-semibold mt-2">Learn by Context</div>
              <div className="text-sm text-slate-600 mt-1">Templates and examples tied to real product stages.</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">What You’ll Learn</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-2xl">📚</div>
              <h3 className="mt-3 font-semibold">Foundations of PM</h3>
              <p className="mt-2 text-slate-700 text-sm">Understand the mindset and core responsibilities of product managers.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-2xl">⚙️</div>
              <h3 className="mt-3 font-semibold">Frameworks & Methods</h3>
              <p className="mt-2 text-slate-700 text-sm">Explore structured problem-solving and prioritization frameworks.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-2xl">💬</div>
              <h3 className="mt-3 font-semibold">PM Skills Toolkit</h3>
              <p className="mt-2 text-slate-700 text-sm">Develop communication, data, and stakeholder management skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT'S STRUCTURED */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold">A Practical Learning Experience, Not Just Theory</h2>
            <div className="w-24 h-1 bg-sky-300 mt-2 mb-4" />
            <ul className="list-inside list-disc text-slate-700 space-y-2">
              <li>Bite-sized lessons you can finish in a single sitting</li>
              <li>Real examples and case studies</li>
              <li>Actionable templates you can copy and reuse</li>
            </ul>

            <div className="mt-6 p-4 bg-white rounded border">
              <div className="font-semibold">Case study</div>
              <div className="mt-2 text-sm text-slate-700">See how Zomato scaled its product discovery loop.</div>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/images/foundations-timeline.svg" alt="Foundations timeline" className="w-full max-w-md rounded" />
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Whether You’re Starting Out or Leveling Up</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <div className="text-3xl">🎓</div>
              <div className="font-semibold mt-2">Aspiring PMs</div>
              <div className="text-sm text-slate-700 mt-1">Learn the foundations to land your first PM role.</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <div className="text-3xl">🧭</div>
              <div className="font-semibold mt-2">Working PMs</div>
              <div className="text-sm text-slate-700 mt-1">Deepen your strategic and decision-making abilities.</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
              <div className="text-3xl">🚀</div>
              <div className="font-semibold mt-2">Founders & Builders</div>
              <div className="text-sm text-slate-700 mt-1">Apply PM thinking to shape product outcomes.</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center px-6 bg-gradient-to-r from-slate-900 to-sky-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-semibold">Because Product Management Is Best Learned in Context</h2>
          <p className="mt-4 text-slate-100">Great Product Managers don’t just manage products — they shape outcomes.</p>
          <blockquote className="mt-6 italic font-serif text-lg">“Great Product Managers don’t just manage products — they shape outcomes.”</blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 text-center bg-teal-600 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white">Start Your Product Journey Today</h2>
          <p className="mt-3 text-teal-100">Explore the world of Product Management — from foundations to frameworks.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/learn"><a className="px-6 py-3 bg-white text-teal-600 rounded-xl font-medium hover:scale-105 transform transition">Explore Learning Tracks</a></Link>
            <Link href="/subscribe"><a className="px-6 py-3 border border-white text-white rounded-xl hover:scale-105 transform transition">Subscribe for Case Studies</a></Link>
          </div>
        </div>
      </section>

      {/* Featured case studies (kept) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Featured case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </Layout>
  )
}
