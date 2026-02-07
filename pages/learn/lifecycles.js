import Link from 'next/link'
import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import LessonNavigation from '../../components/LessonNavigation'

export default function Lifecycles() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Breadcrumb items={[
          { label: 'Learn', href: '/learn' },
          { label: 'Lifecycles', href: null }
        ]} />
      </div>
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

          <p className="mt-3 text-slate-700">Compare how the same lifecycle stages play out across product types — see emphasis, sequencing and PM focus at each stage.</p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-slate-100">
              <thead>
                <tr className="text-left text-slate-600">
                  <th className="p-3 w-48">Stage</th>
                  <th className="p-3">Back-Office / Operational Systems</th>
                  <th className="p-3">Consumer-Facing Applications</th>
                  <th className="p-3">Portfolio / Investment Platforms</th>
                  <th className="p-3">Reference Data / Market Data</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100 align-top">
                  <td className="p-3 font-semibold">1. Discovery & Problem Identification</td>
                  <td className="p-3">Often triggered by ops/finance/risk reporting issues or manual work; PM validates operational failure modes and root causes.</td>
                  <td className="p-3">User research, market gaps and trust issues drive discovery; focus on customer pain and product-market fit.</td>
                  <td className="p-3">Starts with decision/workflow analysis — what inputs do analysts need and where are current gaps?</td>
                  <td className="p-3">Begins with scoping data domains and identifying consumers of that data across systems.</td>
                </tr>

                <tr className="border-t border-slate-100 align-top">
                  <td className="p-3 font-semibold">2. Feasibility & Compliance Alignment</td>
                  <td className="p-3">Heavy focus on controls, approvals and feasibility with upstream systems; involve compliance early for auditability.</td>
                  <td className="p-3">Compliance (KYC/AML/disclosures) is required early; legal/risk shape UX and data capture.</td>
                  <td className="p-3">Work closely with quants and domain experts to validate feasibility of analytics and data availability.</td>
                  <td className="p-3">Assess vendor data quality, licensing, SLAs, and ingestion feasibility before design.</td>
                </tr>

                <tr className="border-t border-slate-100 align-top">
                  <td className="p-3 font-semibold">3. Requirements & Design</td>
                  <td className="p-3">Process maps, control definitions, exception workflows, and integration contracts are primary outputs.</td>
                  <td className="p-3">User journeys, onboarding flows, error states and instrumentation plans are central to design.</td>
                  <td className="p-3">Detailed calculation specs, report definitions and traceable formulas are written and validated.</td>
                  <td className="p-3">Data models, validation rules, schemas and lineage documentation are defined as the golden source.</td>
                </tr>

                <tr className="border-t border-slate-100 align-top">
                  <td className="p-3 font-semibold">4. Build & Delivery</td>
                  <td className="p-3">Controlled incremental delivery, feature flags, heavy UAT with ops and parallel runs to verify outputs.</td>
                  <td className="p-3">Faster iterations, performance and security testing, focus on reliability at scale and monitoring hooks.</td>
                  <td className="p-3">Extensive analytical testing, backtesting and scenario validation; correctness over raw speed.</td>
                  <td className="p-3">Robust ingestion, reconciliation jobs, alerting and retry mechanics; reliability is key.</td>
                </tr>

                <tr className="border-t border-slate-100 align-top">
                  <td className="p-3 font-semibold">5. Launch / Rollout & Stabilisation</td>
                  <td className="p-3">Parallel runs, reconciliations and phased cutover; full cutover only after parity is proven.</td>
                  <td className="p-3">Coordinated marketing, staged rollouts, feature flags and immediate support channels for trust-sensitive issues.</td>
                  <td className="p-3">User acceptance with domain experts, training, and careful rollout for interpretability.</td>
                  <td className="p-3">Gradual propagation to downstream systems with monitoring of data drift and reconciliation checks.</td>
                </tr>

                <tr className="border-t border-slate-100 align-top">
                  <td className="p-3 font-semibold">6. Monitoring & Continuous Improvement</td>
                  <td className="p-3">Operational metrics, exception rates, reconciliation accuracy and automation opportunities guide iterations.</td>
                  <td className="p-3">Adoption, activation, retention, and performance metrics drive product enhancements and growth experiments.</td>
                  <td className="p-3">Model accuracy, backtesting outcomes, and analytic coverage inform enhancements and new features.</td>
                  <td className="p-3">Data quality dashboards, lineage checks and governance processes drive ongoing maintenance.</td>
                </tr>
              </tbody>
            </table>
          </div>
        
          {/* Keep detailed deliverables below for each type (condensed) */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Back-Office — Key PM Deliverables</div>
              <ul className="mt-2 text-sm text-slate-600">
                <li>Workflow & process diagrams</li>
                <li>Exception handling & control artefacts</li>
                <li>Integration & reconciliation specs</li>
                <li>UAT scripts and sign-offs</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Consumer Apps — Key PM Deliverables</div>
              <ul className="mt-2 text-sm text-slate-600">
                <li>User journeys & UX flows</li>
                <li>PRDs, acceptance criteria</li>
                <li>Growth dashboards & instrumentation</li>
                <li>Rollout & comms plans</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Portfolio Tools — Key PM Deliverables</div>
              <ul className="mt-2 text-sm text-slate-600">
                <li>Calculation & analytics specs</li>
                <li>Reporting definitions</li>
                <li>Validation & reconciliation logic</li>
                <li>Training & interpretation guides</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">Reference Data — Key PM Deliverables</div>
              <ul className="mt-2 text-sm text-slate-600">
                <li>Data dictionaries & schemas</li>
                <li>Quality rules & dashboards</li>
                <li>Integration & distribution specs</li>
                <li>Governance documentation</li>
              </ul>
            </div>
          </div>
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

        {/* Related Content */}
        <section className="mt-12 mb-8 bg-purple-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Related Learning Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/learn/foundations">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-purple-600">PM Foundations</div>
                <p className="text-sm text-slate-600 mt-1">Core concepts and PM mindset</p>
              </a>
            </Link>
            <Link href="/learn/jargons">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-purple-600">Jargons & Terms</div>
                <p className="text-sm text-slate-600 mt-1">Terminology used across lifecycle stages</p>
              </a>
            </Link>
            <Link href="/frameworks">
              <a className="p-4 bg-white rounded border hover:shadow transition">
                <div className="font-semibold text-purple-600">Frameworks</div>
                <p className="text-sm text-slate-600 mt-1">Decision-making at each stage</p>
              </a>
            </Link>
          </div>
        </section>

        <LessonNavigation 
          previousLesson={{ label: 'Product Foundations', href: '/learn/foundations' }}
          nextLesson={{ label: 'Jargons & PM Terms', href: '/learn/jargons' }}
        />
      </div>
    </Layout>
  )
}
