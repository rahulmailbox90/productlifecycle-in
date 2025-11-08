import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Proact() {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
          <header className="mb-6">
            <h1 className="text-3xl font-extrabold">PROACT Framework – Decision-Making Clarity</h1>
            <p className="mt-2 text-slate-600">Purpose: To make rational, unbiased product decisions.</p>
          </header>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">What It Is</h2>
            <p className="mt-2 text-slate-700"><strong>PROACT</strong> stands for <strong>Problem, Objectives, Alternatives, Consequences, Trade-offs</strong>. It helps product managers make structured choices when multiple paths exist.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">When To Use It</h2>
            <ul className="mt-3 list-inside list-disc text-slate-700 space-y-2">
              <li>Deciding between building vs. buying a feature</li>
              <li>Prioritizing roadmap items</li>
              <li>Evaluating new market opportunities</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">How It Works</h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <div>
                <h3 className="font-semibold">Problem</h3>
                <p>Define the real issue to solve.</p>
              </div>

              <div>
                <h3 className="font-semibold">Objectives</h3>
                <p>Clarify what success looks like.</p>
              </div>

              <div>
                <h3 className="font-semibold">Alternatives</h3>
                <p>Identify possible options.</p>
              </div>

              <div>
                <h3 className="font-semibold">Consequences</h3>
                <p>List potential outcomes for each alternative.</p>
              </div>

              <div>
                <h3 className="font-semibold">Trade-offs</h3>
                <p>Evaluate what you gain or lose with each choice.</p>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Example: Fintech Product Integration</h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <div>
                <strong>Problem:</strong> Should we build our own payment gateway or integrate Stripe?
              </div>
              <div>
                <strong>Objectives:</strong> Faster go-live, reliability, and scalability.
              </div>
              <div>
                <strong>Alternatives:</strong> Build in-house / Partner with Stripe / Hybrid solution.
              </div>
              <div>
                <strong>Consequences:</strong> In-house = control but longer time; Stripe = speed but fees.
              </div>
              <div>
                <strong>Trade-offs:</strong> Choose Stripe to launch early, revisit in-house build after scale.
              </div>
            </div>
          </section>

          <footer className="mt-8 border-t pt-4 flex items-center justify-between">
            <div className="text-sm text-slate-600">🎯 PROACT prevents emotional decision-making — it drives logic-backed prioritization.</div>
            <div className="flex items-center gap-3">
              <Link href="/frameworks"><a className="text-sky-600 hover:underline">Back to Frameworks</a></Link>
            </div>
          </footer>
        </div>
      </section>
    </Layout>
  )
}
