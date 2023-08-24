import Link from 'next/link'

export default function notfound() {
  return (
    <section>
        <h1>404</h1>
        <p>Page No encontrada, sorry for you</p>
        <Link href="/">Volver-Home</Link>
    </section>
  )
}
