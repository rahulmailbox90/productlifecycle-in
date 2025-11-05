import Layout from '../../components/Layout'

export default function Skills() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Skills</h1>

      <p className="text-lg text-slate-700 mb-4">Build the essential skill set that defines high-performing Product Managers.
      Being a PM is a mix of analytical, strategic, and interpersonal skills.</p>

      <h2 className="text-xl font-semibold mt-4">You’ll learn how to:</h2>
      <ul className="list-disc list-inside mt-2 text-slate-700 space-y-1">
        <li>Communicate and manage stakeholders effectively.</li>
        <li>Write clear PRDs and presentations.</li>
        <li>Analyze data using Excel, Power BI, or SQL.</li>
        <li>Work with design teams using no-code tools (Figma, Miro, Notion).</li>
        <li>Prioritize features and make trade-offs using frameworks like RICE or MoSCoW.</li>
      </ul>

      <p className="text-slate-600 mt-4">Each skill section includes mini projects or case snippets showing how PMs apply these in their daily workflow.</p>

      <p className="mt-4 text-slate-700">🎯 Great PMs are made by consistent skill-building — not just knowledge.</p>
    </Layout>
  )
}
