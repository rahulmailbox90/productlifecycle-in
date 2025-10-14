export async function fetchData(path){
  const res = await fetch(path)
  return res.json()
}
