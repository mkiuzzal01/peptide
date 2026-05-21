"use client";

import { useState } from "react";
import Container from "@/app/components/shared/Container";
import productImg1 from "@/public/products/image 32.png";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import ProductTabs from "./ProductTabs";
import QuantityControl from "@/app/components/shared/QuantityControl";

interface Props {
  slug: string;
}

const productDetails = {
  id: 1,
  title: "BPC-157",
  image: productImg1,
  cas: "CAS #: 137525-51-0",
  size: [5, 10, 15],
  quantityOptions: ["Single Vial", "Pack of 10"],
  price: 39,
};

export default function ProductDetails({ slug }: Props) {
  // Selected States
  const [selectedSize, setSelectedSize] = useState<number>(5);

  const [selectedQuantityOption, setSelectedQuantityOption] =
    useState<string>("Single Vial");

  const [quantity, setQuantity] = useState<number>(1);

  // Counter Functions
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Container>
      <div className="min-h-screen py-10">
        <div>
          {/* Left Side Image + Right Side Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left Side Image */}
            <div className="bg-white rounded-3xl p-10 flex items-center justify-center">
              <Image
                src={productDetails.image}
                alt={productDetails.title}
                className="w-[210px] h-auto object-contain"
              />
            </div>

            {/* Right Side Content */}
            <div className="bg-white rounded-3xl p-6 space-y-4">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-400">
                    Order Now, Ships Today
                  </p>

                  <h1 className="text-4xl font-bold text-[#222] mt-1">
                    {productDetails.title}
                  </h1>

                  <p className="text-sm text-gray-400 mt-1">
                    {productDetails.cas}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold text-[#222]">
                    ${productDetails.price}.00
                  </p>

                  <p className="text-sm text-gray-400">One-time</p>
                </div>
              </div>

              {/* Size & Quantity */}
              <div className="flex justify-between items-center gap-6">
                {/* Size */}
                <div>
                  <p className="text-sm font-medium text-[#222] mb-3">Size</p>

                  <div className="flex gap-2 flex-wrap">
                    {productDetails.size.map((size) => {
                      const isActive = selectedSize === size;

                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-1.5 rounded-full text-sm border transition
                          ${
                            isActive
                              ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                              : "bg-white text-gray-500 border-gray-200 hover:border-[#0A84FF]"
                          }`}
                        >
                          {size} mg
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity Options */}
                <div>
                  <p className="text-sm font-medium text-[#222] mb-3">
                    Quantity
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {productDetails.quantityOptions.map((item) => {
                      const isActive = selectedQuantityOption === item;

                      return (
                        <button
                          key={item}
                          onClick={() => setSelectedQuantityOption(item)}
                          className={`px-4 py-1.5 rounded-full text-sm border transition
                          ${
                            isActive
                              ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                              : "bg-white text-gray-500 border-gray-200 hover:border-[#0A84FF]"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Counter + Button */}
              <div className="flex justify-between items-center">
                <QuantityControl
                  quantity={quantity}
                  onDecrease={handleDecrease}
                  onIncrease={handleIncrease}
                />

                <button className="bg-[#0A84FF] hover:bg-[#0077f0] transition text-white px-10 py-3 rounded-full text-sm font-medium">
                  Add to Cart
                </button>
              </div>

              {/* Research Use */}
              <div className="bg-[#f8f8f8] rounded-2xl p-4">
                <h3 className="font-semibold text-sm text-[#222] mb-2">
                  Research Use Only
                </h3>

                <p className="text-xs leading-5 text-gray-500">
                  All products are intended solely for laboratory research and
                  are not for human or animal consumption. By purchasing, the
                  buyer agrees to use these products in compliance with all
                  applicable laws.
                </p>
              </div>

              {/* Certificate */}
              <div className="bg-[#f8f8f8] rounded-2xl p-4">
                <ProductTabs />
              </div>
            </div>
          </div>

          {/* Product Article Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 py-16">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-5">
                DP3-R Overview
              </h2>

              <p className="text-[#6B7280] leading-8 text-sm">
                DP3-R is a synthetic investigational peptide developed as a
                multi-pathway agonist. It is currently being studied for its
                potential effects on receptor-mediated signaling, molecular
                dynamics, and endocrine function in preclinical research models.
                By activating multiple target receptor subtypes, DP3-R
                demonstrates broad systemic effects under investigation for
                their relevance in endocrine and pathway-level research.
              </p>

              <button className="mt-6 text-[#2563EB] text-sm font-medium hover:underline">
                Jastreboff A.M. et al. (2023).
              </button>
            </div>

            {/* History */}
            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-5">
                History
              </h2>

              <p className="text-[#6B7280] leading-8 text-sm">
                The development of DP3-R builds on decades of research into
                peptide signaling science. Early studies with single pathway
                agonists established their role in downstream signaling and
                receptor activity. Subsequent research expanded to dual agonist
                frameworks, paving the way for DP3-R, which uniquely integrates
                three pathway targets. This multi-agonist design reflects a new
                direction in peptide research aimed at investigating broader
                receptor-mediated modulation in preclinical laboratory settings.
              </p>

              <button className="mt-6 text-[#2563EB] text-sm font-medium hover:underline">
                Coskun T. et al. (2022).
              </button>
            </div>

            {/* Structure */}
            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-5">
                DP3-R Structure
              </h2>

              <p className="text-[#6B7280] leading-8 text-sm">
                DP3-R is a synthetic investigational peptide developed as a
                multi-pathway agonist. It is currently being studied for its
                potential effects on receptor-mediated signaling, molecular
                dynamics, and endocrine function in preclinical research models.
              </p>

              <div className="mt-8 space-y-2 text-[#111827] font-medium text-sm">
                <p>CAS #: 2381089-83-2</p>

                <p>
                  Molecular Formula:
                  <span className="font-semibold"> C221H342N46O68</span>
                </p>

                <p>Molecular Weight: 4845.44 g/mol</p>

                <p>PubChem ID: 474492335</p>
              </div>
            </div>

            {/* Research Findings */}
            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-5">
                Research Findings
              </h2>

              <p className="text-[#6B7280] leading-8 text-sm">
                DP3-R has been examined in endocrine and systemic models, with
                studies highlighting its influence on receptor binding kinetics,
                downstream signaling cascades, lipid pathway dynamics, and
                integrated endocrine pathways.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-[#111827] mb-3 text-sm">
                  Key Areas of Research:
                </h4>

                <ul className="list-disc pl-5 space-y-2 text-[#6B7280]">
                  <li>Endocrine: Receptor binding, signaling cascades</li>

                  <li>Pathway: Target subtypes, modulation, dynamics</li>

                  <li>Vascular: Lipid pathways, hepatic signaling, markers</li>

                  <li>
                    Systemic: Multi-pathway signaling, resilience,
                    characterization
                  </li>
                </ul>
              </div>

              <p className="text-[#6B7280] leading-8 text-sm mt-8">
                Together, these findings suggest broad experimental potential
                for DP3-R across endocrine, vascular, and systemic models.
              </p>

              <button className="mt-6 text-[#2563EB] text-sm font-medium hover:underline">
                Jastreboff A.M. et al., New England Journal of Medicine, 2023
              </button>
            </div>

            {/* References */}
            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-6">
                References
              </h2>

              <div className="space-y-5">
                <button className="block text-left text-[#2563EB] hover:underline leading-7 text-sm">
                  Jastreboff A.M. et al. (2023). Triple-hormone receptor agonist
                  retatrutide in obesity — a randomized, controlled trial. N
                  Engl J Med.
                </button>

                <button className="block text-left text-[#2563EB] hover:underline leading-7 text-sm">
                  Coskun T. et al. (2022). Retatrutide: A triple-hormone
                  receptor agonist for obesity and diabetes. Diabetes.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
