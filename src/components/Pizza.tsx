import pizza from "../assets/pizza.png";
export default function Pizza() {
  return (
    <div className="h-full lg:w-[600px] lg:h-[220px]">
      <div className="flex border-dashed border-slate-950 border border-b-0 rounded-t-xl justify-between p-4">
        {/* Discount coupon */}
        <div className="p-4">
          <span className="">Discount Coupon</span>
        </div>
        <div className="flex gap-8 p-4">
          {/* Prev */}
          <div className="flex gap-2">Prev.</div>
          {/* Next */}
          <div className="flex gap-2">Next</div>
        </div>
      </div>
      {/* Pizza */}
      <div className="p-4 border border-dashed border-slate-950 rounded-xl -translate-y-[10%]">
        <div className="grid grid-cols-5">
          <div>
            <img src={pizza} alt="" className="w-20" />
          </div>
          <div className="col-span-2 flex flex-col gap-4 items-start justify-center">
            <div className="font-bold text-2xl text-left">Mexicoo Pizza</div>
            <div className="text-sm">
              78 Calories
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
