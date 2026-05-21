import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";

const sections = [
  {
    title: "Terms of Service",
    content: [
      `Direct Peptides provides research-grade materials intended exclusively for laboratory research purposes. All products are not for human or animal consumption, clinical use, diagnostic use, or any other application that would violate local, state, or federal law. These materials have not been evaluated or approved by the FDA or any comparable regulatory authority.`,
      `You agree to use this website solely for lawful purposes and in compliance with these Terms. Any unauthorized attempts to interfere with the Site, access systems, scrape content, or conduct fraudulent activity are prohibited.`,
      `You may view and download material from the Site for personal, non-commercial research reference only. Copying, redistributing, modifying, or reproducing website content without written consent from Direct Peptides is strictly prohibited.`,
    ],
  },
  {
    title: "Product Information & Accuracy",
    content: [
      `Direct Peptides makes every effort to maintain accurate and current information but does not guarantee completeness or accuracy.`,
      `We reserve the right to correct errors, update product descriptions, prices, or availability at any time without notice.`,
    ],
  },
  {
    title: "Eligibility & Compliance",
    content: [
      `All customers must be 21 years of age or older.`,
      `By ordering, you confirm that you are a qualified researcher, laboratory, or organization familiar with chemical handling, safety procedures, and applicable regulations.`,
      `You assume full responsibility for compliance with all laws governing the purchase, possession, and use of these products.`,
    ],
  },
  {
    title: "Orders & Risk",
    content: [
      `Direct Peptides may refuse or cancel orders at its discretion, including when misuse or lack of qualification is suspected.`,
      `Title and risk of loss transfer to the customer once the carrier accepts the shipment.`,
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      `All website content—including text, graphics, logos, and software—is owned by or licensed to Direct Peptides and is protected by intellectual property law.`,
      `Unauthorized reproduction or use is prohibited.`,
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      `To the fullest extent permitted by law, Direct Peptides is not liable for any indirect, incidental, or consequential damages arising from your use of this Site or its products.`,
      `You agree to indemnify and hold harmless Direct Peptides, its owners, employees, and affiliates from any claims or losses resulting from your use of the Site or products.`,
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      `Links to third-party websites may appear on this Site for informational purposes.`,
      `Direct Peptides is not responsible for external content or the privacy practices of linked sites.`,
      `Visiting third-party websites is at your own risk.`,
    ],
  },
  {
    title: "Refunds & Returns",
    content: [
      `Because of the nature of our products, all sales are final once an order has shipped. Refunds are evaluated on a case-by-case basis and are not guaranteed.`,
      `Every product is manufactured and stored under strict quality control standards. Once a product leaves our facility, it cannot be returned or reused due to safety and regulatory reasons.`,
      `If your order arrives damaged, incorrect, or defective, you must contact support@directpeptides.com within seven (7) days of delivery.`,
      `Orders may be canceled only before shipment. If the order has already been processed or shipped, it cannot be canceled, recalled, or refunded.`,
      `No products may be returned without prior written approval. Unauthorized returns will be refused and destroyed.`,
    ],
  },
  {
    title: "Shipping & Payments",
    content: [
      `Direct Peptides ships orders Monday through Friday, excluding holidays.`,
      `Tracking information is provided via email once your order ships.`,
      `Delivery times are estimates and not guarantees.`,
      `International customers are responsible for customs duties, taxes, and import regulations in their country.`,
      `Payment in full is required before shipment.`,
      `All prices are displayed in U.S. dollars and are subject to change without notice.`,
      `Direct Peptides protects all transactions using 256-bit SSL encryption.`,
    ],
  },
  {
    title: "Accessibility",
    content: [
      `Direct Peptides is committed to maintaining accessibility and usability for all visitors, including those with disabilities.`,
      `Our website follows the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA wherever possible.`,
      `If you experience accessibility barriers, please contact support@directpeptides.com.`,
    ],
  },
  {
    title: "Governing Law",
    content: [
      `These Terms are governed by and construed in accordance with the laws of Texas, without regard to its conflict of law principles.`,
      `Any disputes shall be resolved exclusively in the competent courts located in Texas.`,
    ],
  },
];

export default function page() {
  return (
    <Container>
      <div className="py-10">
        <SectionTitle
          titleSize="2xl"
          title="Terms, Refunds & Policies"
          description="Please review the following terms and policies carefully before
            purchasing or using products from Direct Peptides."
        />
      </div>

      <div className="pb-10">
        <div className="space-y-14">
          {sections.map((section, idx) => (
            <section key={idx} className="space-y-5">
              <div className="space-y-3">
                <h2 className="text-xl md:text-lg font-semibold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-gray-600 leading-8 text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="border-t border-gray-100 pt-10">
            <div className="space-y-3 text-gray-600">
              <p>
                For questions or concerns regarding these Terms, Refunds,
                Shipping, or other policies, please contact:
              </p>

              <div className="space-y-1">
                <p className="font-medium text-gray-900">Direct Peptides</p>

                <p>
                  Email:{" "}
                  <span className="text-blue-600">
                    support@directpeptides.com
                  </span>
                </p>
              </div>

              <p className="pt-3 text-sm text-gray-500">All rights reserved.</p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
