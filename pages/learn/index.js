import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Learn() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Learning Hub</h1>
      <p className="text-slate-600">Guides, templates and exercises for product managers.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Jargons Glossary</h3>
          <p className="text-sm mt-2">Quick definitions of product and agile terms.</p>
          <Link href="/learn/jargons">
            <a className="inline-block mt-2 px-3 py-1 bg-slate-100 rounded text-blue-700 hover:underline">View Jargons</a>
          </Link>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Templates</h3>
          <p className="text-sm mt-2">BRD / FSD / UAT templates you can copy.</p>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Simulations</h3>
          <p className="text-sm mt-2">Practice exercises (scope decisions, prioritization).</p>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Interview prep</h3>
          <p className="text-sm mt-2">Case-style questions derived from demos.</p>
          </div>
      {/* Product Management Section */}
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
      {/* Stage-wise Explanation End*/}

      </div>
    </Layout>
  )
}
