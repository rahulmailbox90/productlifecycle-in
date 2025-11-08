import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Aarr() {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-sm">
          <header className="mb-6">
            <h1 className="text-3xl font-extrabold">AARRR Framework – Growth Metrics (Pirate Metrics)</h1>
            <p className="mt-2 text-slate-600">Purpose: To track and optimize product performance and growth.</p>
          </header>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">What It Is</h2>
            <p className="mt-2 text-slate-700">AARRR represents <strong>Acquisition, Activation, Retention, Revenue, Referral</strong> — the five key stages of a user’s journey.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">When To Use It</h2>
            <ul className="mt-3 list-inside list-disc text-slate-700 space-y-2">
              <li>Growth analysis and performance tracking</li>
              <li>Building data dashboards</li>
              <li>Prioritizing experiments</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">How It Works</h2>
            <div className="mt-3 overflow-auto rounded border">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="px-4 py-2 text-left">Stage</th>
                    <th className="px-4 py-2 text-left">What It Means</th>
                    <th className="px-4 py-2 text-left">Example Metric</th>
                    <th className="px-4 py-2 text-left">Example Company / Channel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-t">
                    <td className="px-4 py-3">Acquisition</td>
                    <td className="px-4 py-3">How users find you</td>
                    <td className="px-4 py-3">Website visits, sign-ups</td>
                    <td className="px-4 py-3">SEO, Ads</td>
                  </tr>
                  <tr className="bg-slate-50 border-t">
                    <td className="px-4 py-3">Activation</td>
                    <td className="px-4 py-3">First success moment</td>
                    <td className="px-4 py-3">Profile created, first transaction</td>
                    <td className="px-4 py-3">Onboarding completion</td>
                  </tr>
                  <tr className="bg-white border-t">
                    <td className="px-4 py-3">Retention</td>
                    <td className="px-4 py-3">Repeat usage</td>
                    <td className="px-4 py-3">DAU, churn rate</td>
                    <td className="px-4 py-3">Weekly active users</td>
                  </tr>
                  <tr className="bg-slate-50 border-t">
                    <td className="px-4 py-3">Revenue</td>
                    <td className="px-4 py-3">Monetization</td>
                    <td className="px-4 py-3">Paid conversions, ARPU</td>
                    <td className="px-4 py-3">Subscription renewals</td>
                  </tr>
                  <tr className="bg-white border-t">
                    <td className="px-4 py-3">Referral</td>
                    <td className="px-4 py-3">Word-of-mouth</td>
                    <td className="px-4 py-3">Invites sent, referral rate</td>
                    <td className="px-4 py-3">Referral program, NPS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Example: Duolingo</h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <div>
                <strong>Acquisition:</strong> Ads drive users to download.
              </div>
              <div>
                <strong>Activation:</strong> Completing the first lesson.
              </div>
              <div>
                <strong>Retention:</strong> Daily streaks keep users returning.
              </div>
              <div>
                <strong>Revenue:</strong> Users upgrade to “Duolingo Plus.”
              </div>
              <div>
                <strong>Referral:</strong> Friends invited for XP rewards.
              </div>
            </div>
          </section>

          <footer className="mt-8 border-t pt-4 flex items-center justify-between">
            <div className="text-sm text-slate-600">📈 AARRR helps PMs spot where their product truly wins or leaks value.</div>
            <div className="flex items-center gap-3">
              <Link href="/frameworks"><a className="text-sky-600 hover:underline">Back to Frameworks</a></Link>
            </div>
          </footer>
        </div>
      </section>
    </Layout>
  )
}
