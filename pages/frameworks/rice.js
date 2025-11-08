import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Rice() {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
          <header className="mb-6">
            <h1 className="text-3xl font-extrabold">RICE Framework – Prioritization at Scale</h1>
            <p className="mt-2 text-slate-600">Purpose: To prioritize features or initiatives systematically.</p>
          </header>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">What It Is</h2>
            <p className="mt-2 text-slate-700"><strong>RICE</strong> = Reach × Impact × Confidence ÷ Effort. It helps PMs rank ideas based on potential ROI versus cost.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">When To Use It</h2>
            <ul className="mt-3 list-inside list-disc text-slate-700 space-y-2">
              <li>Prioritizing roadmap items</li>
              <li>Aligning teams on what to build next</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">How It Works</h2>
            <p className="mt-3 text-slate-700">Each idea is scored on:</p>
            <ul className="mt-2 list-inside list-disc text-slate-700 space-y-2">
              <li><strong>Reach:</strong> How many users it will affect</li>
              <li><strong>Impact:</strong> How strongly it affects user experience</li>
              <li><strong>Confidence:</strong> How certain we are about assumptions</li>
              <li><strong>Effort:</strong> Time/resources required (in person-months)</li>
            </ul>

            <p className="mt-3 text-slate-700">Then calculate:</p>
            <pre className="mt-2 bg-slate-50 p-4 rounded text-sm">RICE Score = (Reach × Impact × Confidence) ÷ Effort</pre>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Example: E-commerce App</h2>
            <div className="mt-3 overflow-auto rounded border">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="px-4 py-2 text-left">Feature</th>
                    <th className="px-4 py-2 text-left">Reach</th>
                    <th className="px-4 py-2 text-left">Impact</th>
                    <th className="px-4 py-2 text-left">Confidence</th>
                    <th className="px-4 py-2 text-left">Effort</th>
                    <th className="px-4 py-2 text-left">RICE Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-t">
                    <td className="px-4 py-3">Add coupon reminder</td>
                    <td className="px-4 py-3">8000</td>
                    <td className="px-4 py-3">3</td>
                    <td className="px-4 py-3">0.8</td>
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">9600</td>
                  </tr>
                  <tr className="bg-slate-50 border-t">
                    <td className="px-4 py-3">Add voice search</td>
                    <td className="px-4 py-3">2000</td>
                    <td className="px-4 py-3">4</td>
                    <td className="px-4 py-3">0.6</td>
                    <td className="px-4 py-3">3</td>
                    <td className="px-4 py-3">1600</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-slate-700">Result → Coupon reminder scores higher — build it first.</div>
          </section>

          <footer className="mt-8 border-t pt-4 flex items-center justify-between">
            <div className="text-sm text-slate-600">⚙️ RICE brings data-driven objectivity to prioritization.</div>
            <div className="flex items-center gap-3">
              <Link href="/frameworks"><a className="text-sky-600 hover:underline">Back to Frameworks</a></Link>
            </div>
          </footer>
        </div>
      </section>
    </Layout>
  )
}
