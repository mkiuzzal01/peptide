"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Action from "../buttons/Action";
import Bag from "../icons/Bag";
import Logo from "../icons/Logo";
import Container from "../shared/Container";
import { navigationLinks } from "./navLinks";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Logo />
            <p className="text-lg font-semibold">Peptide Labs USA</p>
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#037FFF]"
                    : "text-[#637381] hover:text-[#037FFF]"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link href={"/cart"}>
            <Bag
              size="w-10 h-10"
              bgColor={"bg-gray-200"}
              className="rounded-full"
            />
          </Link>

          <Link href={"/sign-in"}>
            <Action className="rounded-full px-4 py-5" name="Sign in" />
          </Link>
        </div>
      </Container>
    </nav>
  );
}
