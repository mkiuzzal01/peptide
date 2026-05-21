import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import coaImage from "@/public/products/image 32.png";
import COA_Card from "./__components/COA_Card";

const coaList = [
  {
    id: 1,
    title: "BPC-157",
    cas: "121062-08-6",
    description: "High purity peptide tested by third-party lab.",
    image: coaImage,
    certificate: [
      "21834-01.pdf",
      "21834-02.pdf",
      "21834-03.pdf",
      "21834-04.pdf",
    ],
  },
  {
    id: 2,
    title: "BPC-157",
    cas: "121062-08-6",
    description: "High purity peptide tested by third-party lab.",
    image: coaImage,
    certificate: [
      "21834-01.pdf",
      "21834-02.pdf",
      "21834-03.pdf",
      "21834-04.pdf",
    ],
  },
  {
    id: 3,
    title: "BPC-157",
    cas: "121062-08-6",
    description: "High purity peptide tested by third-party lab.",
    image: coaImage,
    certificate: [
      "21834-01.pdf",
      "21834-02.pdf",
      "21834-03.pdf",
      "21834-04.pdf",
    ],
  },
  {
    id: 5,
    title: "BPC-157",
    cas: "121062-08-6",
    description: "High purity peptide tested by third-party lab.",
    image: coaImage,
    certificate: [
      "21834-01.pdf",
      "21834-02.pdf",
      "21834-03.pdf",
      "21834-04.pdf",
    ],
  },
  {
    id: 6,
    title: "BPC-157",
    cas: "121062-08-6",
    description: "High purity peptide tested by third-party lab.",
    image: coaImage,
    certificate: [
      "21834-01.pdf",
      "21834-02.pdf",
      "21834-03.pdf",
      "21834-04.pdf",
    ],
  },
  {
    id: 7,
    title: "BPC-157",
    cas: "121062-08-6",
    description: "High purity peptide tested by third-party lab.",
    image: coaImage,
    certificate: [
      "21834-01.pdf",
      "21834-02.pdf",
      "21834-03.pdf",
      "21834-04.pdf",
    ],
  },
];

export default function Page() {
  return (
    <Container>
      <div className="py-10">
        <SectionTitle
          titleSize="2xl"
          title="Certificate of Analysis"
          description="Access complete COA documentation and third-party testing information for every batch."
        />
      </div>

      {/* Grid */}
      <div className="grid gap-4 pt-2 pb-10">
        {coaList.map((item) => (
          <COA_Card
            key={item.id}
            title={item.title}
            cas={item.cas}
            doseOptions={["5mg", "10mg", "20mg"]}
            image={item.image}
            certificates={item.certificate}
          />
        ))}
      </div>
    </Container>
  );
}
