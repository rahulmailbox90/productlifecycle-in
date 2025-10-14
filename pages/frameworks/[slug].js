export default function FrameworkDetail({params}) {
  return <div>Framework: {params?.slug || 'unknown'}</div>
}
