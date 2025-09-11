import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <article className="bg-white p-4 rounded shadow-sm">
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-slate-600 mt-1">{product.short}</p>
      <p className="text-sm text-slate-500 mt-2">{product.tagline}</p>
      <div className="mt-4 flex gap-2">
        <Link href={`/products/${product.slug}`}>
          <a className="px-3 py-1 bg-slate-900 text-white rounded text-sm">Open Case Study</a>
        </Link>
        <Link href={`/products/${product.slug}?demo=true`}>
          <a className="px-3 py-1 border rounded text-sm">Open Demo</a>
        </Link>
      </div>
    </article>
  )
}
