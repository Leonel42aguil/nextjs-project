
async function loadPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
} 

export default async function page() {
   const posts = await loadPosts()
//    console.log(posts);
  return (
    <div>
        {
            posts.map((p) => (
                <div key={p.id}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                </div>
            ))
        }
    </div>
  )
}
// 1 hora y 7 minutos
