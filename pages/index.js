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
    </Layout>
  )
}
