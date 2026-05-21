import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Top from "../components/layouts/Top";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex min-h-screen w-full flex-col justify-between">
      <header>
        <Top />
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </main>
  );
}
