import { useEffect, useMemo, useState } from 'react'
import Layout from '../../components/layout/Layout'
import jargonsData from '../../data/jargons.json'

const CATEGORIES = [
  { key: 'All', label: 'All', icon: '📚' },
  { key: 'Strategy', label: 'Strategy & Vision', icon: '🎯' },
  { key: 'Discovery', label: 'Discovery & Research', icon: '🔍' },
  { key: 'Roadmapping', label: 'Roadmapping', icon: '🧩' },
  { key: 'Design', label: 'Design & Dev', icon: '🖌️' },
  { key: 'Launch', label: 'Launch & Growth', icon: '🚀' },
  { key: 'Metrics', label: 'Metrics & Analytics', icon: '📊' },
  { key: 'Collaboration', label: 'Collaboration', icon: '🤝' },
  { key: 'Lifecycle', label: 'Lifecycle', icon: '🔄' },
]

// Attempt to infer a category from term text when data lacks explicit categories
function inferCategory(term) {
  const t = term.toLowerCase()
  if (/(mvp|prototype|g[o0]t|go to market|gtm|launch)/.test(t)) return 'Launch'
  if (/(kpi|nps|dau|retention|churn|metrics|analytics)/.test(t)) return 'Metrics'
  if (/(roadmap|backlog|prioritiz|moscow|rice)/.test(t)) return 'Roadmapping'
  if (/(research|discovery|user research|interview|persona)/.test(t)) return 'Discovery'
  if (/(design|ux|ui|prototype)/.test(t)) return 'Design'
  if (/(agile|scrum|sprint|kanban|product owner)/.test(t)) return 'Collaboration'
  return 'Strategy'
}

export default function Jargons() {
  // ordered sections to render
  const order = ['Strategy','Discovery','Roadmapping','Design','Launch','Metrics','Collaboration','Lifecycle']

  // favorites persisted to localStorage
  const [favorites, setFavorites] = useState({})
  useEffect(()=>{
    try{
      const s = localStorage.getItem('jargon-favs')
      if (s) setFavorites(JSON.parse(s))
    }catch(e){/* ignore */}
  }, [])
  const toggleFav = (term) => {
    setFavorites(prev => {
      const next = { ...prev }
      if (next[term]) delete next[term]
      else next[term] = true
      try{ localStorage.setItem('jargon-favs', JSON.stringify(next)) }catch(e){}
      return next
    })
  }

  // grouped data derived from data/jargons.json
  const grouped = (()=>{
    const g = {};
    (jargonsData || []).forEach(j => {
      const cat = j.category || inferCategory(j.term || '')
      if (!g[cat]) g[cat] = []
      g[cat].push(j)
    })
    return g
  })()

  // debug logs during SSR/build to help trace prerender issues
  try{
    // eslint-disable-next-line no-console
    console.log('DEBUG: jargons grouped keys ->', Object.keys(grouped))
    // eslint-disable-next-line no-console
    console.log('DEBUG: order ->', order)
  }catch(e){}

  const confused = [
    { a: 'Retention', b: 'Churn', diff: 'Retention is who stays; churn is who leaves — both are complementary metrics.' },
    { a: 'MVP', b: 'Prototype', diff: 'MVP is production-ready minimal product; prototype is usually non-production, for validation.' },
  ]

            const renderSection = (cat, items) => {
              // Strategy table
              if (cat === 'Strategy') {
                const rows = [
                  ['North Star Metric (NSM)', 'A single, guiding metric that reflects long-term business success.', 'Used in roadmap discussions or goal-setting sessions to align the team on what really matters (e.g., “For Airbnb, nights booked is the North Star Metric.”).'],
                  ['OKR (Objectives and Key Results)', 'A framework to set measurable goals that connect strategy with execution.', 'Used during quarterly planning to define team objectives (“Increase user retention by 20%”).'],
                  ['KPIs (Key Performance Indicators)', 'Quantifiable metrics to track progress on specific outcomes.', 'Used in product review meetings or dashboards (e.g., DAU, NPS, or Conversion Rate).'],
                  ['Vision Statement', 'A future-facing statement of what the product aims to achieve long-term.', 'Used in product decks or presentations to communicate the big picture.'],
                  ['Mission Statement', 'Defines the product’s purpose and approach to achieving the vision.', 'Used in leadership discussions or team onboarding materials.'],
                  ['Strategy Pillars', 'Core themes or focus areas that guide product strategy.', 'Used in annual planning to frame priorities (e.g., “Trust, Growth, Efficiency”).'],
                  ['Product-Market Fit (PMF)', 'The point when a product satisfies strong market demand.', 'Used in startup phases or growth reviews (“We’re seeing early PMF in Tier 2 cities”).'],
                ]

                return (
                  <section key={cat} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">🎯</div>
                      <h3 className="text-xl font-semibold">1. Strategy & Vision Jargons <span className="text-sm text-slate-500">({rows.length})</span></h3>
                      <button title="Info" className="ml-2 text-slate-400">ℹ️</button>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg border border-slate-100 p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-slate-600">
                            <th className="py-2 pr-4">Jargon</th>
                            <th className="py-2 pr-4">Meaning</th>
                            <th className="py-2">Where It’s Used</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((r, i) => (
                            <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
                              <td className="py-3 font-semibold">{r[0]}</td>
                              <td className="py-3 text-slate-700">{r[1]}</td>
                              <td className="py-3 text-slate-600">{r[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )
              }

              // Discovery table
              if (cat === 'Discovery') {
                const rows = [
                  ['User Persona', 'A fictional representation of your target user segment.', 'Used during discovery workshops or UX design phases.'],
                  ['Pain Point', 'A user’s specific frustration or problem your product aims to solve.', 'Used during user interviews and defining problem statements.'],
                  ['JTBD (Jobs To Be Done)', 'A framework focusing on what users “hire” a product to do.', 'Used during feature ideation (e.g., “Users hire Swiggy for reliable meal delivery”).'],
                  ['User Journey Map', 'A visual flow of how users interact with your product.', 'Used by UX teams to identify friction points and opportunities.'],
                  ['Usability Testing', 'Observing real users as they use your product.', 'Used before major design rollouts to validate experience.'],
                  ['Market Segmentation', 'Dividing users into groups based on needs or behavior.', 'Used in go-to-market and product targeting decisions.'],
                  ['Empathy Map', 'A tool to visualize what users think, feel, say, and do.', 'Used in discovery sessions to humanize data insights.'],
                ]

                return (
                  <section key={cat} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">🔍</div>
                      <h3 className="text-xl font-semibold">2. Discovery & Research Jargons <span className="text-sm text-slate-500">({rows.length})</span></h3>
                      <button title="Info" className="ml-2 text-slate-400">ℹ️</button>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg border border-slate-100 p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-slate-600">
                            <th className="py-2 pr-4">Jargon</th>
                            <th className="py-2 pr-4">Meaning</th>
                            <th className="py-2">Where It’s Used</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((r, i) => (
                            <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
                              <td className="py-3 font-semibold">{r[0]}</td>
                              <td className="py-3 text-slate-700">{r[1]}</td>
                              <td className="py-3 text-slate-600">{r[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )
              }

              // Roadmapping table
              if (cat === 'Roadmapping') {
                const rows = [
                  ['MVP (Minimum Viable Product)', 'The smallest product version that delivers value and validates assumptions.', 'Used during early development or concept testing (“Let’s ship an MVP to test the demand”).'],
                  ['Backlog', 'A prioritized list of tasks or features to be developed.', 'Used during sprint planning and backlog grooming sessions.'],
                  ['Prioritization Frameworks', 'Methods to decide which features to build first.', 'Used during roadmap planning (e.g., RICE, MoSCoW, Kano).'],
                  ['RICE Score', 'Formula: (Reach × Impact × Confidence) / Effort — helps rank initiatives.', 'Used to prioritize roadmap items objectively.'],
                  ['MoSCoW Method', 'Categorizes tasks as Must-have, Should-have, Could-have, Won’t-have.', 'Used when balancing product scope or negotiating deadlines.'],
                  ['Kano Model', 'Classifies features as basic, performance, or delight factors.', 'Used during feature ideation to predict user satisfaction.'],
                  ['Trade-off', 'A compromise between features, time, and resources.', 'Used in executive reviews or sprint scope discussions.'],
                ]

                return (
                  <section key={cat} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">🧩</div>
                      <h3 className="text-xl font-semibold">3. Roadmapping & Prioritization Jargons <span className="text-sm text-slate-500">({rows.length})</span></h3>
                      <button title="Info" className="ml-2 text-slate-400">ℹ️</button>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg border border-slate-100 p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-slate-600">
                            <th className="py-2 pr-4">Jargon</th>
                            <th className="py-2 pr-4">Meaning</th>
                            <th className="py-2">Where It’s Used</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((r, i) => (
                            <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
                              <td className="py-3 font-semibold">{r[0]}</td>
                              <td className="py-3 text-slate-700">{r[1]}</td>
                              <td className="py-3 text-slate-600">{r[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )
              }

              // Design & Development table
              if (cat === 'Design') {
                const rows = [
                  ['Wireframe', 'Low-fidelity visual layout of a product screen.', 'Used early in design discussions to visualize structure before UI work.'],
                  ['Mockup', 'A high-fidelity design showing what the final interface looks like.', 'Used for stakeholder reviews or user testing.'],
                  ['Prototype', 'Interactive simulation of the product before coding.', 'Used in design validation sessions.'],
                  ['UI/UX', 'User Interface / User Experience — design disciplines focusing on usability and aesthetics.', 'Used across design & review conversations.'],
                  ['Tech Debt', 'The cost of choosing an easy solution now instead of a better one later.', 'Used in sprint planning or retrospectives to prioritize refactoring.'],
                  ['API', 'Application Programming Interface — rules that allow software systems to communicate.', 'Used in integration discussions with engineering.'],
                  ['Sprint', 'A fixed time-boxed period (usually 1–2 weeks) to deliver specific work.', 'Used in Agile project execution.'],
                  ['Scrum / Kanban', 'Agile methodologies for organizing team workflows.', 'Used during team process setup or retrospectives.'],
                ]

                return (
                  <section key={cat} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">🖌️</div>
                      <h3 className="text-xl font-semibold">4. Design & Development Jargons <span className="text-sm text-slate-500">({rows.length})</span></h3>
                      <button title="Info" className="ml-2 text-slate-400">ℹ️</button>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg border border-slate-100 p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-slate-600">
                            <th className="py-2 pr-4">Jargon</th>
                            <th className="py-2 pr-4">Meaning</th>
                            <th className="py-2">Where It’s Used</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((r, i) => (
                            <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
                              <td className="py-3 font-semibold">{r[0]}</td>
                              <td className="py-3 text-slate-700">{r[1]}</td>
                              <td className="py-3 text-slate-600">{r[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )
              }

              // Launch table
              if (cat === 'Launch') {
                const rows = [
                  ['Go-To-Market (GTM)', 'Strategy for launching and promoting a product to users.', 'Used before launch to coordinate marketing, sales, and product efforts.'],
                  ['Beta Launch', 'A limited release to a small user group for feedback.', 'Used before public release to catch bugs or usability issues.'],
                  ['Adoption Rate', 'How quickly users start using a new feature/product.', 'Used post-launch in performance reports.'],
                  ['Activation', 'The point when a user experiences value for the first time.', 'Used in onboarding design and growth analytics.'],
                  ['Retention', 'The percentage of users who continue using your product over time.', 'Used in performance dashboards and churn analysis.'],
                  ['Churn Rate', 'The rate at which users stop using your product.', 'Used in growth and retention strategy reviews.'],
                  ['Cohort Analysis', 'Tracking user behavior over time by segment.', 'Used in growth analytics to assess engagement trends.'],
                  ['Funnel', 'The stepwise flow users go through from awareness to conversion.', 'Used in marketing/product analytics dashboards.'],
                ]

                return (
                  <section key={cat} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">🚀</div>
                      <h3 className="text-xl font-semibold">5. Launch & Growth Jargons <span className="text-sm text-slate-500">({rows.length})</span></h3>
                      <button title="Info" className="ml-2 text-slate-400">ℹ️</button>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg border border-slate-100 p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-slate-600">
                            <th className="py-2 pr-4">Jargon</th>
                            <th className="py-2 pr-4">Meaning</th>
                            <th className="py-2">Where It’s Used</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((r, i) => (
                            <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
                              <td className="py-3 font-semibold">{r[0]}</td>
                              <td className="py-3 text-slate-700">{r[1]}</td>
                              <td className="py-3 text-slate-600">{r[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )
              }

              // Metrics table
              if (cat === 'Metrics') {
                const rows = [
                  ['DAU / MAU', 'Daily Active Users / Monthly Active Users.', 'Used in growth reports and retention tracking.'],
                  ['CAC (Customer Acquisition Cost)', 'Cost of acquiring a new user.', 'Used in marketing and budgeting discussions.'],
                  ['LTV (Lifetime Value)', 'Total revenue expected from a customer over their lifespan.', 'Used in ROI calculations.'],
                  ['Conversion Rate', 'Percentage of users completing a desired action.', 'Used in product performance analysis.'],
                  ['NPS (Net Promoter Score)', 'User loyalty metric based on survey responses.', 'Used in feedback dashboards and product review decks.'],
                  ['Engagement Rate', 'How frequently or deeply users interact with your product.', 'Used in analytics to measure stickiness.'],
                  ['Activation Rate', '% of new users who reach their first “aha” moment.', 'Used in onboarding reviews.'],
                ]

                return (
                  <section key={cat} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">📊</div>
                      <h3 className="text-xl font-semibold">6. Metrics & Analytics Jargons <span className="text-sm text-slate-500">({rows.length})</span></h3>
                      <button title="Info" className="ml-2 text-slate-400">ℹ️</button>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg border border-slate-100 p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-slate-600">
                            <th className="py-2 pr-4">Jargon</th>
                            <th className="py-2 pr-4">Meaning</th>
                            <th className="py-2">Where It’s Used</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((r, i) => (
                            <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
                              <td className="py-3 font-semibold">{r[0]}</td>
                              <td className="py-3 text-slate-700">{r[1]}</td>
                              <td className="py-3 text-slate-600">{r[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )
              }

              

              // Collaboration table
              if (cat === 'Collaboration') {
                const rows = [
                  ['Stakeholders', 'Anyone with interest or influence in the product.', 'Used in planning and communication meetings.'],
                  ['Cross-functional Teams', 'Teams that include PMs, designers, engineers, and marketers.', 'Used in sprint ceremonies and roadmap reviews.'],
                  ['Alignment', 'Ensuring everyone understands and supports the same priorities.', 'Used in leadership or sprint kickoff meetings.'],
                  ['Dependencies', 'Tasks or teams that rely on each other for delivery.', 'Used in sprint planning and program management.'],
                  ['Escalation', 'Raising a blocker or decision to leadership.', 'Used when team-level conflicts need resolution.'],
                ]

                return (
                  <section key={cat} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">🤝</div>
                      <h3 className="text-xl font-semibold">7. Collaboration & Stakeholder Jargons <span className="text-sm text-slate-500">({rows.length})</span></h3>
                      <button title="Info" className="ml-2 text-slate-400">ℹ️</button>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg border border-slate-100 p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-slate-600">
                            <th className="py-2 pr-4">Jargon</th>
                            <th className="py-2 pr-4">Meaning</th>
                            <th className="py-2">Where It’s Used</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((r, i) => (
                            <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
                              <td className="py-3 font-semibold">{r[0]}</td>
                              <td className="py-3 text-slate-700">{r[1]}</td>
                              <td className="py-3 text-slate-600">{r[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )
              }

              // default rendering for other categories
              return (
                <section key={cat} className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{(CATEGORIES.find(c=>c.key===cat)||{}).icon || '🔹'}</div>
                    <h3 className="text-xl font-semibold">{cat} <span className="text-sm text-slate-500">({items.length})</span></h3>
                    <button title="Info" className="ml-2 text-slate-400">ℹ️</button>
                  </div>

                  <div className="space-y-3">
                    {items.map((j) => (
                      <details key={j.term} className="group bg-white rounded-lg p-4 border border-slate-100 shadow-sm hover:shadow-md">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <div>
                            <div className="text-lg font-semibold">{j.term} {favorites[j.term] ? '⭐' : ''}</div>
                            <div className="text-sm text-slate-600 mt-1">{j.short}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button onClick={(e)=>{ e.preventDefault(); e.stopPropagation(); toggleFav(j.term) }} className="text-sm text-slate-500 hover:text-yellow-500">{favorites[j.term] ? 'Unfav' : 'Fav'}</button>
                            <span className="text-slate-400">▾</span>
                          </div>
                        </summary>

                        <div className="mt-3 text-slate-700">
                          {j.definition}
                          {j.scenario && <div className="mt-2 italic text-sm text-slate-600">{j.scenario}</div>}

                          {j.related && (
                            <div className="mt-3">
                              <div className="text-sm font-semibold">Related:</div>
                              <div className="flex gap-2 mt-2 flex-wrap">
                                {j.related.map(r=> <button key={r} className="text-xs px-2 py-1 bg-slate-100 rounded">{r}</button>)}
                              </div>
                            </div>
                          )}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )
            }

            const getRenderedSections = () => {
              const rendered = []
              order.forEach((k) => {
                // render each requested category in the order array; pass grouped[k] or empty list
                rendered.push(renderSection(k, grouped[k] || []))
              })
              // any extra categories not in order
              Object.keys(grouped).filter(k => !order.includes(k)).forEach((k) => {
                rendered.push(renderSection(k, grouped[k]))
              })

              return rendered
            }
            
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-8">
        <main className="py-12">
          {getRenderedSections()}

          {/* Usage scenarios highlight block */}
          <section className="mt-12 bg-sky-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">How Jargons Come Alive in Real PM Scenarios</h3>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <div className="font-semibold">During Sprint Planning</div>
                <div className="mt-2 text-sm text-slate-600">MVP, Tech Debt, Dependencies — used to prioritize and sequence work.</div>
              </div>

              <div className="p-4 bg-white rounded shadow-sm">
                <div className="font-semibold">In Go-To-Market Meetings</div>
                <div className="mt-2 text-sm text-slate-600">GTM, Churn, Adoption — used to align launch and growth plans.</div>
              </div>

              <div className="p-4 bg-white rounded shadow-sm">
                <div className="font-semibold">When Analyzing Performance</div>
                <div className="mt-2 text-sm text-slate-600">DAU, NPS, Retention — used to measure impact and health.</div>
              </div>
            </div>
          </section>

          {/* Commonly confused terms */}
          <section className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Commonly Confused Terms</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {confused.map(c => (
                <div key={c.a} className="p-4 bg-gray-50 rounded shadow-sm">
                  <div className="font-semibold">{c.a} <span className="text-slate-500">vs</span> {c.b}</div>
                  <div className="mt-2 text-sm text-slate-600">{c.diff}</div>
                </div>
              ))}
            </div>
          </section>          

          {/* Quick reference & downloads */}
          <section className="mt-12 text-center">
            <h3 className="text-xl font-semibold">Download or Explore All Jargons</h3>
            <div className="mt-4 flex justify-center gap-4">
              <a href="/downloads/Product-Jargon-Handbook.pdf" className="px-5 py-3 bg-slate-900 text-white rounded-lg">📥 Download Handbook (PDF)</a>
              <a href="/learn/jargons?view=alpha" className="px-5 py-3 border border-slate-200 rounded-lg">🗂️ View Alphabetical Index</a>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Quick Navigation</div>
              <div className="mt-3 text-sm text-slate-600 space-y-2">
                {Object.keys(grouped).map(k => <a key={k} href={`#${k}`} className="block hover:underline">{k}</a>)}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Related Learning Paths</div>
              <div className="mt-3 text-sm text-slate-600">
                <a href="/frameworks" className="block hover:underline">Frameworks (RICE, MoSCoW)</a>
                <a href="/learn/foundations" className="block hover:underline">Foundations</a>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Did you know?</div>
              <div className="mt-2 text-sm text-slate-600">MVP originally came from Eric Ries' Lean Startup — it emphasizes learning over launching full features.</div>
            </div>
          </div>
        </aside>
      </div>

      {/* CTA */}
      <section className="py-12 bg-teal-600 mt-8">
        <div className="max-w-6xl mx-auto px-8 text-center text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold">Now that you speak Product — time to build it.</h2>
          <p className="mt-3 text-teal-100">Explore frameworks, problem-solving techniques, and case studies.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/frameworks" className="px-6 py-3 bg-white text-teal-600 rounded-xl font-medium">Explore Frameworks →</a>
            <a href="/case-studies" className="px-6 py-3 border border-white text-white rounded-xl">View Case Studies →</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
 
