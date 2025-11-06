import Layout from '../../components/Layout'
import Link from 'next/link'

const GRID = [
  {
    key: 'scqa',
    title: 'SCQA',
    icon: '💬',
    color: ['#3A7BD5', '#00D2FF'],
    purpose: 'Communicate complex ideas clearly and persuasively.',
    what: 'Situation → Complication → Question → Answer',
    when: 'Presentations, updates, PRDs',
    example: 'Slack used it to frame product messaging to reduce noise.'
  },
  {
    key: 'proact',
    title: 'PROACT',
    icon: '⚖️',
    color: ['#00C9A7', '#92FE9D'],
    purpose: 'Decision-focused analysis for trade-offs and consequences.',
    what: 'Problem → Objectives → Alternatives → Consequences → Trade-offs',
    when: 'Strategy workshops, prioritization meetings',
    example: 'Used to evaluate alternative monetization models.'
  },
  {
    key: 'jtbd',
    title: 'JTBD',
    icon: '🎯',
    color: ['#FF9966', '#FF5E62'],
    purpose: 'Understand the job users hire a product to do.',
    what: 'Jobs To Be Done — focus on user outcomes',
    when: 'Discovery, research',
    example: 'Identified key jobs for streaming users.'
  },
  {
    key: 'aarr',
    title: 'AARRR',
    icon: '🏴‍☠️',
    color: ['#A770EF', '#FDB99B'],
    purpose: 'Measure growth funnel: Acquisition → Activation → Retention → Revenue → Referral',
    what: 'Funnel-based growth metrics',
    when: 'Growth experiments, analytics',
    example: 'Used to optimize onboarding funnels.'
  },
  {
    key: 'nsm',
    title: 'North Star Metric',
    icon: '🌟',
    color: ['#F7971E', '#FFD200'],
    purpose: 'Single metric that best captures product success.',
    what: 'One guiding metric for team focus',
    when: 'Strategy & KPIs',
    example: 'Viewing hours per active user/week for streaming products.'
  },
  {
    key: 'rice',
    title: 'RICE',
    icon: '📊',
    color: ['#00B09B', '#96C93D'],
    purpose: 'Prioritize initiatives using Reach × Impact × Confidence / Effort',
    what: 'Scoring model for prioritization',
    when: 'Roadmap prioritization',
    example: 'Score top feature ideas to pick highest impact work.'
  }
]

export default function Frameworks() {
  return (
    <Layout>
      {/* HERO */}
      <section className="w-full py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto text-center px-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-3xl">🧩</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading">Master the Frameworks</h1>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700">Learn the mental models and tools product managers use to frame problems, align teams, and make high-quality decisions.</p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="#framework-grid"><a className="px-6 py-3 bg-blue-600 text-white rounded-md">Start Learning Frameworks</a></Link>
            <Link href="/learn/skills"><a className="px-6 py-3 border border-slate-300 rounded-md text-slate-700">Next → Product Skills</a></Link>
          </div>

          <div className="mt-8 opacity-40">
            {/* decorative background illustration placeholder */}
            <div className="h-40 w-full max-w-3xl mx-auto bg-[url('/images/frameworks-bg.svg')] bg-center bg-no-repeat bg-contain" aria-hidden="true"></div>
          </div>
        </div>
        <hr className="mt-12 border-t-2 border-gradient-to-r from-blue-100 to-transparent opacity-40" />
      </section>

      {/* WHAT ARE FRAMEWORKS */}
      <section className="container mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-3"><span className="text-2xl">🧠</span> What Are Product Management Frameworks?</h2>
            <div className="mt-3">
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-green-600">✅</span><span>Clarify complex problems</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-600">⚙️</span><span>Align cross-functional teams</span></li>
                <li className="flex items-start gap-3"><span className="text-yellow-600">💬</span><span>Communicate decisions clearly</span></li>
                <li className="flex items-start gap-3"><span className="text-purple-600">🚀</span><span>Move faster with structure</span></li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-300">
              <strong>💡 Frameworks simplify chaos — they don’t limit innovation.</strong>
            </div>

            <div className="mt-6 text-sm text-slate-600"> <hr className="my-4 dashed" /> <div className="text-xs">Core Frameworks ↓</div></div>
          </div>

          <div className="flex justify-center">
            {/* Illustration / Lottie placeholder */}
            <div className="w-full max-w-md h-64 bg-gradient-to-br from-white to-blue-50 rounded-lg border flex items-center justify-center">
              <div className="text-center text-slate-600">Illustration / Lottie — PM thinking / flowchart</div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORK GRID */}
      <section id="framework-grid" className="container mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-6">🧠 Key Frameworks Every PM Should Know</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {GRID.map((c) => (
            <article key={c.key} className="relative bg-white rounded-2xl shadow-sm overflow-hidden" style={{minHeight: '220px'}}>
              <div className="h-3" style={{background: `linear-gradient(90deg, ${c.color[0]}, ${c.color[1]})`}} />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{background: `${c.color[0]}22`}}>{c.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{c.title}</h3>
                    <div className="mt-2 text-sm text-slate-600"><strong>Purpose:</strong> {c.purpose}</div>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-slate-600"><strong>What it is</strong></div>
                    <div className="mt-1 text-sm">{c.what}</div>
                    <div className="mt-2 text-xs text-slate-500"><strong>When:</strong> {c.when}</div>
                  </div>
                  <div>
                    <div className="bg-green-50 border-l-4 border-green-200 p-3 rounded">
                      <div className="text-sm text-green-700 font-medium">Example</div>
                      <div className="mt-1 text-sm italic text-slate-700">{c.example}</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMBINATION TABLE */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4">📊 When and How to Use Frameworks Together</h2>
        <div className="overflow-auto border rounded-lg">
          <table className="min-w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Product Stage</th>
                <th className="px-4 py-3 text-left">Recommended Frameworks</th>
                <th className="px-4 py-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-3">🔍 Discovery</td>
                <td className="px-4 py-3">JTBD, SCQA</td>
                <td className="px-4 py-3">Understand and communicate the problem</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3">📘 Definition</td>
                <td className="px-4 py-3">PROACT, RICE</td>
                <td className="px-4 py-3">Choose right solution and prioritize</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3">⚙️ Development</td>
                <td className="px-4 py-3">NSM, AARRR</td>
                <td className="px-4 py-3">Measure success and scale growth</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 bg-slate-50 rounded border-l-4 border-slate-300">📌 <strong>Pro Tip:</strong> Don’t use frameworks mechanically — adapt them to your context.</div>
      </section>

      {/* CASE STUDY */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4">💼 Case Study: Netflix in Action</h2>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
                <div className="p-4 bg-red-50 rounded">1️⃣<br/><span className="block font-semibold">Discovery (JTBD)</span><div className="text-sm text-slate-600">Identify job users hire Netflix for.</div></div>
                <div className="p-4 bg-red-50 rounded">2️⃣<br/><span className="block font-semibold">Definition (PROACT)</span><div className="text-sm text-slate-600">Choose personalization as focus.</div></div>
                <div className="p-4 bg-red-50 rounded">3️⃣<br/><span className="block font-semibold">Execution (RICE)</span><div className="text-sm text-slate-600">Prioritize high impact features.</div></div>
                <div className="p-4 bg-red-50 rounded">4️⃣<br/><span className="block font-semibold">Tracking (AARRR)</span><div className="text-sm text-slate-600">Monitor retention metrics.</div></div>
                <div className="p-4 bg-red-50 rounded">5️⃣<br/><span className="block font-semibold">Strategy (NSM)</span><div className="text-sm text-slate-600">Optimize viewing hours/user.</div></div>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="p-4 bg-slate-50 rounded">
                <div className="font-semibold">Mini KPIs</div>
                <div className="mt-2 text-sm text-slate-600">+14% retention · +10% activation</div>
                <div className="mt-4 text-sm">💡 Frameworks are powerful in combination — Netflix uses several at once to align strategy and execution.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-2xl font-semibold">You now understand the structured thinking that drives great product decisions.</h3>
          <p className="mt-3 max-w-2xl mx-auto">Ready to turn frameworks into action?</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/learn/skills"><a className="px-6 py-3 bg-white text-blue-600 rounded-md">Next → Product Skills & Tools</a></Link>
            <Link href="/learn/foundations"><a className="px-6 py-3 border border-white rounded-md">Back → Foundation Page</a></Link>
          </div>
        </div>
      </section>

    </Layout>
  )
}
