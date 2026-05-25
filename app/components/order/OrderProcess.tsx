import Image from "next/image";
import Link from "next/link";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import Action from "../buttons/Action";
import ArrowIcon from "../icons/ArrowIcon";

import order from "@/public/order/order (1).jpg";
import order2 from "@/public/order/order (2).jpg";
import order3 from "@/public/order/order (3).jpg";

const orderProcess = [
  {
    id: 1,
    title: "Submit Inquiry",
    description:
      "Fill out the request form with your product details, required quantity, and any specific instructions.",
    image: order,
  },

  {
    id: 2,
    title: "Discuss Requirements",
    description:
      "Our team will contact you within 24 hours to confirm requirements and answer any questions.",
    image: order2,
  },

  {
    id: 3,
    title: "Receive Your Quote",
    description:
      "Receive a complete quotation including pricing, product details, and shipping options.",
    image: order3,
  },
];

export default function OrderProcess() {
  return (
    <section className="py-14 lg:py-20">
      <Container>
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionTitle title="Order Process" />

          {/* CTA */}
          <Link href="#order_from">
            <Action
              iconPosition="right"
              name="Request an Order"
              title="Request an Order"
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
                shadow-sm hover:shadow-md
              "
            />
          </Link>
        </div>

        {/* PROCESS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {orderProcess.map((item) => (
            <div
              key={item.id}
              className="
                group
                border border-gray-100
                rounded-3xl
                overflow-hidden
                transition-all duration-300
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[260px]
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
