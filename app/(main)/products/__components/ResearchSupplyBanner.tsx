import Action from "@/app/components/buttons/Action";
import Bag from "@/app/components/icons/Bag";
import image from "@/public/header/medicine_box.png";
import Image from "next/image";

export default function ResearchSupplyBanner() {
  return (
    <div className="flex justify-between items-center border rounded-2xl my-4 p-4">
      <div className="space-y-4">
        <h1 className="text text-2xl">Need Bulk Research Supply?</h1>
        <p>
          Partner with a trusted supplier offering scalable wholesale solutions,
          verified products, and fast order processing.
        </p>
        <Action
          name="Add to Cart"
          title="Add to Cart"
          icon={<Bag size="w-5 h-5" />}
          iconPosition="right"
          className="
                  h-8
                  px-2
                  rounded-full
                  bg-blue-600
                  text-white
                  text-sm font-semibold
                  hover:bg-blue-700
                  transition-all duration-200
                  flex items-center justify-center gap-2
                  shadow-sm
                "
        />
      </div>
      <div>
        <Image src={image} alt="Research Supply" className="w-full h-auto" />
      </div>
    </div>
  );
}
