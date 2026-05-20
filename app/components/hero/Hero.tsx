import Image from "next/image";
import hero from "@/public/hero/hero_1.png";
import Action from "../buttons/Action";
import ArrowIcon from "../icons/ArrowIcon";

export default function Hero() {
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
          Trusted Peptide Solutions for Scientific Research
        </h1>

        <p className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Supporting laboratories and researchers with reliable peptide
          products, transparent testing, and fast fulfillment.
        </p>

        {/* Button */}
        <div className="mt-5 sm:mt-8 flex justify-center">
          <Action
            iconPosition="right"
            name="View All Products"
            title="Browse Products"
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
        </div>
      </div>
    </section>
  );
}
