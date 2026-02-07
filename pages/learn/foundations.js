import Layout from '../../components/Layout'
import Link from 'next/link'
import Breadcrumb from '../../components/Breadcrumb'
import LessonNavigation from '../../components/LessonNavigation'

export default function Foundations() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Breadcrumb items={[
          { label: 'Learn', href: '/learn' },
          { label: 'Foundations', href: null }
        ]} />
      </div>

      {/* HERO Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Product Management Foundations</h1>
          <p className="text-xl text-slate-700 max-w-3xl">Understand how product management evolved, the product lifecycle, PM responsibilities, and how to lead cross-functional teams.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* 1. THE EVOLUTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🏗️ The Evolution of Product Management</h2>
          <p className="text-lg text-slate-700 mb-6">Product Management transformed from task delivery to strategic value creation.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-xl font-semibold mb-2">1990s - Project Delivery</h3>
              <p className="text-slate-600 text-sm">Focus: Deadlines & scope</p>
              <p className="text-slate-500 text-xs mt-2">Metric: On-time delivery</p>
            </div>

            <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-2">2000s - Problem Solving</h3>
              <p className="text-slate-600 text-sm">Focus: User problems & impact</p>
              <p className="text-slate-500 text-xs mt-2">Metric: Engagement & retention</p>
            </div>

            <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-xl font-semibold mb-2">2020s - Value Creation</h3>
              <p className="text-slate-600 text-sm">Focus: Business impact & strategy</p>
              <p className="text-slate-500 text-xs mt-2">Metric: ROI & sustainable growth</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="font-semibold text-slate-900">💡 Modern PMs aren't feature factories — they're strategic value creators.</p>
            <p className="text-slate-700 mt-2 text-sm">They lead by influence, balance multiple priorities, and drive measurable business outcomes.</p>
          </div>
        </section>

        {/* 2. THE PRODUCT LIFECYCLE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🔁 The Product Lifecycle: 5 Key Stages</h2>
          <p className="text-lg text-slate-700 mb-8">Every product moves through this cycle — and the best PMs excel at each stage.</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {[
              { 
                num: 1, 
                title: 'Discovery', 
                desc: 'Identify unmet user needs and validate problems through research.', 
                tools: 'User interviews, surveys, data analysis'
              },
              { 
                num: 2, 
                title: 'Definition', 
                desc: 'Frame the solution, write PRD, define success metrics.', 
                tools: 'RICE, MoSCoW, PRD, OKRs'
              },
              { 
                num: 3, 
                title: 'Development', 
                desc: 'Collaborate with design & engineering to build the product.', 
                tools: 'Jira, Figma, sprint planning'
              },
              { 
                num: 4, 
                title: 'Delivery', 
                desc: 'Launch to users, monitor adoption, gather feedback.', 
                tools: 'A/B testing, Amplitude, customer feedback'
              },
              { 
                num: 5, 
                title: 'Growth', 
                desc: 'Scale retention, optimize metrics, drive expansion.', 
                tools: 'Analytics, AARRR framework, experiments'
              }
            ].map((stage) => (
              <div key={stage.num} className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{stage.num}</div>
                  <h3 className="font-semibold text-slate-900">{stage.title}</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">{stage.desc}</p>
                <p className="text-xs text-slate-500">📌 {stage.tools}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
            <p className="font-semibold text-slate-900">🔄 Key insight: The cycle is continuous — discovery never truly ends. Each stage informs the next.</p>
          </div>
        </section>

        {/* 3. PM RESPONSIBILITIES & MINDSET */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🧠 Core Responsibilities & Mindset</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Responsibilities */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
              <div className="space-y-3">
                {[
                  { icon: '🎯', title: 'Strategy', desc: 'Define vision, goals, and product roadmap' },
                  { icon: '🧩', title: 'Discovery', desc: 'Identify user problems and validate solutions' },
                  { icon: '⚙️', title: 'Execution', desc: 'Manage sprints and coordinate shipping' },
                  { icon: '📊', title: 'Analytics', desc: 'Measure success through data and KPIs' },
                  { icon: '🤝', title: 'Leadership', desc: 'Align teams and manage stakeholders' }
                ].map((resp) => (
                  <div key={resp.title} className="flex gap-4 p-3 bg-white border rounded-lg">
                    <div className="text-2xl">{resp.icon}</div>
                    <div>
                      <div className="font-semibold text-slate-900">{resp.title}</div>
                      <div className="text-sm text-slate-600">{resp.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mindset */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Three Lenses of Great PMs</h3>
              <div className="space-y-3">
                {[
                  { icon: '❤️', title: 'User Lens', desc: 'Deeply understand user pain points and needs' },
                  { icon: '💼', title: 'Business Lens', desc: 'Ensure decisions align with company goals' },
                  { icon: '🔧', title: 'Technology Lens', desc: 'Know what\'s feasible and the cost/benefit' },
                  { icon: '🧮', title: 'Data Lens', desc: 'Use metrics to validate intuition and decisions' },
                  { icon: '🤲', title: 'Collaboration', desc: 'Lead by influence, not authority' }
                ].map((lens) => (
                  <div key={lens.title} className="flex gap-4 p-3 bg-white border rounded-lg">
                    <div className="text-2xl">{lens.icon}</div>
                    <div>
                      <div className="font-semibold text-slate-900">{lens.title}</div>
                      <div className="text-sm text-slate-600">{lens.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-100 p-6 rounded-lg">
            <p className="text-lg font-semibold text-slate-900 mb-2">💬 The PM Motto</p>
            <p className="text-slate-700 italic">"Fall in love with the problem, not the solution."</p>
          </div>
        </section>

        {/* 4. CROSS-FUNCTIONAL COLLABORATION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🤝 Collaborating Across Teams</h2>
          <p className="text-lg text-slate-700 mb-8">Product Management is a team sport. Success requires orchestrating collaboration across disciplines.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { team: 'Design', role: 'UX flows & prototypes', tools: 'Figma, Miro', icon: '🎨' },
              { team: 'Engineering', role: 'Backlog & delivery', tools: 'Jira, Notion', icon: '💻' },
              { team: 'Marketing', role: 'GTM & messaging', tools: 'GA, HubSpot', icon: '📣' },
              { team: 'Business', role: 'Strategy & ROI', tools: 'Power BI, Excel', icon: '💼' }
            ].map((col) => (
              <div key={col.team} className="p-5 bg-white border rounded-lg shadow-sm">
                <div className="text-3xl mb-3">{col.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{col.team}</h3>
                <p className="text-sm text-slate-600 mb-3">{col.role}</p>
                <div className="text-xs text-slate-500 font-mono">{col.tools}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
            <p className="font-semibold text-slate-900 mb-2">🎯 Your Role</p>
            <p className="text-slate-700">Act as a translator and connector. Ensure every team understands not just the "what" and "how", but the "why" behind what you're building.</p>
          </div>
        </section>

        {/* 5. QUICK SUMMARY */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">✅ Foundations Quick Summary</h2>
          
          <div className="bg-white border rounded-lg p-8">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-2xl">1️⃣</span>
                <div>
                  <p className="font-semibold">PMs evolved from delivery managers to strategic value creators</p>
                  <p className="text-sm text-slate-600">The role has transformed from project coordination to business impact.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">2️⃣</span>
                <div>
                  <p className="font-semibold">The product lifecycle is Discovery → Definition → Development → Delivery → Growth</p>
                  <p className="text-sm text-slate-600">Each stage has its own challenges, tools, and KPIs.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">3️⃣</span>
                <div>
                  <p className="font-semibold">Success requires balancing user empathy, business acumen, and data</p>
                  <p className="text-sm text-slate-600">View every problem through user, business, and technology lenses.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">4️⃣</span>
                <div>
                  <p className="font-semibold">Collaboration multiplies your impact</p>
                  <p className="text-sm text-slate-600">Lead by influence, not authority. Bring clarity to cross-functional teams.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Content */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Related Learning Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/learn/lifecycles">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-blue-600">Product Lifecycle</div>
                <p className="text-sm text-slate-600 mt-2">Deep dive into each lifecycle stage with real examples</p>
              </a>
            </Link>
            <Link href="/learn/jargons">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-blue-600">Jargons & Terms</div>
                <p className="text-sm text-slate-600 mt-2">Learn the language of product management</p>
              </a>
            </Link>
            <Link href="/frameworks">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-blue-600">Frameworks</div>
                <p className="text-sm text-slate-600 mt-2">RICE, MoSCoW, Kano, and other decision tools</p>
              </a>
            </Link>
          </div>
        </section>

        {/* Lesson Navigation */}
        <LessonNavigation 
          previousLesson={null} 
          nextLesson={{ label: 'Product Lifecycle & Stages', href: '/learn/lifecycles' }}
        />
      </div>
    </Layout>
  )
}
