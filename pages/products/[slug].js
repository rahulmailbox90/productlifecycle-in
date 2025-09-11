import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { products } from '../../lib/products'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query
  const product = products.find(p => p.slug === slug) || products[0]

  const demoMode = router.query.demo === 'true'

  return (
    <Layout>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-slate-600 mt-1">{product.tagline}</p>

          <section className="mt-6 bg-white p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold">PM's Lens</h2>
            <p className="mt-2"><strong>Personas:</strong> {product.personas.join(', ')}</p>
            <p className="mt-1"><strong>KPIs:</strong> {product.kpis.join(', ')}</p>
          </section>

          <section className="mt-6 bg-white p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold">Artifacts (BRD / FSD)</h2>

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">BRD</h3>
                <div className="mt-2 prose max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{product.brd}</ReactMarkdown>
                </div>
              </div>

              <div>
                <h3 className="font-medium">FSD</h3>
                <div className="mt-2 prose max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{product.fds}</ReactMarkdown>
                </div>
              </div>
            </div>
          </section>

          {demoMode && (
            <section className="mt-6 bg-white p-4 rounded shadow-sm">
              <h2 className="text-lg font-semibold">Interactive Demo Sandbox</h2>
              <p className="text-slate-600 mt-2">This demo simulates the trade lifecycle. Try injecting a trade below and see a simplified flow.</p>

              <DemoSandbox />
            </section>
          )}
        </div>

        <aside>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li><a href="#brd" className="text-slate-700">BRD</a></li>
              <li><a href="#fsd" className="text-slate-700">FSD</a></li>
              <li><a href="?demo=true" className="text-slate-700">Open Demo</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </Layout>
  )
}

function DemoSandbox() {
  const [trades, setTrades] = React.useState([])
  const [form, setForm] = React.useState({ id: '', instrument: 'AAPL', qty: 100, price: 150 })

  function injectTrade(e) {
    e.preventDefault()
    const t = {
      id: form.id || `T-${Date.now()}`,
      instrument: form.instrument,
      qty: Number(form.qty),
      price: Number(form.price),
      status: 'INJECTED',
      ts: new Date().toISOString()
    }
    setTrades([t, ...trades])
    setForm(prev => ({ ...prev, id: '' }))
    // simplified "processing"
    setTimeout(() => {
      setTrades(prev => prev.map(x => x.id === t.id ? { ...x, status: 'MATCHED' } : x))
    }, 1200)
    setTimeout(() => {
      setTrades(prev => prev.map(x => x.id === t.id ? { ...x, status: 'SETTLED' } : x))
    }, 2600)
  }

  return (
    <div>
      <form onSubmit={injectTrade} className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <input className="p-2 border rounded" placeholder="Trade ID (optional)" value={form.id} onChange={e => setForm({...form,id:e.target.value})} />
        <input className="p-2 border rounded" value={form.instrument} onChange={e => setForm({...form,instrument:e.target.value})} />
        <input className="p-2 border rounded" type="number" value={form.qty} onChange={e => setForm({...form,qty:e.target.value})} />
        <div className="flex gap-2">
          <input className="p-2 border rounded w-full" type="number" value={form.price} onChange={e => setForm({...form,price:e.target.value})} />
          <button className="px-3 py-2 bg-emerald-600 text-white rounded">Inject</button>
        </div>
      </form>

      <div className="mt-4">
        <h4 className="font-medium">Recent trades</h4>
        <ul className="mt-2 space-y-2">
          {trades.map(t => (
            <li key={t.id} className="bg-slate-50 border p-2 rounded flex justify-between">
              <div>
                <div className="font-medium">{t.id} — {t.instrument}</div>
                <div className="text-sm text-slate-600">{t.qty} @ {t.price}</div>
              </div>
              <div className="text-sm">
                <div className={`px-2 py-1 rounded text-white ${t.status === 'INJECTED' ? 'bg-orange-500' : t.status==='MATCHED' ? 'bg-blue-600' : 'bg-green-600'}`}>{t.status}</div>
                <div className="text-xs text-slate-500 mt-1">{new Date(t.ts).toLocaleTimeString()}</div>
              </div>
            </li>
          ))}
          {trades.length === 0 && <li className="text-slate-500">No trades yet — inject one to start the flow.</li>}
        </ul>
      </div>
    </div>
  )
}
