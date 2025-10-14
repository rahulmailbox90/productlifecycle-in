import Layout from '../../components/Layout'

export default function Mece() {
  return (
    <Layout>
      <section className="prose">
        <h1>MECE</h1>
        <p><strong>Mutually Exclusive, Collectively Exhaustive</strong> — structure information so parts don't overlap and together cover the whole. MECE is useful for scoping problem spaces and avoiding double counting.</p>

        <h2>When to use</h2>
        <p>During scoping and when creating trees of hypotheses or segmentation to ensure coverage and non-overlap.</p>
      </section>
    </Layout>
  )
}
