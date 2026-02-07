import Layout from '../../components/Layout'
import Link from 'next/link'
import Breadcrumb from '../../components/Breadcrumb'
import LessonNavigation from '../../components/LessonNavigation'

export default function Foundations() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Breadcrumb items={[
          { label: 'Learn', href: '/learn' },
          { label: 'Foundations', href: null }
        ]} />
      </div>
      {/* HERO / INTRO BLOCK */}
      <section className="w-full bg-gradient-to-r from-white via-slate-50 to-white p-8 rounded-lg shadow-sm">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-slate-900">🧭 Build the Foundation of Product Management</h1>
            <p className="mt-4 text-lg text-slate-700">Understand how product management evolved, how products are built, and how great PMs think, act, and collaborate.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/learn/foundations#evolution"><a className="px-4 py-2 bg-blue-600 text-white rounded">Next Lesson → Evolution of PM</a></Link>
              <Link href="/learn"><a className="px-4 py-2 border rounded text-slate-700">Back to Learn Overview</a></Link>
            </div>
          </div>

          <div className="flex-1 hidden md:block">
            {/* Placeholder for timeline illustration */}
            <div className="h-48 bg-gradient-to-br from-blue-50 to-white border rounded-lg flex items-center justify-center text-blue-700">
              <div className="text-center">
                <div className="text-2xl font-bold">Project → Product → Value</div>
                <div className="mt-2 text-sm">Timeline illustration (SVG/Lottie recommended)</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MERGED LEGACY CONTENT - full deep-dive from previous Foundations version */}
      <section id="full-foundations-merged" className="container mx-auto mt-12">
        <details className="border rounded-lg p-4 bg-white" open>
          <summary className="cursor-pointer font-semibold text-lg">📚 Full Foundations (Merged deep-dive)</summary>
          <div className="mt-4 space-y-4 text-slate-700">
            <h2 className="text-2xl font-semibold">🏗️ 1. The Evolution of Product Management — From Project Delivery to Value Creation</h2>

            <p>Product Management has evolved drastically over the last two decades. What started as project coordination has transformed into strategic value creation at the heart of modern businesses.</p>

            <h3 className="font-semibold">🕰️ Early Phase: Project Delivery</h3>
            <p>In its early form, Product Management was often mistaken for project management. The focus was on delivering outputs — shipping features, completing timelines, and ensuring scope compliance. PMs acted as coordinators, ensuring design and engineering teams met deadlines.</p>

            <p className="italic">The success metric?</p>
            <p className="font-medium">“Did we deliver what we planned — on time and within budget?”</p>

            <p>While this ensured execution, it missed a key question: <strong>“Did we deliver something that truly solves the user’s problem?”</strong></p>

            <h3 className="font-semibold">🚀 Transition: From Output to Outcome</h3>
            <p>As digital products scaled, companies began realizing that building more features doesn’t always mean creating more value. The focus shifted from delivery to impact — measuring success through metrics like engagement, retention, and revenue.</p>

            <p>PMs started becoming problem solvers and decision makers, not just project drivers. They began asking:</p>
            <ul className="list-disc list-inside ml-4">
              <li>What user problem are we solving?</li>
              <li>Why is this worth solving?</li>
              <li>How do we measure success?</li>
            </ul>

            <h3 className="font-semibold">🌟 Modern Phase: Value Creation and Strategy</h3>
            <p>Today’s Product Managers are mini-CEOs of their products — accountable for user satisfaction, business growth, and product vision alignment. They lead by influence, not authority, bridging strategy with execution.</p>

            <p className="italic">Their success metric?</p>
            <p className="font-medium">“Did we create measurable value for both the user and the business?”</p>

            <h2 className="text-2xl font-semibold mt-6">🔁 2. The Product Lifecycle: Discovery → Definition → Development → Delivery → Growth</h2>

            <p>Every product — whether it’s an app, a feature, or a platform — follows a lifecycle. Understanding this lifecycle helps PMs manage uncertainty and move from idea to impact systematically.</p>

            <h3 className="font-semibold mt-4">1️⃣ Discovery – Understanding the Problem</h3>
            <p>This is where curiosity and empathy matter most. PMs identify user problems, market gaps, and opportunities through:</p>
            <ul className="list-disc list-inside ml-4">
              <li>User interviews</li>
              <li>Market research</li>
              <li>Data analysis</li>
              <li>Competitive benchmarking</li>
            </ul>
            <p className="mt-2 font-medium">Key Outcome: A validated problem worth solving.</p>
            <p className="text-sm text-slate-600">Example: Spotify discovered users didn’t just want access to songs — they wanted a seamless way to discover new music.</p>

            <h3 className="font-semibold mt-4">2️⃣ Definition – Framing the Solution</h3>
            <p>Once the problem is validated, PMs define what to build and why. This includes:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Creating a Problem Statement</li>
              <li>Writing a PRD (Product Requirements Document)</li>
              <li>Prioritizing features using frameworks (RICE, MoSCoW)</li>
              <li>Aligning stakeholders around the scope</li>
            </ul>
            <p className="mt-2 font-medium">Key Outcome: A clear definition of the product/feature and measurable success criteria.</p>
            <p className="text-sm text-slate-600">Tip: Great PMs communicate the “why” clearly — before discussing the “what.”</p>

            <h3 className="font-semibold mt-4">3️⃣ Development – Building the Solution</h3>
            <p>Here, collaboration between PMs, engineers, and designers comes to life. The PM ensures that what’s being built aligns with the defined user need and constraints.</p>
            <ul className="list-disc list-inside ml-4">
              <li>Sprint planning and backlog management</li>
              <li>Design reviews and feedback loops</li>
              <li>Clarifying requirements and trade-offs</li>
            </ul>
            <p className="mt-2 font-medium">Key Outcome: A working product or feature ready for testing.</p>
            <p className="text-sm text-slate-600">Example: During Slack’s beta, PMs continuously iterated based on team feedback before public release.</p>

            <h3 className="font-semibold mt-4">4️⃣ Delivery – Launching and Learning</h3>
            <p>A product launch isn’t the end — it’s the beginning of user feedback. PMs manage launches with marketing, customer success, and analytics teams.</p>
            <ul className="list-disc list-inside ml-4">
              <li>Go-to-market (GTM) coordination</li>
              <li>Monitoring early usage metrics</li>
              <li>Gathering feedback and performance data</li>
            </ul>
            <p className="mt-2 font-medium">Key Outcome: Users adopt and interact with the product; insights are gathered for iteration.</p>
            <p className="text-sm text-slate-600">Note: Great PMs treat delivery as a learning phase, not a finish line.</p>

            <h3 className="font-semibold mt-4">5️⃣ Growth – Scaling Value</h3>
            <p>After launch, PMs shift focus from acquisition to retention and expansion. This is where data-driven decision-making shines.</p>
            <p>Focus areas:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Measuring AARRR (Acquisition, Activation, Retention, Revenue, Referral)</li>
              <li>Running experiments (A/B testing, cohort analysis)</li>
              <li>Identifying growth loops and virality triggers</li>
            </ul>
            <p className="mt-2 font-medium">Key Outcome: Sustainable user and business growth driven by product improvements.</p>
            <p className="text-sm text-slate-600">Example: Notion scaled by optimizing referral loops and creating a self-serve product-led growth engine.</p>

            <h2 className="text-2xl font-semibold mt-6">🧭 3. The Responsibilities and Mindset of a Successful Product Manager</h2>

            <p>Being a Product Manager is less about authority and more about responsibility without control. A PM must drive outcomes through clarity, influence, and curiosity.</p>

            <h3 className="font-semibold mt-4">🎯 Core Responsibilities</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="pb-2">Area</th>
                    <th className="pb-2">What PMs Do</th>
                    <th className="pb-2">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pt-2 align-top">Strategy</td>
                    <td className="pt-2 align-top">Define product vision, goals, and roadmap</td>
                    <td className="pt-2 align-top">"We aim to improve user engagement by 20% this quarter."</td>
                  </tr>
                  <tr>
                    <td className="pt-2 align-top">Discovery</td>
                    <td className="pt-2 align-top">Identify user problems and validate solutions</td>
                    <td className="pt-2 align-top">Conduct user research, analyze data</td>
                  </tr>
                  <tr>
                    <td className="pt-2 align-top">Execution</td>
                    <td className="pt-2 align-top">Collaborate with design and engineering to ship features</td>
                    <td className="pt-2 align-top">Manage sprints, handle trade-offs</td>
                  </tr>
                  <tr>
                    <td className="pt-2 align-top">Analytics</td>
                    <td className="pt-2 align-top">Measure success and track KPIs</td>
                    <td className="pt-2 align-top">Monitor retention, DAU, and feature usage</td>
                  </tr>
                  <tr>
                    <td className="pt-2 align-top">Stakeholder Management</td>
                    <td className="pt-2 align-top">Align cross-functional teams</td>
                    <td className="pt-2 align-top">Sync with marketing, sales, and support</td>
                  </tr>
                  <tr>
                    <td className="pt-2 align-top">Communication</td>
                    <td className="pt-2 align-top">Ensure clarity and transparency</td>
                    <td className="pt-2 align-top">Write PRDs, updates, and product narratives</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold mt-4">🧠 PM Mindset</h3>
            <p>A successful PM operates with three lenses:</p>
            <ul className="list-disc list-inside ml-4">
              <li><strong>User Lens (Empathy):</strong> Understand real user pain points.</li>
              <li><strong>Business Lens (Impact):</strong> Ensure decisions align with business goals.</li>
              <li><strong>Technology Lens (Feasibility):</strong> Know what’s possible and practical.</li>
            </ul>

            <p className="mt-2"><em>PM Motto:</em> “Fall in love with the problem, not the solution.”</p>

            <p>Great PMs are curious, analytical, humble, and resilient. They thrive on feedback loops — with users, teams, and data.</p>

            <h2 className="text-2xl font-semibold mt-6">🤝 4. How PMs Collaborate Across Design, Engineering, Marketing, and Business Teams</h2>

            <p>Product Management is a team sport. No PM succeeds alone — success comes from orchestrating collaboration across disciplines.</p>

            <h3 className="font-semibold mt-4">🎨 With Design Teams</h3>
            <p>Define user journeys, wireframes, and prototypes. Ensure the product feels intuitive and delightful. Translate user insights into actionable design decisions.</p>
            <p className="text-sm text-slate-600">Example: PMs and designers co-create mockups in Figma before user testing.</p>

            <h3 className="font-semibold mt-4">💻 With Engineering Teams</h3>
            <p>Prioritize features, manage sprints, and clarify requirements. Understand trade-offs between speed and scalability. Ensure continuous communication during development.</p>
            <h3 className="font-semibold mt-4">📣 With Marketing & Growth Teams</h3>
            <p>Plan product launches and messaging. Define positioning, pricing, and promotion strategies. Analyze acquisition and conversion metrics.</p>
            <h3 className="font-semibold mt-4">💼 With Business & Leadership</h3>
            <p>Align product goals with company OKRs. Justify investments and demonstrate ROI. Present roadmaps, outcomes, and future bets.</p>

            <div className="mt-4">
              <h4 className="font-semibold">🧩 Summary Visualization</h4>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="pb-2">Team</th>
                      <th className="pb-2">PM’s Role</th>
                      <th className="pb-2">Common Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-2 align-top">Design</td>
                      <td className="pt-2 align-top">User experience and flow</td>
                      <td className="pt-2 align-top">Figma, Miro</td>
                    </tr>
                    <tr>
                      <td className="pt-2 align-top">Engineering</td>
                      <td className="pt-2 align-top">Build and delivery</td>
                      <td className="pt-2 align-top">Jira, Notion</td>
                    </tr>
                    <tr>
                      <td className="pt-2 align-top">Marketing</td>
                      <td className="pt-2 align-top">Launch and GTM strategy</td>
                      <td className="pt-2 align-top">HubSpot, GA</td>
                    </tr>
                    <tr>
                      <td className="pt-2 align-top">Business</td>
                      <td className="pt-2 align-top">Strategy & ROI</td>
                      <td className="pt-2 align-top">Power BI, Excel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4">💬 The best PMs act as translators — ensuring everyone understands the “why” behind what they’re building.</p>

            <h3 className="text-xl font-semibold mt-6">🎓 Wrap-up Section</h3>
            <p className="mt-2">PM Foundations Recap:</p>
            <ul className="list-disc list-inside ml-4">
              <li>PMs evolved from delivery managers to strategic value creators.</li>
              <li>The product lifecycle is iterative — discovery never truly ends.</li>
              <li>Successful PMs blend empathy, analytics, and business acumen.</li>
              <li>Collaboration is the PM’s greatest multiplier.</li>
            </ul>

            <p className="mt-4">CTA: <a href="/learn/jargons" className="text-blue-600 hover:underline">Next: Learn the Language of Product Management → Jargons Page</a></p>
          </div>
        </details>
      </section>

      {/* EVOLUTION SECTION */}
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
          {/* Timeline illustration placeholder */}
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

      {/* PRODUCT LIFECYCLE SECTION */}
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

      {/* RESPONSIBILITIES & MINDSET */}
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

      {/* CROSS-FUNCTIONAL COLLABORATION */}
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

      {/* CASE STUDY */}
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

      <div className="max-w-6xl mx-auto px-6">
        {/* Related Content */}
        <section className="mt-12 mb-8 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Related Learning Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/learn/lifecycles">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-blue-600">Product Lifecycle</div>
                <p className="text-sm text-slate-600 mt-1">See how PM responsibilities evolve across each stage</p>
              </a>
            </Link>
            <Link href="/learn/jargons">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-blue-600">Jargons & Terms</div>
                <p className="text-sm text-slate-600 mt-1">Learn the language of product management</p>
              </a>
            </Link>
            <Link href="/frameworks">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-blue-600">Frameworks</div>
                <p className="text-sm text-slate-600 mt-1">Decision-making and prioritization techniques</p>
              </a>
            </Link>
          </div>
        </section>

        <LessonNavigation 
          previousLesson={null} 
          nextLesson={{ label: 'Product Lifecycle & Stages', href: '/learn/lifecycles' }}
        />
      </div>
    </Layout>
  )
}
