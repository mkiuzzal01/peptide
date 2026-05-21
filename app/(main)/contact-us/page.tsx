"use client";
import Contact from "@/app/components/form/Contact";
import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import Info from "./__components/Info";

export default function page() {
  return (
    <Container className="py-5">
      <div className="py-4">
        <SectionTitle
          titleSize="2xl"
          title={
            <p>
              Got a question or need <br /> support? Send us a message
            </p>
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex-1">
          <Contact />
        </div>

        <div className="w-full">
          <Info />
        </div>
      </div>
    </Container>
  );
}
