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
          titleSize="sm"
          title={
            <p>
              Got a question or need <br /> support? Send us a message
            </p>
          }
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-3/4">
          <Contact />
        </div>

        <div className="flex-1">
          <Info />
        </div>
      </div>
    </Container>
  );
}
