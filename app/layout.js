import NavBar from "@/components/NavBar";
import { Roboto } from "next/font/google"

export const metadata = {
  title: "App-Next.js-Home",
  description: "Pagina principal",
  keywords:"Tienda, oline, ecommerce"
};

const roboto = Roboto ({
  weight: ["300","400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
} 
