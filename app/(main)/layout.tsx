import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Top from "../components/layouts/Top";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Top />

      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <section className="flex-1">{children}</section>

      <Footer />
    </main>
  );
}
