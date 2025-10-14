import Layout from '../../components/Layout'

export default function FiveWhys() {
  return (
    <Layout>
      <section className="prose">
        <h1>5 Whys</h1>
        <p>Root-cause analysis by iteratively asking <strong>why</strong> a problem occurs. Keep asking until you reach actionable causes; avoid jumping to solutions too early.</p>

        <h2>When to use</h2>
        <p>Best for simple incidents or initial root-cause analysis; complement with Fishbone for complex problems.</p>
      </section>
    </Layout>
  )
}
