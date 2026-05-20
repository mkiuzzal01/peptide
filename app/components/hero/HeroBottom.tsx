import Container from "../shared/Container";

export const heroBottomData = [
  { title: "Manufactured in USA" },
  { title: "Third-party batch tested" },
  { title: "Fast discreet delivery" },
  { title: "Third-party batch tested" },
  { title: "24/7 dedicated support" },
  { title: "Fast discreet delivery" },
];

export default function HeroBottom() {
  return (
    <div className="bg-[#037FFF]">
      <Container className="py-4">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {heroBottomData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm text-white font-medium"
            >
              {item.title}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
