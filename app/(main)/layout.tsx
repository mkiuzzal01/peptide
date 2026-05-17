import Footer from '../components/layouts/Footer';
import Navbar from '../components/layouts/Navbar';
import Top from '../components/layouts/Top';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <Top />
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
