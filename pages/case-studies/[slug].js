export default function CaseStudyDetail({params}) {
  return <div>Case Study: {params?.slug || 'unknown'}</div>
}
