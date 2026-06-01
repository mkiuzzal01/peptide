"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Action from "../buttons/Action";
import Bag from "../icons/Bag";
import Container from "../shared/Container";
import { navigationLinks } from "./navLinks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/auth.slice";
import { toast } from "react-toastify";
import { persistor } from "@/redux/store";

interface Props {
  systemInfo: any;
}

export default function Navbar({ systemInfo }: Props) {
  const info = systemInfo?.data;

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await persistor.purge();

    dispatch(logout());

    toast.success("Logout successfully");

    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b">
      <Container className="flex items-center justify-between py-4">
        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-[200px]">
              <Image
                src={info?.logo_full_url || info?.favicon_full_url}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>

            {/* <p className="text-base md:text-lg font-semibold truncate max-w-[140px] md:max-w-full">
              {info?.title}
            </p> */}
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
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

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4">
          {/* CART */}
          <Link href="/cart">
            <Bag
              size="w-10 h-10"
              bgColor="bg-gray-200"
              className="rounded-full"
            />
          </Link>

          {/* AUTH */}
          {user ? (
            <Action
              onClick={handleLogout}
              className="rounded-full px-4 py-5"
              name="Logout"
            />
          ) : (
            <Link href="/sign-in">
              <Action className="rounded-full px-4 py-5" name="Sign in" />
            </Link>
          )}
        </div>

        {/* MOBILE RIGHT SIDE */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* CART */}
          <Link
            href="/cart"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center"
          >
            <Bag
              size="w-10 h-10"
              bgColor="bg-gray-200"
              className="rounded-full"
            />
          </Link>

          {/* MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-gray-800" />
            ) : (
              <Menu className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white shadow-md">
          <Container className="py-5 flex flex-col gap-5">
            {/* NAVIGATION */}
            <div className="flex flex-col gap-4">
              {navigationLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
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

            {/* AUTH */}
            {user ? (
              <Action
                onClick={handleLogout}
                className="rounded-full w-full py-5"
                name="Logout"
              />
            ) : (
              <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                <Action className="rounded-full w-full py-5" name="Sign in" />
              </Link>
            )}
          </Container>
        </div>
      )}
    </nav>
  );
}
