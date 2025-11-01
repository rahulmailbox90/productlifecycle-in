// Redirect /learn/frameworks to the canonical /frameworks
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/frameworks',
      permanent: true,
    },
  }
}

export default function LearnFrameworks() {
  // This component is never rendered because of the server-side redirect
  return null
}
