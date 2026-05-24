"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Action from "../buttons/Action";
import Bag from "../icons/Bag";
import Logo from "../icons/Logo";
import Container from "../shared/Container";
import { navigationLinks } from "./navLinks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/auth.slice";
import { toast } from "react-toastify";
import { persistor } from "@/redux/store";
import Image from "next/image";

interface Props {
  systemInfo: any;
}

export default function Navbar({ systemInfo }: Props) {
  const info = systemInfo?.data;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const pathname = usePathname();

  const handleLogout = async () => {
    await persistor.purge();
    dispatch(logout());
    toast.success("Logout successfully");
  };

  return (
    <nav className="bg-white">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            {/* <Logo /> */}
            <div className="relative h-10 w-10">
              <Image
                src={"/" + info?.logo || info?.favicon || "/logo.png"}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-lg font-semibold">{info?.title}</p>
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

          {user ? (
            <Action
              onClick={handleLogout}
              className="rounded-full px-4 py-5"
              name="Logout"
            />
          ) : (
            <Link href={"/sign-in"}>
              <Action className="rounded-full px-4 py-5" name="Sign in" />
            </Link>
          )}
        </div>
      </Container>
    </nav>
  );
}
