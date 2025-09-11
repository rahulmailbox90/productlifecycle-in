import Layout from '../../components/Layout'
import { products } from '../../lib/products'
import ProductCard from '../../components/ProductCard'

export default function ProductsPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Demo Products / Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(p => <ProductCard key={p.slug} product={p} />)}
      </div>
    </Layout>
  )
}
