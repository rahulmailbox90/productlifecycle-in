import { products } from '../../../lib/products'

export default function handler(req, res) {
  const { slug } = req.query
  const p = products.find(x => x.slug === slug)
  if (!p) return res.status(404).json({ error: 'not found' })
  res.status(200).json(p)
}
