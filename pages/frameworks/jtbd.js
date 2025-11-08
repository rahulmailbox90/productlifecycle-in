import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Jtbd() {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
          <header className="mb-6">
            <h1 className="text-3xl font-extrabold">Jobs To Be Done (JTBD) Framework – Customer Motivation</h1>
            <p className="mt-2 text-slate-600">Purpose: To understand why users “hire” your product.</p>
          </header>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">What It Is</h2>
            <p className="mt-2 text-slate-700">JTBD focuses on the underlying motivation of a user, not demographics or superficial behavior. Users “hire” products to get jobs done in their lives — your goal is to discover what those jobs are.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">When To Use It</h2>
            <ul className="mt-3 list-inside list-disc text-slate-700 space-y-2">
              <li>During product discovery or research</li>
              <li>When users churn or features underperform</li>
              <li>For positioning and messaging</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">How It Works</h2>
            <p className="mt-3 text-slate-700">Ask: <em>“What job is the user hiring our product to do?”</em></p>
            <p className="mt-2 text-slate-700">Then structure your understanding as:</p>
            <pre className="mt-3 bg-slate-50 p-4 rounded text-sm text-slate-700">When [situation], I want to [motivation], so I can [expected outcome].</pre>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Example: Uber</h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <div>
                <strong>When:</strong> I need to get to a meeting fast.
              </div>
              <div>
                <strong>I want to:</strong> Avoid waiting for a taxi or finding parking.
              </div>
              <div>
                <strong>So I can:</strong> Arrive on time without stress.
              </div>
            </div>
          </section>

          <footer className="mt-8 border-t pt-4 flex items-center justify-between">
            <div className="text-sm text-slate-600">🧠 JTBD helps PMs design around purpose — not personas.</div>
            <div className="flex items-center gap-3">
              <Link href="/frameworks"><a className="text-sky-600 hover:underline">Back to Frameworks</a></Link>
            </div>
          </footer>
        </div>
      </section>
    </Layout>
  )
}
