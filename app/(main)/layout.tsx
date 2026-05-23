import ReduxProvider from "@/redux/provider";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Top from "../components/layouts/Top";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header>
        <Top />
        <Navbar />
      </header>
      <main className="flex-1">
        <ReduxProvider>{children}</ReduxProvider>
      </main>
      <Footer />
    </div>
  );
}
