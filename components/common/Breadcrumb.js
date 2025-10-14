export default function Breadcrumb({items=[]}){
  return <nav aria-label="breadcrumb">{items.join(' / ')}</nav>
}
