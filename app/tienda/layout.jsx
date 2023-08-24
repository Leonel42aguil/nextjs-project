import Link from "next/link";

export const metadata = {
    title: "Tienda Oficial",
  };

export default function layoutTienda({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>
        <ul>
          <li>
            <Link href="/tienda/categoria">Categoria</Link>
          </li>
          <li>
            <Link href="/tienda/categoria/computadora">Productos</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
