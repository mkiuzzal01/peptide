import {
  getSocialLinks,
  getSystemInfo,
} from "@/actions/quires/system_info.api";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Top from "../components/layouts/Top";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const systemInfo = await getSystemInfo();
  const socialLinks = await getSocialLinks();

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header>
        <Top />
        <Navbar systemInfo={systemInfo} />
      </header>
      <main className="flex-1">{children}</main>
      <Footer systemInfo={systemInfo} socialLinks={socialLinks} />
    </div>
  );
}
