"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import Facebook from "../icons/Facebook";
import LinkedIn from "../icons/LinkedIn";
import Twitter from "../icons/Twitter";
import { useSubscribeMutation } from "@/redux/features/subscribe/subscribe.api";
import Container from "../shared/Container";
import { footerLinks } from "./navLinks";
import Image from "next/image";

interface Props {
  systemInfo: any;
  socialLinks: any;
  proofOfManufacturing: any;
}

export default function Footer({
  systemInfo,
  socialLinks,
  proofOfManufacturing,
}: Props) {
  const info = systemInfo?.data;
  const socialData = socialLinks?.data;
  const proofData = proofOfManufacturing?.data;

  const [subscribe, { isLoading }] = useSubscribeMutation();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      return toast.error("Email is required");
    }

    try {
      const res = await subscribe({ email }).unwrap();

      toast.success(res?.message || "Subscribed successfully");

      setEmail("");
    } catch (error: any) {
      toast.error(
        error?.data?.message || "An error occurred while subscribing",
      );
    }
  };

  const socials = [
    {
      icon: <Twitter />,
      url: socialData?.twitter_link,
    },
    {
      icon: <Facebook />,
      url: socialData?.facebook_link,
    },
    {
      icon: <LinkedIn />,
      url: socialData?.linkedin_link,
    },
  ];

  return (
    <footer className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* LEFT */}
          <div className="flex flex-col gap-4">
            {/* <Logo /> */}
            <Image
              src={info?.logo_full_url || info?.favicon_full_url}
              alt="logo"
              width={200}
              height={200}
              className="object-contain"
            />

            {/* SOCIAL */}
            <div className="mt-2 flex items-center gap-3">
              {socials.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          group flex h-9 w-9 items-center justify-center
          rounded-full bg-[#E6E9ED]
          text-gray-600
          transition-all duration-200
          hover:bg-[#037FFF] hover:text-white
        "
                  >
                    {Icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* MIDDLE */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-gray-900">{}</h3>

            <a
              className="text-sm text-[#037FFF] hover:underline"
              href={`tel:${info?.number}`}
            >
              {info?.number}
            </a>

            <a
              className="text-sm text-[#037FFF] hover:underline"
              href={`mailto:${info?.email}`}
            >
              {info?.email}
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Get in touch with us
            </h3>

            {/* NEWSLETTER */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full overflow-hidden rounded-full border border-[#037FFF]"
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                aria-label="Email address"
                className="
                  h-11 w-full bg-white px-4 text-sm
                  outline-none placeholder:text-gray-400
                "
              />

              <button
                type="submit"
                disabled={isLoading}
                className="
                  flex shrink-0 items-center justify-center
                  bg-[#037FFF] px-5 text-sm font-medium text-white
                  transition hover:bg-[#0266d6]
                  disabled:cursor-not-allowed disabled:opacity-70
                "
              >
                {isLoading ? "Submitting..." : "Subscribe"}
              </button>
            </form>

            {/* FOOTER LINKS */}
            {/* FOOTER LINKS */}
            <div className="flex flex-wrap items-center gap-3">
              {footerLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-sm text-[#637381] transition hover:text-[#037FFF]"
                >
                  {link.title}
                </Link>
              ))}

              {/* MANUFACTURING PROOF LINK (NEW) */}
              {proofData && (
                <a
                  href={`${proofData?.manufacturing_proof}`}
                  target="_blank"
                  className="text-sm text-[#637381] transition hover:text-[#037FFF]"
                >
                  Manufacturing Proof
                </a>
              )}
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="space-y-3 py-10 text-xs leading-relaxed text-gray-500">
          <p>
            All products on this site are for research and development use only.
            Products are not for human consumption of any kind.
          </p>

          <p>
            Direct Peptides is a chemical supplier and not a compounding
            pharmacy or outsourcing facility under the Federal Food, Drug, and
            Cosmetic Act.
          </p>

          <p>
            All products are sold for laboratory, analytical, and research
            purposes only.
          </p>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
          {info?.copyright_text}
        </div>
      </Container>
    </footer>
  );
}
