import Action from "../buttons/Action";
import ArrowIcon from "../icons/ArrowIcon";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question: "Are these products safe for human consumption?",
    answer:
      "Yes, our products are formulated and manufactured to meet strict safety and quality standards for human consumption.",
  },
  {
    id: 2,
    question: "How do I place an order?",
    answer:
      "Shipping usually takes 3–7 business days depending on your location.",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for wholesale orders.",
  },
  {
    id: 4,
    question: "Is my payment information secure?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for wholesale orders.",
  },
  {
    id: 5,
    question: "What is your refund policy?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for wholesale orders.",
  },
];

interface Props {
  faqs: any[];
}

export default function FAQ({ faqs }: Props) {
  return (
    <Container>
      <SectionTitle
        title="Frequently Asked Questions"
        icon={
          <Action
            iconPosition="right"
            name="Read more FAQ"
            title="FAQ"
            icon={
              <ArrowIcon
                bgColor="bg-blue-600"
                iconColor="white"
                size="w-6 h-6"
              />
            }
            className="
              bg-white border border-blue-600
              text-blue-600
              h-10
              pl-6 pr-2
              rounded-full
              text-sm sm:text-base
              font-semibold
              transition-all duration-200
              flex items-center gap-4
            "
          />
        }
      />

      {/* FAQ Accordion */}
      <div className="mt-8 mb-20">
        <Accordion className="w-full space-y-3">
          {faqs?.map((faq: any) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="border bg-white border-gray-100 rounded-xl px-4"
            >
              <AccordionTrigger className="text-left text-gray-900 text-lg font-medium">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-3">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
