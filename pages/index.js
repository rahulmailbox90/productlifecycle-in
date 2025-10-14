import Link from 'next/link'
import Layout from '../components/Layout'
import { products } from '../lib/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <Layout>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Product Lifecycle. Hands-on. End-to-End.</h1>
        <p className="text-slate-600">Learn product management for financial services by interacting with live demos, reviewing BRDs/FSDs and practicing PM scenarios.</p>
        <div className="mt-6">
          <div className="flex gap-3">
            <Link href="/products"><a className="inline-block bg-slate-900 text-white px-4 py-2 rounded">Explore Demo Products</a></Link>
            <Link href="/learn/jargons"><a className="inline-block bg-white border border-slate-200 px-4 py-2 rounded">Glossary: Jargons</a></Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured case studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map(p => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      {/* Product Management Section moved from Learn */}
      <section className="mt-12 px-4 py-8 bg-gray-50 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">📊 Stages of Product Management</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Product management is a structured journey from ideation to growth.  
          Let’s explore these stages with a real-world example – <b>Uber</b>.  
        </p>

        {/* Visual Framework */}
        <div className="mb-6">
          <img 
            src="/images/product-management-stages.png" 
            alt="Product Management Stages Visual Framework" 
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Stage-wise Explanation */}
        <div className="space-y-4 text-gray-800">
          <p><b>1. Discovery & Research:</b> Understanding user pain points. Uber saw the gap in urban commuting (difficulty finding cabs, transparency issues).</p>
          <p><b>2. Strategy & Roadmapping:</b> Uber defined its vision: “Tap a button, get a ride.” Roadmap started with small markets before expanding globally.</p>
          <p><b>3. Design & Prototyping:</b> Simple mobile interface for booking rides and tracking drivers in real-time.</p>
          <p><b>4. Development & Launch:</b> MVP launched in San Francisco to validate assumptions.</p>
          <p><b>5. Go-to-Market & Scaling:</b> Aggressive driver acquisition and rider promotions.</p>
          <p><b>6. Monitoring & Iteration:</b> Data-driven feature additions like UberPool, surge pricing, driver ratings.</p>
          <p><b>7. Growth & Expansion:</b> Expansion to 70+ countries, diversification into Uber Eats, freight, etc.</p>
        </div>

        {/* Download Button */}
        <div className="mt-8">
          <a 
            href="/downloads/Product-Management-Uber-Case.pdf" 
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            📥 Download Full Training Material
          </a>
        </div>
      </section>
    </Layout>
  )
}
