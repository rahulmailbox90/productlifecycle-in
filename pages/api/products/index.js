import { products } from '../../../lib/products'

export default function handler(req, res) {
  res.status(200).json(products.map(p => ({ slug: p.slug, title: p.title, short: p.short, tagline: p.tagline })))
}
