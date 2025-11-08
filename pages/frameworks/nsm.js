import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Nsm() {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
          <header className="mb-6">
            <h1 className="text-3xl font-extrabold">North Star Metric (NSM) – Guiding Long-Term Focus</h1>
            <p className="mt-2 text-slate-600">Purpose: To align the team around one core metric that reflects value creation.</p>
          </header>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">What It Is</h2>
            <p className="mt-2 text-slate-700">A North Star Metric is the single most important measure of your product’s long-term success — the metric that captures how well you’re delivering value to users.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">When To Use It</h2>
            <ul className="mt-3 list-inside list-disc text-slate-700 space-y-2">
              <li>During strategic planning and OKR alignment</li>
              <li>When teams lose clarity about success</li>
              <li>To prevent focusing only on vanity metrics</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">How It Works</h2>
            <p className="mt-3 text-slate-700">Choose a metric that reflects value delivered, not just activity.</p>

            <div className="mt-4 overflow-auto rounded border">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="px-4 py-2 text-left">Company</th>
                    <th className="px-4 py-2 text-left">North Star Metric</th>
                    <th className="px-4 py-2 text-left">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-t">
                    <td className="px-4 py-3">Spotify</td>
                    <td className="px-4 py-3">Time spent listening</td>
                    <td className="px-4 py-3">Indicates user engagement and satisfaction</td>
                  </tr>
                  <tr className="bg-slate-50 border-t">
                    <td className="px-4 py-3">Airbnb</td>
                    <td className="px-4 py-3">Nights booked</td>
                    <td className="px-4 py-3">Reflects both host and guest value</td>
                  </tr>
                  <tr className="bg-white border-t">
                    <td className="px-4 py-3">Slack</td>
                    <td className="px-4 py-3">Messages sent in teams</td>
                    <td className="px-4 py-3">Shows active collaboration and adoption</td>
                  </tr>
                  <tr className="bg-slate-50 border-t">
                    <td className="px-4 py-3">Notion</td>
                    <td className="px-4 py-3">Active docs created</td>
                    <td className="px-4 py-3">Represents real product utility</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Example: SaaS Startup</h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <div>
                A task management tool tracks “tasks completed per active user per week” as its North Star Metric — ensuring the product drives productivity, not just sign-ups.
              </div>
            </div>
          </section>

          <footer className="mt-8 border-t pt-4 flex items-center justify-between">
            <div className="text-sm text-slate-600">🧭 Your North Star keeps teams aligned to user value — not vanity growth.</div>
            <div className="flex items-center gap-3">
              <Link href="/frameworks"><a className="text-sky-600 hover:underline">Back to Frameworks</a></Link>
            </div>
          </footer>
        </div>
      </section>
    </Layout>
  )
}
