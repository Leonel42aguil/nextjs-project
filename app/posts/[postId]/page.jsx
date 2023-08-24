import { Suspense } from "react";
import PostPages from "../page";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}
export default async function Page({ params }) {
  const post = await loadPost(params.postId);
  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
      <hr />
      <h3>Otras Publicaciones</h3>
      <Suspense fallback={<div>Cargando Publicaciones.......</div>}>{/*Sirve para cuando una pagina esta cargada de componentes*/}
        <PostPages />
      </Suspense>
    </div>
  );
}
