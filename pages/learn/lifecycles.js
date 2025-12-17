import Link from 'next/link'
import Layout from '../../components/Layout'

export default function Lifecycles() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">Fintech Product Lifecycle</h1>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">Fintech products operate in a fundamentally different environment compared to generic consumer or SaaS products. They are data-intensive, regulated, operationally critical, and deeply interconnected with other systems.</p>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">While most product literature talks about a single, linear “product lifecycle”, real-world fintech products follow different lifecycle patterns depending on the type of product being built. This page explains those differences and what PMs must deliver at each stage.</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold">What this page covers</h2>
          <p className="mt-3 text-slate-700">How lifecycle stages differ across fintech products; what a Product Manager is responsible for at each stage; and the typical deliverables expected in real organisations.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold">Fintech Product Categories Covered</h2>
          <p className="mt-3 text-slate-700">Fintech products can broadly be grouped into the following categories. Each category has a distinct lifecycle shape driven by user type, data complexity, and regulatory exposure.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Back-Office / Operational Systems</h3>
              <p className="mt-2 text-sm text-slate-600">Internal platforms used by operations, finance, risk, and compliance teams to process transactions, manage settlements, handle exceptions, and ensure regulatory reporting.</p>
              <p className="mt-2 text-sm text-slate-600"><strong>Examples:</strong> transaction processing engines, reconciliation systems, settlement platforms.</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Consumer-Facing Fintech Applications</h3>
              <p className="mt-2 text-sm text-slate-600">Applications directly used by customers to transact, invest, pay, or manage their finances. Highly visible and trust-sensitive.</p>
              <p className="mt-2 text-sm text-slate-600"><strong>Examples:</strong> trading apps, wallets, payment apps.</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Portfolio / Investment Management Platforms</h3>
              <p className="mt-2 text-sm text-slate-600">Decision-support tools used by portfolio managers, analysts, and advisors. Analytics-heavy and dependent on data accuracy.</p>
              <p className="mt-2 text-sm text-slate-600"><strong>Examples:</strong> portfolio management systems, analytics dashboards.</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Reference Data / Market Data Platforms</h3>
              <p className="mt-2 text-sm text-slate-600">Foundational data platforms that supply instrument, pricing, and corporate action data to multiple downstream systems.</p>
              <p className="mt-2 text-sm text-slate-600"><strong>Examples:</strong> instrument master, pricing data platforms.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold">High-Level Fintech Product Lifecycle Overview</h2>
          <p className="mt-3 text-slate-700">At a high level, most fintech products move through the following stages. The emphasis, sequencing, and depth of these stages vary significantly by product type.</p>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-slate-700">
            <li>Discovery & Problem Identification</li>
            <li>Feasibility & Compliance Alignment</li>
            <li>Requirements & Design</li>
            <li>Build & Delivery</li>
            <li>Launch & Rollout</li>
            <li>Monitoring & Continuous Improvement</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Lifecycle by Fintech Product Type</h2>

          <article className="mt-6">
            <h3 className="text-xl font-semibold">Back-Office / Operational Systems Lifecycle</h3>
            <p className="mt-2 text-slate-700">Back-office products are designed to reduce operational risk, improve efficiency, and ensure accuracy. They are built for correctness, auditability, and resilience.</p>
            <ol className="mt-3 list-decimal list-inside text-slate-700 space-y-2">
              <li><strong>Operational Problem Identification</strong> — identify inefficiencies, manual work, errors, or regulatory gaps; PM focuses on real operational pain points.</li>
              <li><strong>Process Mapping & Control Definition</strong> — document as-is and to-be workflows, control points, approvals, and exceptions.</li>
              <li><strong>Data & Integration Design</strong> — define data sources, validation rules, and integration touchpoints.</li>
              <li><strong>Build & Controlled Delivery</strong> — incremental, controlled releases with extensive UAT by operations teams.</li>
              <li><strong>Parallel Run & Stabilisation</strong> — run in parallel with legacy systems and reconcile outputs before cutover.</li>
              <li><strong>Operational Optimisation</strong> — performance improvements, automation, and reporting enhancements.</li>
            </ol>

            <div className="mt-4">
              <div className="font-semibold">Key PM Deliverables</div>
              <ul className="mt-2 text-sm text-slate-600">
                <li>Workflow and process diagrams</li>
                <li>Exception handling definitions</li>
                <li>Control and audit artefacts</li>
                <li>UAT and sign-off documentation</li>
              </ul>
            </div>
          </article>

          <article className="mt-6">
            <h3 className="text-xl font-semibold">Consumer-Facing Fintech Applications Lifecycle</h3>
            <p className="mt-2 text-slate-700">Built around trust, usability, and growth. Failures are visible and directly impact customers.</p>
            <ol className="mt-3 list-decimal list-inside text-slate-700 space-y-2">
              <li><strong>User Problem Discovery</strong> — user research, competitive analysis, problem validation.</li>
              <li><strong>Value Proposition & Experience Design</strong> — onboarding flows, transaction journeys, trust elements.</li>
              <li><strong>Compliance & Risk Alignment</strong> — embed KYC/AML/disclosures before development.</li>
              <li><strong>Build, Test & Iterate</strong> — rapid iteration, load/security testing.</li>
              <li><strong>Launch & Growth</strong> — marketing, education, monitoring adoption metrics.</li>
              <li><strong>Retention & Continuous Improvement</strong> — reduce churn, improve experience, iterate based on data.</li>
            </ol>

            <div className="mt-4">
              <div className="font-semibold">Key PM Deliverables</div>
              <ul className="mt-2 text-sm text-slate-600">
                <li>User journeys and UX flows</li>
                <li>Product Requirement Documents (PRDs)</li>
                <li>KPI and growth dashboards</li>
                <li>Release and rollout plans</li>
              </ul>
            </div>
          </article>

          <article className="mt-6">
            <h3 className="text-xl font-semibold">Portfolio / Investment Management Platforms Lifecycle</h3>
            <p className="mt-2 text-slate-700">Platforms supporting complex financial decisions where accuracy and interpretability beat speed.</p>
            <ol className="mt-3 list-decimal list-inside text-slate-700 space-y-2">
              <li><strong>Decision Workflow Identification</strong> — study how decisions are made and what information is required.</li>
              <li><strong>Analytical & Reporting Requirements</strong> — detailed specs for calculations, benchmarks, and reports.</li>
              <li><strong>Data Accuracy & Validation Design</strong> — define calculation logic, validation rules, and reconciliation.</li>
              <li><strong>Build & Analytical Testing</strong> — test formulas, scenarios, historical comparisons.</li>
              <li><strong>User Acceptance & Training</strong> — train users on interpretation and correct use.</li>
              <li><strong>Enhancement & Scalability</strong> — support new asset classes and higher data volumes.</li>
            </ol>

            <div className="mt-4">
              <div className="font-semibold">Key PM Deliverables</div>
              <ul className="mt-2 text-sm text-slate-600">
                <li>Calculation and analytics specifications</li>
                <li>Reporting definitions</li>
                <li>Data validation and reconciliation logic</li>
                <li>Training material</li>
              </ul>
            </div>
          </article>

          <article className="mt-6">
            <h3 className="text-xl font-semibold">Reference Data & Market Data Platforms Lifecycle</h3>
            <p className="mt-2 text-slate-700">Foundational platforms where errors propagate across downstream systems.</p>
            <ol className="mt-3 list-decimal list-inside text-slate-700 space-y-2">
              <li><strong>Data Domain Definition</strong> — define required data, structure, and consumers.</li>
              <li><strong>Source Identification & Ingestion Strategy</strong> — define sources, ingestion, frequency, and fallbacks.</li>
              <li><strong>Data Model & Quality Rules</strong> — establish golden source with validation rules.</li>
              <li><strong>Integration & Distribution</strong> — distribute via APIs, feeds, or files with reliability concerns.</li>
              <li><strong>Data Governance & Monitoring</strong> — ensure quality, lineage, and issue resolution.</li>
              <li><strong>Expansion & Maintenance</strong> — support new instruments, markets, and regulations.</li>
            </ol>

            <div className="mt-4">
              <div className="font-semibold">Key PM Deliverables</div>
              <ul className="mt-2 text-sm text-slate-600">
                <li>Data dictionaries and definitions</li>
                <li>Quality rules and dashboards</li>
                <li>Integration specifications</li>
                <li>Governance documentation</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold">Lifecycle Comparison Across Fintech Product Types</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-slate-100">
              <thead>
                <tr className="text-left text-slate-600">
                  <th className="p-3">Aspect</th>
                  <th className="p-3">Back-Office</th>
                  <th className="p-3">Consumer App</th>
                  <th className="p-3">Portfolio Tools</th>
                  <th className="p-3">Reference Data</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-3 font-semibold">Primary Focus</td>
                  <td className="p-3">Accuracy & control</td>
                  <td className="p-3">UX & trust</td>
                  <td className="p-3">Decision support</td>
                  <td className="p-3">Data quality</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-3 font-semibold">Key Risk</td>
                  <td className="p-3">Operational errors</td>
                  <td className="p-3">Customer trust loss</td>
                  <td className="p-3">Incorrect analytics</td>
                  <td className="p-3">Data propagation</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-3 font-semibold">PM Strength</td>
                  <td className="p-3">Process clarity</td>
                  <td className="p-3">User empathy</td>
                  <td className="p-3">Analytical depth</td>
                  <td className="p-3">Data governance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold">How to Use This Page</h2>
          <div className="mt-3 text-slate-700">
            <p>If you work on internal operational systems, start with the Back-Office lifecycle.</p>
            <p className="mt-2">If you build customer-facing products, focus on the Consumer Application lifecycle.</p>
            <p className="mt-2">If your product supports investment decisions, the Portfolio Platform lifecycle applies.</p>
            <p className="mt-2">If your product manages shared data, the Reference Data lifecycle is most relevant.</p>
            <p className="mt-3">Each lifecycle section links to frameworks, templates, and case studies across the site.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold">Related Resources</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/learn/foundations"><a className="p-4 bg-white rounded shadow-sm">Product Management Foundations</a></Link>
            <Link href="/frameworks"><a className="p-4 bg-white rounded shadow-sm">PM Frameworks & Prioritisation</a></Link>
            <Link href="/resources/templates"><a className="p-4 bg-white rounded shadow-sm">PM Deliverables & Templates</a></Link>
            <Link href="/case-studies"><a className="p-4 bg-white rounded shadow-sm">Fintech Case Studies</a></Link>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Final Note</h2>
          <p className="mt-3 text-slate-700">Effective fintech product managers do not force a single lifecycle onto every product. They adapt their approach based on product type, data complexity, regulatory exposure, and user needs. This page is designed to help you do exactly that.</p>
        </section>
      </div>
    </Layout>
  )
}
