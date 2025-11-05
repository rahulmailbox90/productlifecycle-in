import Layout from '../../components/Layout'

export default function Development() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Development</h1>

      <p className="text-lg text-slate-700 mb-4">From idea to product — understanding how things get built.
      PMs may not code, but they own the process that turns user problems into working software.</p>

      <h2 className="text-xl font-semibold mt-4">In this section, you’ll learn about:</h2>
      <ul className="list-disc list-inside mt-2 text-slate-700 space-y-1">
        <li>Agile, Scrum, and Kanban methodologies.</li>
        <li>Writing and managing user stories, epics, and acceptance criteria.</li>
        <li>Collaborating with engineering and QA teams.</li>
        <li>Managing releases, sprints, and backlog prioritization.</li>
        <li>Handling product delivery challenges (scope, dependencies, trade-offs).</li>
      </ul>

      <p className="text-slate-600 mt-4">Includes real product development journeys showing how PMs navigate build cycles efficiently.</p>

      <p className="mt-4 text-slate-700">🧠 Learn to speak the language of development — and earn your engineers’ trust.</p>
    </Layout>
  )
}
