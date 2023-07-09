import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      <ul
        className={`${nunito.className} flex gap-12 justify-center text-lg mt-10 mb-14`}
      >
        <li>Inicio</li>
        <li>Categorias</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>

      <main>{children}</main>
      <Footer />
    </div>
  );
}
