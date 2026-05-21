import Image from "next/image";
import Container from "@/app/components/shared/Container";
import blog from "@/public/blog/Frame 2147228873.png";

const blogData = {
  title: "Mass Spectrometry in Peptide Research",
  date: "Oct 11, 2025",
  image: blog,
  sections: [
    {
      heading: "What Is Mass Spectrometry?",
      content:
        "Mass spectrometry (MS) is an analytical technique that measures the mass-to-charge ratio of ionized molecules. By converting compounds into charged particles and separating them in an analyzer, MS allows researchers to determine molecular weights, identify unknown compounds, and analyze complex mixtures with high sensitivity.",
      reference: "Aebersold & Mann, 2003",
    },
    {
      heading: "Why Use MS in Peptide Research?",
      content:
        "Peptides are small chains of amino acids that can vary in sequence, modifications, and purity. Mass spectrometry has become an essential tool for their study because it provides precise molecular information.",
      keyPoints: [
        "Confirm peptide identity by measuring exact molecular weight",
        "Detect post-translational or synthetic modifications",
        "Assess purity and identify by-products in synthetic preparations",
        "Sequence peptides through fragmentation analysis",
      ],
      reference: "Yates et al., 2009",
    },
  ],
};

export default function BlogDetails() {
  return (
    <div className="py-4">
      <div className="space-y-6 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
          {blogData.title}
        </h1>

        <div className="flex items-center justify-center gap-3 text-sm text-gray-500 py-2">
          <span>{blogData.date}</span>
          <span className="w-1 h-1 rounded-full" />
          <span>Research Article</span>
        </div>
      </div>

      {/* FEATURE IMAGE */}
      <div className="relative overflow-hidden rounded-3xl mb-12 shadow-sm border border-gray-100">
        <Image
          src={blogData.image}
          alt={blogData.title}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* ARTICLE CONTENT */}
      <article>
        <div className="space-y-12">
          {blogData.sections.map((section, idx) => (
            <section key={idx} className="space-y-5">
              {/* SECTION TITLE */}
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {section.heading}
                </h2>
              </div>

              {/* CONTENT */}
              <p className="text-gray-600 leading-8 text-sm md:text-base">
                {section.content}
              </p>

              {/* KEY POINTS */}
              {section.keyPoints && (
                <div className="rounded-2xl p-5">
                  <ul className="space-y-3">
                    {section.keyPoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0" />

                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* REFERENCE */}
              <div className="pt-2">
                <p className="text-sm italic text-gray-500">
                  Reference: {section.reference}
                </p>
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
