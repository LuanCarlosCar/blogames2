"use client";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

export default function Footer() {
  return (
    <footer
      className={`${nunito.className} flex justify-between px-80 py-6 border-t border-stone-200`}
    >
      <select>
        <option value="volvo">PT-BR</option>
        <option value="saab">EN-US</option>
      </select>

      <nav>
        <ul className="flex items-center gap-8">
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Política de privacidade</li>
        </ul>
      </nav>
    </footer>
  );
}
