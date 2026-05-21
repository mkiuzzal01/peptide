import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";

const privacySections = [
  {
    title: "Privacy Commitment",
    content: [
      `At Direct Peptides, we are committed to safeguarding your privacy and ensuring the security of your personal information.`,
      `This Privacy Policy explains how we collect, use, and protect your data when you interact with our website.`,
      `We adhere to industry best practices and strive to provide a transparent and trustworthy experience.`,
    ],
  },

  {
    title: "Sharing Your Information",
    content: [
      `We understand the importance of your privacy and are committed to transparency regarding how we share your information.`,
      `We may disclose Personal Data and other information under the circumstances described below.`,
    ],
  },

  {
    title: "Third-Party Service Providers",
    content: [
      `We engage various third-party service providers to facilitate our operations and provide seamless services.`,
    ],

    list: [
      {
        heading: "Shipping & Delivery Services",
        description:
          "To fulfill your orders, we share your shipping address and contact information with shipping carriers.",
      },

      {
        heading: "Payment Processors",
        description:
          "To process transactions securely, we share payment information with trusted payment gateways.",
      },

      {
        heading: "Communication Platforms",
        description:
          "For SMS notifications, order updates, and promotional offers (if opted in), we may share phone numbers and opt-in status with messaging providers and phone carriers.",
      },

      {
        heading: "Website Analytics",
        description:
          "We use analytics tools to understand user behavior and improve website functionality. These tools may collect non-personal information such as IP addresses and browsing patterns.",
      },

      {
        heading: "Customer Support Providers",
        description:
          "We may share limited information with customer support vendors to help resolve inquiries and service-related issues.",
      },
    ],
  },

  {
    title: "SMS Messaging & Opt-In Data",
    content: [
      `We will not share your opt-in to an SMS short code campaign with third parties for purposes unrelated to supporting that campaign.`,
      `We may share Personal Data with vendors that help us deliver messaging services, including platform providers, phone companies, and related service providers.`,
      `Text messaging originator opt-in data and consent will never be sold or shared except where necessary to provide messaging services.`,
    ],
  },

  {
    title: "Legal Compliance & Protection",
    content: [
      `We may disclose information when required by law, including in response to subpoenas, court orders, or legal processes.`,
      `We may also disclose information to protect our rights, property, safety, or the rights and safety of others.`,
    ],
  },

  {
    title: "Business Transfers",
    content: [
      `In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.`,
      `We will provide notice of any such transfer and any material changes to this Privacy Policy.`,
    ],
  },

  {
    title: "Affiliates & Subsidiaries",
    content: [
      `We may share Personal Data with our affiliates or subsidiaries.`,
      `Any use or disclosure of your information by affiliates will remain subject to this Privacy Policy.`,
    ],
  },

  {
    title: "Data Protection & Confidentiality",
    content: [
      `We take reasonable steps to ensure that third-party service providers are bound by confidentiality obligations and comply with applicable data protection laws.`,
      `We do not sell or rent your personal information to third parties for marketing purposes without your explicit consent.`,
    ],
  },
];

export default function Page() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* HERO */}
          <SectionTitle
            titleSize="2xl"
            title="Privacy Policy"
            description="Please review how Direct Peptides collects, uses, and protects your personal information when using our website and services."
          />

          {/* CONTENT */}
          <div className="mt-14 space-y-14">
            {privacySections.map((section, idx) => (
              <section key={idx} className="space-y-6">
                {/* TITLE */}
                <div className="space-y-3">
                  <h2 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900">
                    {section.title}
                  </h2>
                </div>

                {/* PARAGRAPHS */}
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

                {/* LIST ITEMS */}
                {section.list && (
                  <div className="grid gap-4 pt-2">
                    {section.list.map((item, i) => (
                      <div
                        key={i}
                        className="border border-gray-100 rounded-2xl p-5 "
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.heading}
                        </h3>

                        <p className="text-gray-600 leading-7">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* CONTACT */}
            <section className="border-t border-gray-100">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>

                <div className="space-y-3 text-gray-600 leading-7">
                  <p>
                    If you have questions regarding this Privacy Policy or how
                    your information is handled, please contact us:
                  </p>

                  <div className="space-y-1">
                    <p className="font-medium text-gray-900">Direct Peptides</p>

                    <p>
                      Email:{" "}
                      <span className="text-blue-600 font-medium">
                        support@directpeptides.com
                      </span>
                    </p>
                  </div>

                  <p className="pt-3 text-sm text-gray-500">
                    All rights reserved.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
