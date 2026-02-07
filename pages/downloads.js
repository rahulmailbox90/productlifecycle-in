import Layout from '../components/Layout'
import Link from 'next/link'

export default function Downloads() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-4">Downloads & Resources</h1>
        <p className="text-lg text-slate-700 mb-12">Downloadable templates, guides, and reference materials for product managers</p>

        {/* Templates Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">📋 PM Templates & Artefacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="text-lg font-semibold mb-2">Product Requirements Document (PRD)</h3>
              <p className="text-sm text-slate-600 mb-4">Template for comprehensive product requirement documentation with fintech considerations</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Download (Word)</button>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-lg font-semibold mb-2">Product Roadmap Template</h3>
              <p className="text-sm text-slate-600 mb-4">12-month rolling roadmap with quarters, initiatives, and delivery phases</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Download (Excel)</button>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Workflow & Flow Diagrams</h3>
              <p className="text-sm text-slate-600 mb-4">Editable templates for transaction flows, data flows, and user workflows in fintech</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Download (Visio/PowerPoint)</button>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-lg font-semibold mb-2">UAT Checklist & Test Cases</h3>
              <p className="text-sm text-slate-600 mb-4">User Acceptance Testing templates with fintech-specific scenarios</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Download (Excel)</button>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2">OKR Planning Template</h3>
              <p className="text-sm text-slate-600 mb-4">Objectives & Key Results framework for quarterly product planning</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Download (Word)</button>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold mb-2">Metrics & KPI Dashboard</h3>
              <p className="text-sm text-slate-600 mb-4">Tracking template for product health metrics and success indicators</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Download (Excel)</button>
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">📚 Guides & Handbooks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-lg font-semibold mb-2">PM Jargon Handbook</h3>
              <p className="text-sm text-slate-600 mb-4">Complete reference of 200+ product management terms with fintech context</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">Download (PDF)</button>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-lg font-semibold mb-2">Fintech PM Quick Start Guide</h3>
              <p className="text-sm text-slate-600 mb-4">Getting started in fintech PM with essential concepts and first 30 days checklist</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">Download (PDF)</button>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-semibold mb-2">Lifecycle Stages Reference</h3>
              <p className="text-sm text-slate-600 mb-4">One-page summary of PM responsibilities at each lifecycle stage</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">Download (PDF)</button>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">Framework Comparison Guide</h3>
              <p className="text-sm text-slate-600 mb-4">When to use RICE vs MoSCoW vs Kano with decision tree</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">Download (PDF)</button>
            </div>
          </div>
        </section>

        {/* Access Online Versions */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">🌐 Access Online Versions</h2>
          <p className="text-slate-700 mb-6">All content is also available online for quick reference:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/learn/jargons">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-blue-600">Jargons Glossary</div>
                <p className="text-sm text-slate-600 mt-2">Interactive, searchable, with favorites</p>
              </a>
            </Link>
            <Link href="/resources/templates">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-blue-600">All Templates</div>
                <p className="text-sm text-slate-600 mt-2">Complete templates library</p>
              </a>
            </Link>
            <Link href="/frameworks">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-blue-600">Frameworks</div>
                <p className="text-sm text-slate-600 mt-2">Interactive framework explorations</p>
              </a>
            </Link>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-slate-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">❓ Need Help?</h2>
          <p className="text-slate-700 mb-6">
            If you have questions about using these templates or would like customized versions for your organization, please get in touch.
          </p>
          <Link href="/contact">
            <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Contact Us</a>
          </Link>
        </section>
      </div>
    </Layout>
  )
}
