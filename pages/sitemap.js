import Layout from '../components/Layout'
import Link from 'next/link'

export default function Sitemap() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-6">Site Map</h1>
        <p className="text-lg text-slate-700 mb-12">Navigate all content and learning paths on ProductLifecycle.in</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Learning Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">📚 Learning Paths</h2>
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/learn"><a className="hover:text-blue-600 hover:underline">Learn Overview</a></Link></li>
              <li><Link href="/learn/foundations"><a className="hover:text-blue-600 hover:underline">→ Foundations</a></Link></li>
              <li><Link href="/learn/lifecycles"><a className="hover:text-blue-600 hover:underline">→ Product Lifecycle</a></Link></li>
              <li><Link href="/learn/jargons"><a className="hover:text-blue-600 hover:underline">→ Jargons & Terms</a></Link></li>
              <li><Link href="/frameworks"><a className="hover:text-blue-600 hover:underline">→ Frameworks & Tools</a></Link></li>
            </ul>
          </section>

          {/* Frameworks Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">🛠️ Frameworks</h2>
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/frameworks"><a className="hover:text-blue-600 hover:underline">All Frameworks</a></Link></li>
              <li><Link href="/frameworks/rice"><a className="hover:text-blue-600 hover:underline">→ RICE Prioritization</a></Link></li>
              <li><Link href="/frameworks/moscow"><a className="hover:text-blue-600 hover:underline">→ MoSCoW Method</a></Link></li>
              <li><Link href="/frameworks/kano"><a className="hover:text-blue-600 hover:underline">→ Kano Model</a></Link></li>
              <li><Link href="/frameworks/ice"><a className="hover:text-blue-600 hover:underline">→ ICE Scoring</a></Link></li>
              <li><Link href="/frameworks/jtbd"><a className="hover:text-blue-600 hover:underline">→ Jobs to Be Done</a></Link></li>
            </ul>
          </section>

          {/* Resources Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-green-600">📋 Resources</h2>
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/resources/templates"><a className="hover:text-blue-600 hover:underline">Templates & Artefacts</a></Link></li>
              <li><Link href="/resources/tools"><a className="hover:text-blue-600 hover:underline">Tools & Recommendations</a></Link></li>
              <li><Link href="/downloads"><a className="hover:text-blue-600 hover:underline">Downloads</a></Link></li>
            </ul>
          </section>

          {/* Products & Case Studies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">💼 Case Studies</h2>
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/products"><a className="hover:text-blue-600 hover:underline">All Fintech Products</a></Link></li>
              <li><Link href="/case-studies"><a className="hover:text-blue-600 hover:underline">Case Studies</a></Link></li>
            </ul>
          </section>

          {/* Career & Guides */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-600">🚀 Career</h2>
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/career"><a className="hover:text-blue-600 hover:underline">Career Overview</a></Link></li>
              <li><Link href="/career/beginner"><a className="hover:text-blue-600 hover:underline">→ Beginner Path</a></Link></li>
              <li><Link href="/career/intermediate"><a className="hover:text-blue-600 hover:underline">→ Intermediate Path</a></Link></li>
              <li><Link href="/career/advanced"><a className="hover:text-blue-600 hover:underline">→ Advanced Path</a></Link></li>
            </ul>
          </section>

          {/* General */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-600">🔗 General</h2>
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/about"><a className="hover:text-blue-600 hover:underline">About This Site</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-blue-600 hover:underline">Contact & Feedback</a></Link></li>
              <li><Link href="/docs"><a className="hover:text-blue-600 hover:underline">Documentation</a></Link></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 p-6 bg-slate-50 rounded-lg">
          <h3 className="font-semibold mb-3">Search Tips</h3>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>• Use Ctrl+F (Cmd+F on Mac) to search for specific terms on this page</li>
            <li>• Start your learning with <Link href="/learn/foundations"><a className="text-blue-600 hover:underline">Foundations</a></Link> for a strong foundation</li>
            <li>• Use <Link href="/learn/jargons"><a className="text-blue-600 hover:underline">Jargons</a></Link> as a quick reference while exploring other content</li>
            <li>• Explore <Link href="/frameworks"><a className="text-blue-600 hover:underline">Frameworks</a></Link> to see practical decision-making tools</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
