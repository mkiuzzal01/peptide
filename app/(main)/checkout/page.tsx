import Container from "@/app/components/shared/Container";
import CheckOut from "@/app/components/form/CheckOut";
import OrderSummery from "../cart/__components/OrderSummery";

export default function page() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-10 py-5">
        <div className="flex-1">
          <CheckOut />
        </div>
        <div className="flex-1">
          <OrderSummery />
        </div>
      </div>
    </Container>
  );
}
