import WholeSele from "@/app/components/hero/WholeSele";
import HoleSaleHeader from "./__components/HoleSaleHeader";
import OrderProcess from "@/app/components/order/OrderProcess";
import Order from "@/app/components/form/Order";

export default function page() {
  return (
    <>
      <WholeSele />
      <HoleSaleHeader />
      <OrderProcess />
      <Order />
    </>
  );
}
