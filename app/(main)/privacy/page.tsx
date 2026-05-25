import { getPrivacyPolicy } from "@/actions/quires/policy";
import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import NotFoundMessage from "@/app/components/utils/NotFoundMessage";

export default async function Page() {
  const { data: payload } = await getPrivacyPolicy();

  if (!payload) {
    return (
      <NotFoundMessage
        title="No Privacy Policy found"
        message="Contact with support"
      />
    );
  }

  return (
    <section className="py-12 lg:py-16">
      <Container>
        <>
          {/* HERO */}
          <SectionTitle
            titleSize="2xl"
            title="Privacy Policy"
            description="Please review how Direct Peptides collects, uses, and protects your personal information when using our website and services."
          />

          <div className="mt-14 space-y-14">
            {
              <div
                className="
    prose prose-sm sm:prose-base max-w-none
    text-justify text-gray-500
    leading-7
    break-all

    prose-p:mb-4
    prose-p:leading-7

    prose-headings:mt-6
    prose-headings:mb-3
    prose-headings:font-semibold
    prose-headings:text-gray-900

    prose-ul:pl-5
    prose-ol:pl-5

    prose-li:mb-2
    prose-li:leading-7

    prose-strong:text-gray-900
    prose-a:text-primary
  "
                dangerouslySetInnerHTML={{ __html: payload?.page_content }}
              />
            }
          </div>
        </>
      </Container>
    </section>
  );
}
