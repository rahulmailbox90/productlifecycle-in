import Layout from '../../components/Layout'

export default function Rice() {
  return (
    <Layout>
      <section className="prose">
        <h1>RICE</h1>
        <p><strong>Reach × Impact × Confidence / Effort</strong> — scoring model to prioritize initiatives.</p>
        <h2>Example</h2>
        <pre>Reach: 1000 users
Impact: 3 (medium)
Confidence: 0.8
Effort: 5 person-weeks

Score = (1000 * 3 * 0.8) / 5 = 480</pre>
      </section>
    </Layout>
  )
}
