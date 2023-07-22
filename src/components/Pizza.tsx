import CountUp from "react-countup";
import pizza from "../assets/pizza.png";
export default function Pizza() {
  return (
    <div className="h-full lg:w-[600px] lg:h-[220px]">
      <div className="flex border-dashed border-slate-950 border border-b-0 rounded-t-2xl justify-between p-4">
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
      <div className="p-4 border border-dashed border-slate-950 rounded-2xl -translate-y-[10%]">
        <div className="grid grid-cols-5">
          <div>
            <img src={pizza} alt="" className="w-20" />
          </div>

          <div className="col-span-2 flex flex-col gap-4 items-center lg:items-start justify-center">
            <div className=" lg:text-2xl text-left">Mexicoo Pizza</div>
            <div className="text-sm">78 Calories</div>
          </div>

          <div className="flex flex-col gap-3 justify-center">
            <div className="line-through text-warning">$7.90</div>
            <CountUp
              delay={0}
              start={0}
              end={7.9}
              duration={4}
              decimals={2}
              decimal=","
            >
              {({ countUpRef }) => (
                <div className="text-2xl lg:text-3xl  ">
                  $<span ref={countUpRef} className="animate-bounce infinite" />
                </div>
              )}
            </CountUp>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center gap-2 btn btn-warning rounded-full lowercase">
              <div><svg
                className="w-7 h-7 stroke-black fill-none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>

                <g id="ic-actions-timer">
                  <circle className="cls-1" cx="12" cy="13.5" r="8" />

                  <polyline className="cls-2" points="12 9 12 14 15 16" />
                </g>
              </svg></div>
              <div className="text-center text-lg">30 dk.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
