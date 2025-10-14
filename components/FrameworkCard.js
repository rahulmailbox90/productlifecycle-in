import Link from 'next/link'

export default function FrameworkCard({slug, title, children, example}) {
  return (
    <article className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-sm text-gray-700 mb-3">{children}</div>
      {example ? (
        <pre className="bg-gray-50 p-2 rounded text-sm overflow-auto">{example}</pre>
      ) : null}
      <div className="mt-3">
        <Link href={`/frameworks/${slug}`}><a className="text-sky-600 hover:underline">Read more →</a></Link>
      </div>
    </article>
  )
}
