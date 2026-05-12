import Footer from '../components/layouts/Footer';
import Navbar from '../components/layouts/Navbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex  justify-center items-center min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
