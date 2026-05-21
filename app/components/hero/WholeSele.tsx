import Image from "next/image";
import hero from "@/public/hero/hero.jpg";
import Action from "../buttons/Action";
import ArrowIcon from "../icons/ArrowIcon";
import Link from "next/link";

export default function WholeSele() {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Wrapper (IMPORTANT for mobile stability) */}
      <div className="absolute inset-0">
        <Image src={hero} alt="Hero background" fill className="object-cover" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight">
          Wholesale Peptide Supply for Research Professionals
        </h1>

        <p className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Flexible bulk ordering solutions for laboratories, distributors, and
          research facilities backed by verified quality standards and dedicated
          wholesale support.
        </p>

        {/* Button */}
        <div className="mt-5 sm:mt-8 flex justify-center gap-4">
          <Link href={"/contact-us"}>
            <Action
              name="Contact Us"
              title="Contact Us"
              className="
      bg-[#037FFF] hover:bg-[#0266d6]
      text-white
      h-14
      px-4 sm:px-6
      rounded-full
      text-sm sm:text-base
      font-semibold
      transition-all duration-200
      flex items-center gap-4
    "
            />
          </Link>
          <Link href={"/wholesale"}>
            <Action
              iconPosition="right"
              name="Request a Order"
              title="Request a Order"
              icon={<ArrowIcon />}
              className="
      bg-[#037FFF] hover:bg-[#0266d6]
      text-white
      h-14
      pl-6 pr-2
      rounded-full
      text-sm sm:text-base
      font-semibold
      transition-all duration-200
      flex items-center gap-4
    "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
