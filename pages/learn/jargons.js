import Layout from '../../components/layout/Layout'
import jargons from '../../data/jargons.json'

export default function Jargons() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Glossary — Jargons</h1>
        <p className="text-slate-600 mb-6">Short definitions of common product and agile terms.</p>

        <dl className="space-y-6">
          {jargons.map((item) => (
            <div key={item.term} className="bg-white p-4 rounded shadow-sm">
              <dt className="font-semibold text-lg">{item.term}</dt>
              <dd className="mt-2 text-gray-700">{item.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Layout>
  )
}
 
