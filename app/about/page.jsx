"use client"
import React from "react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter()
  return (
    <div>
      <h1>Hola aca te puedo contar mas de mi</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea rerum quod blanditiis cumque rem quidem in incidunt voluptatem maxime odio quisquam possimus nemo quis itaque voluptates, praesentium nam, officia ipsam quas quos accusantium! Error, accusamus facere odio explicabo labore suscipit deserunt tenetur modi eius velit excepturi minima sapiente optio ab tempora dolor reprehenderit, incidunt culpa distinctio dolore. Eum consequatur unde perferendis ipsam dicta omnis vel modi deserunt aspernatur mollitia, earum blanditiis officiis alias optio iusto ea debitis sint quibusdam tenetur odio? Culpa earum neque nesciunt architecto, reiciendis totam dignissimos officia, nam rerum eius saepe non inventore consequatur natus quam labore?</p>

      <button className="bg-sky-400 px-3 py-2 rounded-md" onClick={() => {
        alert('Hola puedo ejecutar logica antes de reDiccionar a la pagina')
        router.push('/')
      }}>Clickkk</button>
    </div>
  );
}
