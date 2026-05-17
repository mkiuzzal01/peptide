import HeaderCard from '../cards/HeaderCard';
import Image from 'next/image';
import Object1 from '@/public/header/Object 1.png';
import MedicineBox from '@/public/header/medicine_box.png';
import Container from '../shared/Container';

const header = [
  {
    title: 'High-Purity Peptides',
    description: 'Best Peptides for Research',
    buttonTitle: 'Learn More',
    image: <Image alt="App Store" height={300} width={200} src={Object1} />,
  },
  {
    title: 'High-Purity Peptides',
    description: 'Best Peptides for Research',
    buttonTitle: 'Learn More',
    image: <Image alt="App Store" height={300} width={200} src={MedicineBox} />,
  },
  {
    title: 'High-Purity Peptides',
    description: 'Best Peptides for Research',
    buttonTitle: 'Learn More',
    image: <Image alt="App Store" height={300} width={200} src={MedicineBox} />,
  },
];

export default function Header() {
  return (
    <section className="w-full py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {header.map((item, index) => (
            <HeaderCard
              key={index}
              title={item.title}
              description={item.description}
              buttonTitle={item.buttonTitle}
              image={item.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
