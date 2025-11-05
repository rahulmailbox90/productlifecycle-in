import Layout from '../../components/Layout'

export default function Foundations() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Foundation</h1>

      <p className="text-lg text-slate-700 mb-4">Understand what Product Management really means.
      Before diving into tools or frameworks, you need to grasp the essence of a PM’s role — sitting at the intersection of user needs, business goals, and technology.</p>

      <h2 className="text-xl font-semibold mt-4">In this section, you’ll learn:</h2>
      <ul className="list-disc list-inside mt-2 text-slate-700 space-y-1">
        <li>The evolution of product management — from project delivery to value creation.</li>
        <li>The product lifecycle: discovery → definition → development → delivery → growth.</li>
        <li>The responsibilities and mindset of a successful product manager.</li>
        <li>How PMs collaborate across design, engineering, marketing, and business teams.</li>
      </ul>

      <p className="text-slate-600 mt-4">You’ll also find case studies showing how foundational PM principles apply across industries — SaaS, FinTech, eCommerce, and consumer apps.</p>

      <p className="mt-4 text-slate-700">🧭 Your foundation will help you think like a PM — balancing user empathy, data, and business outcomes.</p>

      {/* Extended Foundations content appended as requested */}
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">🏗️ 1. The Evolution of Product Management — From Project Delivery to Value Creation</h2>

        {/* Inline SVG timeline: Project → Product → Value */}
        <div className="mt-4 flex justify-center">
          <svg
            className="w-full max-w-3xl h-36"
            viewBox="0 0 540 120"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="evolutionTimelineTitle"
            preserveAspectRatio="xMidYMid meet"
          >
            <title id="evolutionTimelineTitle">Evolution timeline: Project to Product to Value</title>
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#0ea5a4" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <marker id="arrow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                <path d="M0,0 L10,4 L0,8 z" fill="#0f766e" />
              </marker>
            </defs>

            {/* connecting line */}
            <line x1="40" y1="40" x2="500" y2="40" stroke="url(#g)" strokeWidth="6" strokeLinecap="round" markerEnd="url(#arrow)" />

            {/* Project node */}
            <g>
              <circle cx="80" cy="40" r="18" fill="#06b6d4" />
              <text x="80" y="72" fontSize="12" textAnchor="middle" fill="#044e4a">Project</text>
            </g>

            {/* Product node */}
            <g>
              <circle cx="270" cy="40" r="22" fill="#0ea5a4" />
              <text x="270" y="76" fontSize="12" textAnchor="middle" fill="#044e4a">Product</text>
            </g>

            {/* Value node */}
            <g>
              <circle cx="460" cy="40" r="18" fill="#06b6d4" />
              <text x="460" y="72" fontSize="12" textAnchor="middle" fill="#044e4a">Value</text>
            </g>

            {/* small labels under nodes for extra context */}
            <text x="80" y="90" fontSize="11" textAnchor="middle" fill="#334155">Outputs →</text>
            <text x="270" y="90" fontSize="11" textAnchor="middle" fill="#334155">Outcomes →</text>
            <text x="460" y="90" fontSize="11" textAnchor="middle" fill="#334155">Business & User Value</text>
          </svg>
        </div>

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
      </section>
    </Layout>
  )
}
