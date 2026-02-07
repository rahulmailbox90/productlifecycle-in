import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Learn() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Master Product Management</h1>
          <p className="text-lg text-slate-700 mb-4">From fundamentals to execution — a structured learning path for understanding the complete product lifecycle.</p>
          <p className="text-slate-600">Whether you're new to PM or refining your expertise, start here and build mastery stage by stage.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Recommended Learning Path */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Recommended Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Link href="/learn/foundations">
                <a className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border-l-4 border-blue-500">
                  <div className="text-sm font-semibold text-blue-600">STEP 1</div>
                  <h3 className="text-lg font-semibold mt-2">Foundations</h3>
                  <p className="text-sm text-slate-600 mt-2">PM basics, history, mindset, and core responsibilities</p>
                  <div className="mt-4 text-blue-600 hover:text-blue-700">Start →</div>
                </a>
              </Link>
            </div>

            <div className="relative">
              <Link href="/learn/lifecycles">
                <a className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border-l-4 border-purple-500">
                  <div className="text-sm font-semibold text-purple-600">STEP 2</div>
                  <h3 className="text-lg font-semibold mt-2">Product Lifecycle</h3>
                  <p className="text-sm text-slate-600 mt-2">End-to-end product journey with stage-specific deliverables</p>
                  <div className="mt-4 text-purple-600 hover:text-purple-700">Explore →</div>
                </a>
              </Link>
            </div>

            <div className="relative">
              <Link href="/learn/jargons">
                <a className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border-l-4 border-green-500">
                  <div className="text-sm font-semibold text-green-600">STEP 3</div>
                  <h3 className="text-lg font-semibold mt-2">Jargons & Terms</h3>
                  <p className="text-sm text-slate-600 mt-2">Product and agile terminology glossary with real-world use cases</p>
                  <div className="mt-4 text-green-600 hover:text-green-700">Learn →</div>
                </a>
              </Link>
            </div>

            <div className="relative">
              <Link href="/frameworks">
                <a className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border-l-4 border-orange-500">
                  <div className="text-sm font-semibold text-orange-600">STEP 4</div>
                  <h3 className="text-lg font-semibold mt-2">Frameworks</h3>
                  <p className="text-sm text-slate-600 mt-2">RICE, MoSCoW, Kano, and other prioritization techniques</p>
                  <div className="mt-4 text-orange-600 hover:text-orange-700">Dive in →</div>
                </a>
              </Link>
            </div>

            <div className="relative">
              <Link href="/resources/templates">
                <a className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border-l-4 border-red-500">
                  <div className="text-sm font-semibold text-red-600">STEP 5</div>
                  <h3 className="text-lg font-semibold mt-2">Resources</h3>
                  <p className="text-sm text-slate-600 mt-2">Templates, tools, and practical artefacts for execution</p>
                  <div className="mt-4 text-red-600 hover:text-red-700">Access →</div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Fintech-Specific Learning */}
        <section className="mb-12 bg-slate-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Fintech Product Types Matter</h2>
          <p className="text-slate-700 mb-6">Product management approaches differ significantly based on the fintech product category. Our lifecycle stages and deliverables are mapped to real fintech use cases:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🏦</div>
              <div>
                <h3 className="font-semibold">Back-Office & Operations</h3>
                <p className="text-sm text-slate-600 mt-1">Workflows, data accuracy, controls, and compliance — for internal teams</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">📱</div>
              <div>
                <h3 className="font-semibold">Consumer-Facing Apps</h3>
                <p className="text-sm text-slate-600 mt-1">UX, onboarding, performance, metrics — for retail or institutional customers</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">📈</div>
              <div>
                <h3 className="font-semibold">Portfolio Management</h3>
                <p className="text-sm text-slate-600 mt-1">Complex calculations, reporting, data integrity — for analysts and portfolio managers</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">📊</div>
              <div>
                <h3 className="font-semibold">Reference & Market Data</h3>
                <p className="text-sm text-slate-600 mt-1">Data quality, lineage, governance — foundational to all fintech products</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-slate-700"><Link href="/learn/lifecycles"><a className="text-blue-600 hover:underline">See how lifecycle stages vary by product type →</a></Link></p>
        </section>

        {/* Quick Access Resources */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Quick Access Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-2xl mb-3">📚</div>
              <h3 className="font-semibold mb-2">Jargons Glossary</h3>
              <p className="text-sm text-slate-600 mb-4">200+ terms with definitions and real-world usage contexts</p>
              <Link href="/learn/jargons">
                <a className="text-blue-600 hover:text-blue-700 text-sm font-semibold">Explore Glossary →</a>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="font-semibold mb-2">Templates & Artefacts</h3>
              <p className="text-sm text-slate-600 mb-4">PRD, roadmap, and workflow templates ready to customize</p>
              <Link href="/resources/templates">
                <a className="text-blue-600 hover:text-blue-700 text-sm font-semibold">Browse Templates →</a>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-2xl mb-3">🛠️</div>
              <h3 className="font-semibold mb-2">Frameworks</h3>
              <p className="text-sm text-slate-600 mb-4">Prioritization and decision-making frameworks with examples</p>
              <Link href="/frameworks">
                <a className="text-blue-600 hover:text-blue-700 text-sm font-semibold">Learn Frameworks →</a>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-2xl mb-3">💼</div>
              <h3 className="font-semibold mb-2">Case Studies</h3>
              <p className="text-sm text-slate-600 mb-4">Real fintech product examples and strategy breakdowns</p>
              <Link href="/case-studies">
                <a className="text-blue-600 hover:text-blue-700 text-sm font-semibold">View Cases →</a>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-2xl mb-3">📥</div>
              <h3 className="font-semibold mb-2">Downloads</h3>
              <p className="text-sm text-slate-600 mb-4">Downloadable templates, guides, and handbooks</p>
              <Link href="/downloads">
                <a className="text-blue-600 hover:text-blue-700 text-sm font-semibold">Get Templates →</a>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-2xl mb-3">🗺️</div>
              <h3 className="font-semibold mb-2">Site Map</h3>
              <p className="text-sm text-slate-600 mb-4">Navigate all content and learning paths</p>
              <Link href="/sitemap">
                <a className="text-blue-600 hover:text-blue-700 text-sm font-semibold">View Map →</a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
