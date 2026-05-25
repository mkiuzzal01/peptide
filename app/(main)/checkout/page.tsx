import Container from "@/app/components/shared/Container";
import CheckOut from "@/app/components/form/CheckOut";
import CheckOutSummery from "./CheckOutSummery";

export default function page() {
  return (
    <Container>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        <div className="lg:col-span-2">
          <CheckOut />
        </div>
        <div className="col-span-1">
          <CheckOutSummery />
        </div>
      </div>
    </Container>
  );
}
