import {
  getProofOfManufacturing,
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
  const proofOfManufacturing = await getProofOfManufacturing();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white">
        <Top />
        <Navbar systemInfo={systemInfo} />
      </header>

      <main className="flex-1">{children}</main>

      <Footer
        systemInfo={systemInfo}
        socialLinks={socialLinks}
        proofOfManufacturing={proofOfManufacturing}
      />
    </div>
  );
}
