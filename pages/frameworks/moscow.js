import Layout from '../../components/Layout'

export default function Moscow() {
  return (
    <Layout>
      <section className="prose">
        <h1>MoSCoW</h1>
        <p>Must / Should / Could / Won’t — a simple prioritization technique to align stakeholders on feature importance.</p>

        <h2>When to use</h2>
        <p>For planning releases with clear stakeholder trade-offs and when negotiating scope.</p>
        <p><a href="/downloads/frameworks-worksheet.md" className="text-sky-600 hover:underline">Download worksheet</a></p>
      </section>
    </Layout>
  )
}
