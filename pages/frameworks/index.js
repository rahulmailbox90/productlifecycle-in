import Layout from '../../components/Layout'

export default function Frameworks() {
  return (
    <Layout>
      <section className="prose max-w-none">
        <h1>Frameworks</h1>
        <p>Common frameworks used in product management for structured thinking, prioritization and decision-making.</p>

        <h2>Structured Thinking Frameworks</h2>
        <ul>
          <li><strong>SCQA</strong> — Situation–Complication–Question–Answer</li>
          <li><strong>PROACT</strong> — Problem–Objectives–Alternatives–Consequences–Trade-offs</li>
          <li><strong>MECE</strong> principle — Mutually Exclusive, Collectively Exhaustive</li>
          <li><strong>5 Whys</strong>, <strong>Fishbone</strong> (Ishikawa), <strong>First Principles Thinking</strong></li>
        </ul>

        <h2>Prioritization Frameworks</h2>
        <ul>
          <li><strong>RICE</strong> — Reach, Impact, Confidence, Effort</li>
          <li><strong>MoSCoW</strong> — Must, Should, Could, Won't</li>
          <li><strong>Kano Model</strong> — Basic / Performance / Delight features</li>
          <li><strong>ICE</strong> — Impact, Confidence, Ease</li>
        </ul>

        <h2>Decision Frameworks</h2>
        <p>Product trade-offs, cost–benefit matrices and risk analysis are common approaches to evaluate options and make decisions.</p>
      </section>
    </Layout>
  )
}
