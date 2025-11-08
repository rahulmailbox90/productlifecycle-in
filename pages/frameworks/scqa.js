import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Scqa() {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
          <header className="mb-6">
            <h1 className="text-3xl font-extrabold">1️⃣ SCQA Framework – Structured Communication</h1>
            <p className="mt-2 text-slate-600">Purpose: To communicate complex ideas clearly and persuasively.</p>
          </header>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">What It Is</h2>
            <p className="mt-2 text-slate-700">SCQA stands for <strong>Situation, Complication, Question, Answer</strong>. It’s a storytelling and problem-framing method that helps product managers present ideas logically and persuasively.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">When To Use It</h2>
            <ul className="mt-3 list-inside list-disc text-slate-700 space-y-2">
              <li>Writing product updates or emails to leadership</li>
              <li>Structuring PRDs or presentations</li>
              <li>Explaining a product pivot</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">How It Works</h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <div>
                <h3 className="font-semibold">Situation</h3>
                <p>What’s happening now? Set the current context concisely.</p>
              </div>

              <div>
                <h3 className="font-semibold">Complication</h3>
                <p>What challenge or conflict exists that changes the status quo?</p>
              </div>

              <div>
                <h3 className="font-semibold">Question</h3>
                <p>What decision, uncertainty, or choice arises from the complication?</p>
              </div>

              <div>
                <h3 className="font-semibold">Answer</h3>
                <p>What’s the proposed solution or recommendation? Be direct and action-oriented.</p>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Example: Slack Feature Update</h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <div>
                <strong>Situation:</strong> Teams love using Slack but find managing notifications overwhelming.
              </div>
              <div>
                <strong>Complication:</strong> Too many irrelevant alerts reduce engagement.
              </div>
              <div>
                <strong>Question:</strong> How can we make notifications smarter?
              </div>
              <div>
                <strong>Answer:</strong> Introduce an AI-based “Smart Notifications” feature that filters messages by importance and user context.
              </div>
            </div>
          </section>

          <footer className="mt-8 border-t pt-4 flex items-center justify-between">
            <div className="text-sm text-slate-600">🧩 Use SCQA to tell clear, concise product stories — it’s your go-to narrative tool.</div>
            <div className="flex items-center gap-3">
              <Link href="/frameworks"><a className="text-sky-600 hover:underline">Back to Frameworks</a></Link>
            </div>
          </footer>
        </div>
      </section>
    </Layout>
  )
}
