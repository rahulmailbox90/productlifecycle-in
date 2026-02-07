import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Breadcrumb({ items }) {
  // items = [{ label: 'Learn', href: '/learn' }, { label: 'Foundations', href: '/learn/foundations' }]
  if (!items || items.length === 0) return null
  
  return (
    <nav aria-label="breadcrumb" className="mb-6 text-sm text-slate-600">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {idx > 0 && <span className="text-slate-400">/</span>}
            {item.href ? (
              <Link href={item.href}>
                <a className="hover:text-slate-900 hover:underline text-blue-600">{item.label}</a>
              </Link>
            ) : (
              <span className="text-slate-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
