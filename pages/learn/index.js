import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Learn() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Overview</h1>

      <p className="text-lg text-slate-700 mb-4">Master the craft of Product Management — from fundamentals to growth.
      This learning space is built for curious minds who want to understand how great products are imagined, built, and scaled.</p>

      <p className="text-slate-600 mb-4">Here, you’ll explore every stage of the product management lifecycle — from discovering user problems to launching products that drive business impact.</p>

      <h2 className="text-xl font-semibold mt-4">What You’ll Learn:</h2>
      <ul className="list-disc list-inside mt-2 text-slate-700 space-y-1">
        <li>Core product management concepts and terminology.</li>
        <li>Problem-solving frameworks used by top PMs.</li>
        <li>Key skills required to manage products end-to-end.</li>
        <li>Strategic and growth thinking with real industry case studies.</li>
      </ul>

      <p className="text-slate-600 mt-4">Every concept you learn here is mapped to how real companies — from startups to global enterprises — operate.</p>

      <p className="mt-4 text-slate-700">💡 Start your journey by building strong foundations, then move step-by-step into frameworks, strategy, and growth.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Jargons Glossary</h3>
          <p className="text-sm mt-2">Quick definitions of product and agile terms.</p>
          <Link href="/learn/jargons">
            <a className="inline-block mt-2 px-3 py-1 bg-slate-100 rounded text-blue-700 hover:underline">View Jargons</a>
          </Link>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Templates</h3>
          <p className="text-sm mt-2">BRD / FSD / UAT templates you can copy.</p>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Simulations</h3>
          <p className="text-sm mt-2">Practice exercises (scope decisions, prioritization).</p>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Interview prep</h3>
          <p className="text-sm mt-2">Case-style questions derived from demos.</p>
          </div>
      {/* Product Management Section removed - moved to Home page */}

      </div>
    </Layout>
  )
}
