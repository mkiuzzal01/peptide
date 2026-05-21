import Link from "next/link";
import Facebook from "../icons/Facebook";
import LinkedIn from "../icons/LinkedIn";
import Logo from "../icons/Logo";
import Twitter from "../icons/Twitter";
import Container from "../shared/Container";
import { footerLinks } from "./navLinks";

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="flex flex-col gap-4">
            <Logo size={32} />

            <h2 className="text-2xl font-semibold leading-snug">
              Engineered for Research Precision
            </h2>

            {/* Social */}
            <div className="flex items-center gap-3 mt-2">
              {[Twitter, Facebook, LinkedIn].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#E6E9ED] hover:bg-[#037FFF] hover:text-white transition"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm text-gray-900">
              Contact with us
            </h3>

            <a className="text-[#037FFF] text-sm" href="tel:+1123xxxxxx">
              +1 123 xxx xxx
            </a>

            <a
              className="text-[#037FFF] text-sm"
              href="mailto:support@peptidelabsusa.com"
            >
              support@peptidelabsusa.com
            </a>
          </div>

          {/* RIGHT (Newsletter) */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm text-gray-900">
              Get in touch with us
            </h3>

            <div className="flex">
              <input
                className="w-full h-10 px-3 text-sm border border-[#037FFF] rounded-l-full outline-none"
                placeholder="Enter email address"
              />

              <button className="bg-[#037FFF] text-white px-5 text-sm rounded-r-full hover:bg-[#0266d6] transition">
                Subscribe
              </button>
            </div>
            <div className="flex justify-between items-center gap-3">
              {footerLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-sm text-[#637381]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-gray-500 leading-relaxed space-y-3 py-10">
          <p>
            All products on this site are for research and development use only.
            Products are not for human consumption of any kind. The statements
            made on this website have not been evaluated by the US Food and Drug
            Administration. The statements and the products of this company are
            not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p>
            Direct Peptides is a chemical supplier. Direct Peptides is not a
            compounding pharmacy or chemical compounding facility as defined
            under 503A of the Federal Food, Drug, and Cosmetic Act. Direct
            Peptides is not an outsourcing facility as defined under 503B of the
            Federal Food, Drug, and Cosmetic Act.
          </p>
          <p>
            All products are sold for research, laboratory, or analytical
            purposes only, and are not for human consumption.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-text-muted py-6 text-center text-xs text-gray-500">
          © 2023 All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}
