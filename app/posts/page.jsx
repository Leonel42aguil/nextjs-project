import PostsCard from "@/components/PostsCard"
import "./Posts.css"

async function loadPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    await new Promise((resolve) => setTimeout(resolve,5000))
    
    return data
} 

export default async function PostPages() {
   const posts = await loadPosts()
//    console.log(posts);
  return (
    <div className="grid">
        {
            posts.map((p) => (
               <PostsCard p={p} key={p.id} />
            )) 
        }
    </div>
  )
}
 