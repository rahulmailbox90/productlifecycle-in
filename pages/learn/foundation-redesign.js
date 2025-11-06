import Layout from '../../components/Layout'
import Link from 'next/link'

export default function FoundationRedesign() {
  return (
    <Layout>
      <section className="w-full bg-gradient-to-r from-white via-slate-50 to-white p-8 rounded-lg shadow-sm">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-slate-900">🔧 Foundations — Redesign Preview</h1>
            <p className="mt-4 text-lg text-slate-700">This is a preview of the redesigned Foundations page. It contains updated layout, visuals, and accessibility improvements for the mobile menu.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/learn/foundations"><a className="px-4 py-2 border rounded text-slate-700">Open current Foundations</a></Link>
              <Link href="/learn"><a className="px-4 py-2 bg-blue-600 text-white rounded">Back to Learn Overview</a></Link>
            </div>
          </div>

          <div className="flex-1 hidden md:block">
            <div className="h-48 bg-gradient-to-br from-blue-50 to-white border rounded-lg flex items-center justify-center text-blue-700">
              <div className="text-center">
                <div className="text-2xl font-bold">Project → Product → Value</div>
                <div className="mt-2 text-sm">Timeline illustration (SVG/Lottie recommended)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="evolution" className="container mx-auto mt-10 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <h2 className="text-2xl font-semibold">🏗️ The Evolution — From Project Delivery to Value Creation</h2>
          <p className="mt-3 text-slate-700">Product Management has grown from task delivery to strategic leadership. Early PMs focused on project deadlines. Modern PMs focus on creating measurable user and business value.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 border rounded-lg bg-white">
              <div className="text-2xl">📋</div>
              <h4 className="font-semibold mt-2">Project Era</h4>
              <p className="text-sm text-slate-600">Delivery — Coordinator — On-time delivery</p>
            </div>
            <div className="p-4 border rounded-lg bg-white">
              <div className="text-2xl">🎯</div>
              <h4 className="font-semibold mt-2">Outcome Era</h4>
              <p className="text-sm text-slate-600">Problem-solving — Decision-maker — User engagement</p>
            </div>
            <div className="p-4 border rounded-lg bg-white">
              <div className="text-2xl">💎</div>
              <h4 className="font-semibold mt-2">Value Era</h4>
              <p className="text-sm text-slate-600">Business impact — Strategic partner — ROI & growth</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-slate-50 border-l-4 border-blue-600 rounded">
            <strong>💡 Modern PMs aren’t feature factories — they’re value creators.</strong>
          </div>
        </div>

        <div>
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="font-semibold">Evolution Timeline</h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">1</div>
                <div>
                  <div className="font-semibold">Project Coordination</div>
                  <div className="text-sm text-slate-600">Deliver features on schedule</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-200 rounded flex items-center justify-center">2</div>
                <div>
                  <div className="font-semibold">Outcome Ownership</div>
                  <div className="text-sm text-slate-600">Focus on user impact</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-300 rounded flex items-center justify-center">3</div>
                <div>
                  <div className="font-semibold">Value Creation</div>
                  <div className="text-sm text-slate-600">Drive measurable business growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold">🔁 The Product Lifecycle: From Idea to Impact</h2>
        <p className="mt-2 text-slate-700">Every great product moves through five key stages — each building on the other.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-3">
          {[
            { key: 'discovery', title: 'Discovery', desc: 'Identify unmet needs, research, validate.', tools: 'Interviews, Analytics, Surveys' },
            { key: 'definition', title: 'Definition', desc: 'Frame the solution, define KPIs.', tools: 'PRD, RICE, MoSCoW' },
            { key: 'development', title: 'Development', desc: 'Build with design & engineering.', tools: 'Jira, Notion, Figma' },
            { key: 'delivery', title: 'Delivery', desc: 'Launch and gather feedback.', tools: 'A/B Testing, Amplitude' },
            { key: 'growth', title: 'Growth', desc: 'Scale retention and revenue.', tools: 'AARRR, PLG Loops' }
          ].map((s) => (
            <details key={s.key} className="group border rounded-lg p-4 bg-white">
              <summary className="cursor-pointer font-semibold">{s.title}</summary>
              <div className="mt-2 text-sm text-slate-600">
                <p>{s.desc}</p>
                <p className="mt-2"><strong>Tools:</strong> {s.tools}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-4 p-3 bg-slate-50 border-l-4 border-green-600">📊 <strong>Pro Tip:</strong> Every lifecycle stage has feedback loops — discovery never truly ends.</div>
      </section>

      <section className="container mx-auto mt-10 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold">🧠 The PM Mindset — Leading Without Authority</h2>
          <p className="mt-2 text-slate-700">Great Product Managers balance empathy, analytics, and influence.</p>

          <div className="mt-4 grid grid-cols-1 gap-3">
            {[
              { icon: '🎯', title: 'Strategy', desc: 'Define vision and roadmap', example: 'Launch 3 features aligned to Q2 OKRs' },
              { icon: '🧩', title: 'Discovery', desc: 'Validate user problems', example: 'Interview 10 users about workflow pain points' },
              { icon: '⚙️', title: 'Execution', desc: 'Manage sprints and delivery', example: 'Clarify scope and remove blockers' },
              { icon: '📊', title: 'Analytics', desc: 'Measure and track KPIs', example: 'Track DAU and retention post-launch' },
              { icon: '🤝', title: 'Stakeholders', desc: 'Align cross-functional teams', example: 'Facilitate weekly stand-ups' }
            ].map((r) => (
              <div key={r.title} className="p-4 border rounded-lg bg-white flex gap-4 items-start">
                <div className="text-2xl">{r.icon}</div>
                <div>
                  <div className="font-semibold">{r.title}</div>
                  <div className="text-sm text-slate-600">{r.desc}</div>
                  <div className="text-xs text-slate-500 mt-1">Example: {r.example}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Mindset Cards</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              { icon: '❤️', title: 'Empathy', desc: 'Start with understanding users deeply.' },
              { icon: '🧮', title: 'Analytical', desc: 'Use data to validate intuition.' },
              { icon: '💡', title: 'Curiosity', desc: 'Ask “why” until root cause is clear.' },
              { icon: '🔄', title: 'Adaptability', desc: 'Learn and pivot fast.' },
              { icon: '🤲', title: 'Collaboration', desc: 'Influence through clarity and respect.' }
            ].map((m) => (
              <div key={m.title} className="p-4 border rounded-lg bg-white">
                <div className="text-2xl">{m.icon}</div>
                <div className="font-semibold mt-2">{m.title}</div>
                <div className="text-sm text-slate-600">{m.desc}</div>
              </div>
            ))}
          </div>

          <blockquote className="mt-4 p-4 bg-slate-50 border-l-4 border-blue-600 italic">“Fall in love with the problem, not the solution.”</blockquote>
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold">🤝 How Product Managers Collaborate Across Teams</h2>
        <div className="mt-4 grid md:grid-cols-4 gap-4">
          {[
            { team: 'Design', role: 'Define user flows, review prototypes', tools: 'Figma, Miro', icon: '🎨' },
            { team: 'Engineering', role: 'Prioritize backlog, clarify scope', tools: 'Jira, Notion', icon: '💻' },
            { team: 'Marketing', role: 'Plan GTM and messaging', tools: 'GA, HubSpot', icon: '📣' },
            { team: 'Business', role: 'Align with OKRs and ROI', tools: 'Power BI, Excel', icon: '💼' }
          ].map((c) => (
            <div key={c.team} className="p-4 border rounded-lg bg-white">
              <div className="text-2xl">{c.icon}</div>
              <div className="font-semibold mt-2">{c.team}</div>
              <div className="text-sm text-slate-600 mt-1">{c.role}</div>
              <div className="text-xs text-slate-500 mt-2">Tools: {c.tools}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-slate-50 border-l-4 border-slate-300">Example (In Practice): Launching a new feature — Discovery → Design → Estimate → Marketing → Leadership approval</div>
      </section>

      <section className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold">💼 Case Study: Swiggy’s “Delivery Promise”</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4 items-start">
          <div className="p-4 border rounded-lg bg-white">
            <p>Swiggy PMs noticed delays during peak hours. After analyzing delivery partner data and user feedback, they introduced a “Delivery Promise” feature.</p>
            <ul className="list-disc list-inside mt-3 text-slate-700">
              <li>Reduced cancellations by 12%</li>
              <li>Increased retention by 8%</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg bg-white">
            <div className="text-sm text-slate-600">Before / After timeline (visual)</div>
            <div className="mt-4 h-28 bg-gradient-to-r from-yellow-50 to-white rounded flex items-center justify-center text-yellow-700">KPI visualization</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-12 text-center py-8 bg-gradient-to-r from-white to-blue-50 rounded-lg">
        <h3 className="text-2xl font-semibold">You now understand how Product Management works at its core — from evolution to collaboration.</h3>
        <p className="mt-3 text-slate-700">Ready to move ahead and learn the language of Product Managers?</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/learn/jargons"><a className="px-6 py-3 bg-blue-600 text-white rounded">Next → Jargons & PM Terms</a></Link>
          <Link href="/learn"><a className="px-6 py-3 border rounded text-slate-700">Back to Learn Overview</a></Link>
        </div>
      </section>
    </Layout>
  )
}
