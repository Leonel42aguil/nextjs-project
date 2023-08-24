"use client";

import Link from "next/link";

export default function PostsCard({ p }) {
  return (
      <div className="bg-gray-950 p-10">
        <Link href={`/posts/${p.id}`}>
        <h3 className="text-xl font-bold mb-4">
          {p.id}. {p.title}
        </h3>
        </Link>
        <p>{p.body}</p>
        <button
          onClick={() => { 
            alert("Holaaaaaaa");
          }}
        >
          Click
        </button>
      </div>
  );
}
