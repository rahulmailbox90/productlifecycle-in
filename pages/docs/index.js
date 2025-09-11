import Layout from '../../components/Layout'
import Link from 'next/link'
import { products } from '../../lib/products'

export default function Docs() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Lifecycle Docs</h1>
      <p className="text-slate-600">Browse product lifecycle artifacts. Each product has BRD & FSD samples you can review and reuse.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(p => (
          <div key={p.slug} className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-slate-500 mt-1">{p.short}</p>
            <div className="mt-3">
              <Link href={`/products/${p.slug}`}><a className="text-sm text-slate-700">Open artifacts</a></Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
