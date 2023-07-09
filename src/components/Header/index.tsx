"use client";

import logo from "../../../public/logo.svg";
import Image from "next/image";
import IconStyle from "@/common/Styles/IconStyle";

import {
  PiFacebookLogo,
  PiTwitterLogo,
  PiTwitchLogo,
  PiDiscordLogo,
  PiUserLight,
  PiMagnifyingGlassLight,
  PiListLight,
} from "react-icons/pi";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-80 py-5  border-b border-stone-200">
      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <IconStyle icon={PiFacebookLogo} />
          </li>
          <li>
            <IconStyle icon={PiTwitterLogo} />
          </li>
          <li>
            <IconStyle icon={PiTwitchLogo} />
          </li>
          <li>
            <IconStyle icon={PiDiscordLogo} />
          </li>
        </ul>
      </nav>

      <Image src={logo} alt="Picture of the author" />

      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <IconStyle icon={PiMagnifyingGlassLight} />
          </li>
          <li>
            <IconStyle icon={PiUserLight} />
          </li>
          <li>
            <IconStyle icon={PiListLight} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
