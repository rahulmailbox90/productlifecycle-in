import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Learn() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Learning Hub</h1>
      <p className="text-slate-600">Guides, templates and exercises for product managers.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </div>
    </Layout>
  )
}
