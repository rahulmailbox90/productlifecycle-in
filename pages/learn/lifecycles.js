import { useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import LessonNavigation from '../../components/LessonNavigation'

export default function Lifecycles() {
  const [expandedCategory, setExpandedCategory] = useState('BackOffice')

  const categories = [
    {
      id: 'BackOffice',
      icon: '⚙️',
      name: 'Back-Office / Operational Systems',
      focus: 'Accuracy & Control',
      description: 'Internal platforms for ops, finance, risk, and compliance teams.',
      examples: 'Transaction processing, reconciliation systems, settlement platforms',
      stages: [
        { num: 1, title: 'Operational Problem Identification', desc: 'Identify inefficiencies, errors, or regulatory gaps in existing processes. PM validates root causes and failure modes.' },
        { num: 2, title: 'Process Mapping & Control Definition', desc: 'Document as-is/to-be workflows, define control points, approvals, and exception handling scenarios.' },
        { num: 3, title: 'Data & Integration Design', desc: 'Define data sources, validation rules, and integration touchpoints with upstream/downstream systems.' },
        { num: 4, title: 'Build & Controlled Delivery', desc: 'Incremental delivery with feature flags. Extensive UAT with ops teams and parallel runs to verify outputs.' },
        { num: 5, title: 'Parallel Run & Stabilisation', desc: 'Run new system alongside legacy system. Compare outputs and ensure accuracy before full cutover.' },
        { num: 6, title: 'Operational Optimisation', desc: 'Post-stabilization focus on performance improvements, automation, reporting, and cost reduction.' }
      ],
      deliverables: ['Workflow & process diagrams', 'Exception handling definitions', 'Control & audit artefacts', 'UAT and sign-off documentation']
    },
    {
      id: 'Consumer',
      icon: '📱',
      name: 'Consumer-Facing Fintech Applications',
      focus: 'UX & Trust',
      description: 'Applications directly used by customers to transact, invest, pay, or manage finances.',
      examples: 'Trading apps, wallets, payment apps, investment portals',
      stages: [
        { num: 1, title: 'User Problem Discovery', desc: 'User research, competitive analysis, and problem validation. Focus on customer pain points and market gaps.' },
        { num: 2, title: 'Value Proposition & Experience Design', desc: 'Define onboarding flows, transaction journeys, and trust-building elements like transparency and confirmations.' },
        { num: 3, title: 'Compliance & Risk Alignment', desc: 'Embed compliance requirements (KYC, AML, disclosures) before development, not after.' },
        { num: 4, title: 'Build, Test & Iterate', desc: 'Rapid iteration with performance and security validation. Focus on reliability at scale and monitoring hooks.' },
        { num: 5, title: 'Launch & Growth', desc: 'Coordinated marketing, staged rollouts, feature flags, and immediate support for trust-sensitive issues.' },
        { num: 6, title: 'Retention & Continuous Improvement', desc: 'Focus on reducing churn, improving experience, and introducing enhancements based on feedback and data.' }
      ],
      deliverables: ['User journeys & UX flows', 'Product Requirement Documents (PRDs)', 'KPI and growth dashboards', 'Release and rollout plans']
    },
    {
      id: 'Portfolio',
      icon: '📊',
      name: 'Portfolio / Investment Management Platforms',
      focus: 'Decision Support',
      description: 'Analytics-heavy tools used by portfolio managers, analysts, and advisors.',
      examples: 'Portfolio management systems, analytics dashboards, performance reporting tools',
      stages: [
        { num: 1, title: 'Decision Workflow Identification', desc: 'Study how portfolio managers make decisions, what information they rely on, and where inefficiencies exist.' },
        { num: 2, title: 'Analytical & Reporting Requirements', desc: 'Define detailed requirements for calculations, benchmarks, analytics, and reports. Deep collaboration with domain experts.' },
        { num: 3, title: 'Data Accuracy & Validation Design', desc: 'Define calculation logic, data validation rules, and reconciliation mechanisms to ensure correctness.' },
        { num: 4, title: 'Build & Analytical Testing', desc: 'Extensive testing of formulas, scenarios, edge cases, and historical data comparisons. Correctness over speed.' },
        { num: 5, title: 'User Acceptance & Training', desc: 'Train users on how to use the system and how to interpret outputs correctly.' },
        { num: 6, title: 'Enhancement & Scalability', desc: 'Platform evolves to support new asset classes, strategies, analytics, and higher data volumes.' }
      ],
      deliverables: ['Calculation and analytics specifications', 'Reporting definitions', 'Data validation and reconciliation logic', 'Training material']
    },
    {
      id: 'ReferenceData',
      icon: '🗄️',
      name: 'Reference Data / Market Data Platforms',
      focus: 'Data Quality',
      description: 'Foundational data platforms supplying instrument, pricing, and corporate action data.',
      examples: 'Instrument master, pricing data platforms, corporate actions systems',
      stages: [
        { num: 1, title: 'Data Domain Definition', desc: 'Define what data is required, how it is structured, and who consumes it across the organization.' },
        { num: 2, title: 'Source Identification & Ingestion Strategy', desc: 'Define data sources, ingestion methods, update frequency, and fallback strategies.' },
        { num: 3, title: 'Data Model & Quality Rules', desc: 'Define data models and validation rules to establish a "golden source" of truth.' },
        { num: 4, title: 'Integration & Distribution', desc: 'Distribute data to downstream systems through APIs, feeds, or files. Ensure integration reliability.' },
        { num: 5, title: 'Data Governance & Monitoring', desc: 'Ensure data quality, lineage, issue resolution, and compliance with regulatory expectations.' },
        { num: 6, title: 'Expansion & Maintenance', desc: 'Platform evolves to support new instruments, markets, and regulatory changes.' }
      ],
      deliverables: ['Data dictionaries and definitions', 'Quality rules and dashboards', 'Integration specifications', 'Governance documentation']
    }
  ]

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Breadcrumb items={[
          { label: 'Learn', href: '/learn' },
          { label: 'Product Lifecycle', href: null }
        ]} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">Fintech Product Lifecycle</h1>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">Fintech products don't follow a single lifecycle. A consumer trading app, a back-office reconciliation system, and a reference data platform evolve in fundamentally different ways.</p>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">This page shows you the lifecycle patterns for each fintech product type — what PMs focus on at each stage and what deliverables to expect.</p>
        </header>

        {/* 4 Product Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Fintech Product Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map(cat => (
              <div key={cat.id} className="p-6 bg-white rounded-lg border border-slate-100 hover:shadow-md transition cursor-pointer" onClick={() => setExpandedCategory(cat.id)}>
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h3 className="text-lg font-semibold">{cat.name}</h3>
                <div className="mt-2 text-sm text-slate-600">
                  <p><strong>Focus:</strong> {cat.focus}</p>
                  <p className="mt-1">{cat.description}</p>
                  <p className="mt-2 text-xs text-slate-500"><strong>Examples:</strong> {cat.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6-Stage Lifecycle by Category */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Lifecycle Stages</h2>
          <p className="text-slate-600 mb-6">Each product type follows a distinct 6-stage lifecycle. Click a category above or select below:</p>

          <div className="space-y-3 mb-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setExpandedCategory(cat.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition ${
                  expandedCategory === cat.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <div className="font-semibold">{cat.name}</div>
                    <div className="text-xs text-slate-600">Primary focus: <strong>{cat.focus}</strong></div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Expanded Lifecycle Stages */}
          {categories.map(cat => (
            expandedCategory === cat.id && (
              <div key={cat.id} className="mb-12">
                <div className="grid gap-4">
                  {cat.stages.map((stage, idx) => (
                    <div key={idx} className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-slate-200">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold text-sm">{stage.num}</div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{stage.title}</h4>
                          <p className="mt-2 text-slate-700">{stage.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Deliverables for selected category */}
                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Key PM Deliverables</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {cat.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-slate-700">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          ))}
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-slate-100">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="p-3 font-semibold">Aspect</th>
                  <th className="p-3 font-semibold">Back-Office</th>
                  <th className="p-3 font-semibold">Consumer App</th>
                  <th className="p-3 font-semibold">Portfolio Tools</th>
                  <th className="p-3 font-semibold">Reference Data</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-3 font-semibold">Primary Focus</td>
                  <td className="p-3">Accuracy & control</td>
                  <td className="p-3">UX & trust</td>
                  <td className="p-3">Decision support</td>
                  <td className="p-3">Data quality</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50">
                  <td className="p-3 font-semibold">Key Risk</td>
                  <td className="p-3">Operational errors</td>
                  <td className="p-3">Customer trust loss</td>
                  <td className="p-3">Incorrect analytics</td>
                  <td className="p-3">Data propagation</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-3 font-semibold">PM Strength Needed</td>
                  <td className="p-3">Process clarity</td>
                  <td className="p-3">User empathy</td>
                  <td className="p-3">Analytical depth</td>
                  <td className="p-3">Data governance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12 p-6 bg-amber-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">How to Use This Page</h2>
          <div className="space-y-3 text-slate-700">
            <p>🔹 Working on <strong>internal operations</strong>? Focus on the Back-Office lifecycle.</p>
            <p>🔹 Building <strong>customer-facing products</strong>? Study the Consumer App lifecycle.</p>
            <p>🔹 Supporting <strong>investment decisions</strong>? The Portfolio Platform lifecycle applies.</p>
            <p>🔹 Managing <strong>shared data</strong>? The Reference Data lifecycle is most relevant.</p>
          </div>
        </section>

        {/* Key Insight */}
        <section className="mb-12 p-6 bg-indigo-50 rounded-lg border border-indigo-200">
          <h2 className="text-lg font-semibold text-indigo-900">Key Insight</h2>
          <p className="mt-3 text-indigo-800">Effective fintech PMs don't force a single lifecycle onto every product. They adapt their approach based on product type, data complexity, regulatory exposure, and user needs. This page is designed to help you do exactly that.</p>
        </section>

        {/* Related Content */}
        <section className="mt-12 mb-8 bg-purple-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Related Learning Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/learn/foundations">
              <a className="p-4 bg-white rounded border hover:shadow transition cursor-pointer">
                <div className="font-semibold text-purple-600">PM Foundations</div>
                <p className="text-sm text-slate-600 mt-1">Core concepts and PM mindset</p>
              </a>
            </Link>
            <Link href="/learn/jargons">
              <a className="p-4 bg-white rounded border hover:shadow transition cursor-pointer">
                <div className="font-semibold text-purple-600">Jargons & Terms</div>
                <p className="text-sm text-slate-600 mt-1">Terminology used across lifecycle stages</p>
              </a>
            </Link>
            <Link href="/frameworks">
              <a className="p-4 bg-white rounded border hover:shadow transition cursor-pointer">
                <div className="font-semibold text-purple-600">Frameworks</div>
                <p className="text-sm text-slate-600 mt-1">Decision-making at each stage</p>
              </a>
            </Link>
          </div>
        </section>

        <LessonNavigation 
          previousLesson={{ label: 'Product Foundations', href: '/learn/foundations' }}
          nextLesson={{ label: 'Jargons & PM Terms', href: '/learn/jargons' }}
        />
      </div>
    </Layout>
  )
}
