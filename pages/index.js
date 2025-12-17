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
      {/* HERO Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Understand Product Management Across the Full Product Lifecycle</h1>
            <p className="mt-4 text-lg text-slate-700">Practical product management guidance with a deep focus on Fintech products — from back-office systems to consumer-facing platforms.</p>
            <p className="mt-3 text-slate-600">Learn how real products are ideated, designed, built, launched, and scaled — and what product managers actually deliver at every stage.</p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 items-center">
              <Link href="/learn/foundations"><a className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition">Start with Product Management Foundations</a></Link>
              <Link href="/learn"><a className="inline-block border border-slate-300 text-slate-900 px-5 py-3 rounded-lg hover:bg-slate-50 transition">Explore Fintech Product Lifecycles</a></Link>
            </div>
          </div>
        </div>
      </section>

      {/* What this site covers */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">What You Will Learn Here</h2>
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto">ProductLifecycle.in is a structured learning hub for understanding how products are managed end-to-end, with real-world emphasis on Fintech products and enterprise platforms.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Product Management Fundamentals</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1 text-left">
                <li>PM role and responsibilities</li>
                <li>Core concepts, terminology, and mindset</li>
                <li>Difference between PM, BA, PO, Engineering, UX</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Product Lifecycle & Frameworks</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1 text-left">
                <li>Idea discovery to delivery and growth</li>
                <li>Prioritization frameworks (RICE, MoSCoW, Kano)</li>
                <li>Roadmapping, backlog management, releases</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Fintech Product Types</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1 text-left">
                <li>Back-office & operational platforms</li>
                <li>Consumer-facing applications</li>
                <li>Portfolio & investment management tools</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">PM Deliverables & Artefacts</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1 text-left">
                <li>PRDs, user stories, roadmaps</li>
                <li>Workflow diagrams & data flows</li>
                <li>Compliance, reporting & operational artefacts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fintech product types */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Fintech Products Are Not All the Same</h2>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">Product management varies significantly based on the type of product being built. This site explicitly addresses those differences.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm text-left">
              <div className="text-2xl">🏦</div>
              <div className="font-semibold mt-3">Back-Office / Operational Systems</div>
              <div className="mt-2 text-sm text-slate-600">Used by internal teams (operations, risk, finance). Heavy focus on workflows, data accuracy, controls and compliance.</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm text-left">
              <div className="text-2xl">📱</div>
              <div className="font-semibold mt-3">Consumer-Facing Applications</div>
              <div className="mt-2 text-sm text-slate-600">Used by retail or institutional customers. UX, onboarding, performance, and reliability matter; metrics-driven growth focus.</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm text-left">
              <div className="text-2xl">📈</div>
              <div className="font-semibold mt-3">Portfolio / Investment Management Platforms</div>
              <div className="mt-2 text-sm text-slate-600">Used by portfolio managers and analysts. Complex calculations, reporting, and decision-support tools require data integrity.</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm text-left">
              <div className="text-2xl">�️</div>
              <div className="font-semibold mt-3">Reference Data & Market Data Platforms</div>
              <div className="mt-2 text-sm text-slate-600">Foundational systems used across products. Data quality, lineage, and governance are critical; low visibility but high impact.</div>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/learn/">
              <a className="inline-block px-5 py-3 bg-slate-900 text-white rounded-lg">See Lifecycle & Deliverables for Each Product Type</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Product lifecycle view */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Product Management Across the Entire Lifecycle</h2>
          <p className="mt-3 text-slate-700">Each stage includes clear PM responsibilities and concrete deliverables, not just theory.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">1. Problem Discovery & Idea Validation</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>Business problem definition</li>
                <li>Stakeholder alignment</li>
                <li>Initial scope and success metrics</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">2. Requirements & Design</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>PRDs, user journeys, workflows</li>
                <li>Data models and integration points</li>
                <li>Compliance and risk considerations</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">3. Development & Delivery</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>Sprint planning and backlog refinement</li>
                <li>Trade-offs between scope, time, quality</li>
                <li>Coordination with engineering and QA</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">4. Launch & Adoption</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>Release planning</li>
                <li>Training, documentation, rollout strategy</li>
                <li>Monitoring early adoption and issues</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">5. Measurement & Iteration</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>KPIs and operational metrics</li>
                <li>Feedback loops</li>
                <li>Enhancements and optimisation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PM Deliverables */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">What Product Managers Actually Deliver</h2>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">Beyond frameworks, PMs are judged by the quality of artefacts and decisions they produce.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Strategy & Discovery</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>Problem statements</li>
                <li>Business cases</li>
                <li>Stakeholder maps</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Execution & Delivery</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>Product requirement documents (PRDs)</li>
                <li>User stories and acceptance criteria</li>
                <li>Roadmaps and release plans</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Fintech-Specific Artefacts</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>Workflow and transaction flow diagrams</li>
                <li>Data definitions and schemas</li>
                <li>Compliance and reconciliation logic</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/resources/templates"><a className="inline-block px-5 py-3 bg-slate-900 text-white rounded-lg">Browse Templates & Examples</a></Link>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Who Will Benefit Most</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Aspiring Product Managers</div>
              <div className="mt-2 text-sm text-slate-600">Build strong fundamentals and understand real-world PM expectations.</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Working Product Managers</div>
              <div className="mt-2 text-sm text-slate-600">Sharpen execution and fintech-specific product nuances.</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Engineers, Analysts & Designers</div>
              <div className="mt-2 text-sm text-slate-600">Understand PM thinking and workflows to collaborate better.</div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Founders & Business Stakeholders</div>
              <div className="mt-2 text-sm text-slate-600">Gain clarity on product lifecycle and trade-offs.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning path */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Not Sure Where to Start?</h2>
          <p className="mt-3 text-slate-700">Suggested Learning Path</p>
          <div className="mt-6 max-w-3xl mx-auto text-left">
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Start with Product Management Foundations</li>
              <li>Move to Frameworks & Prioritization</li>
              <li>Explore Fintech Product Types</li>
              <li>Study Lifecycle Stages & Deliverables</li>
              <li>Apply learning through Case Studies & Templates</li>
            </ol>

            <div className="mt-6">
              <Link href="/learn/foundations"><a className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg">Go to “Start Here”</a></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Stay Updated</h2>
          <p className="mt-3 text-slate-700">New case studies, lifecycle breakdowns, and PM artefacts are added regularly.</p>
          <div className="mt-6">
            <Link href="/subscribe"><a className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg">Subscribe for Updates</a></Link>
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

      {/* Footer additions: keep original footer in Layout but provide additional sitemap links here for visibility */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-sm text-slate-700">
          <div>
            <div className="font-semibold">Site</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/about"><a className="hover:underline">About the Site / Vision</a></Link></li>
              <li><Link href="/sitemap"><a className="hover:underline">Content Map / Sitemap</a></Link></li>
              <li><Link href="/learn"><a className="hover:underline">Fintech Product Lifecycle</a></Link></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Resources</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/resources/templates"><a className="hover:underline">Templates & Resources</a></Link></li>
              <li><Link href="/downloads"><a className="hover:underline">Downloads</a></Link></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Learn</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/learn/foundations"><a className="hover:underline">Foundations</a></Link></li>
              <li><Link href="/frameworks"><a className="hover:underline">Frameworks</a></Link></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/contact"><a className="hover:underline">Contact / Feedback</a></Link></li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
