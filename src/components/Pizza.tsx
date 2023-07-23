import CountUp from "react-countup";
import pizza from "../assets/pizza.png";

const Pizza = () => {
  return (
    <div className="sm:w-1/3 sm:text-white">
      {/* Discount coupon */}
      <div className="flex items-center border-dashed border-black/60 sm:border-white border border-b-0 rounded-t-2xl justify-between p-2 pb-4 sm:p-4 sm:pb-0">
        <div className="sm:p-4 text-xs font-semibold">Discount Coupon</div>
        <div className="flex gap-3 sm:gap-8 sm:p-4">
          {/* Prev */}
          <button className="flex group text-sm sm:text-base items-center">
            <svg className="w-6 h-6 group-hover:-translate-x-2 duration-300" viewBox="0 0 75 37.5">
              <g clipPath="url(#a17eb4f0a0)">
                <path
                  fill="#ffffff"
                  d="M 44.128906 36.964844 L 25.804688 18.5625 L 44.257812 0.0351562 L 48.007812 3.800781 L 33.308594 18.5625 L 47.882812 33.199219 L 44.128906 36.964844 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
              <g clipPath="url(#82fd7f86fb)">
                <path
                  fill="#ffffff"
                  d="M 46.914062 17.792969 L 27.253906 17.792969 C 26.867188 17.792969 26.550781 18.121094 26.550781 18.53125 C 26.550781 18.941406 26.867188 19.273438 27.253906 19.273438 L 46.914062 19.273438 C 47.300781 19.273438 47.617188 18.941406 47.617188 18.53125 C 47.617188 18.121094 47.300781 17.792969 46.914062 17.792969 Z M 46.914062 17.792969 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
            </svg>
            Prev
          </button>
          {/* Next */}
          <button className="flex font-bold group text-sm sm:text-base items-center">
            Next
            <svg viewBox="0 0 75 37.5" className="w-6 h-6 group-hover:translate-x-2 duration-300">
              <g clipPath="url(#9ff828e112)">
                <path
                  fill="#ffffff"
                  d="M 30.320312 0.0390625 L 48.644531 18.441406 L 30.191406 36.972656 L 26.441406 33.203125 L 41.140625 18.441406 L 26.566406 3.808594 L 30.320312 0.0390625 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
              <g clipPath="url(#3ea57380e6)">
                <path
                  fill="#ffffff"
                  d="M 46.914062 17.792969 L 27.253906 17.792969 C 26.867188 17.792969 26.550781 18.121094 26.550781 18.53125 C 26.550781 18.941406 26.867188 19.273438 27.253906 19.273438 L 46.914062 19.273438 C 47.300781 19.273438 47.617188 18.941406 47.617188 18.53125 C 47.617188 18.121094 47.300781 17.792969 46.914062 17.792969 Z M 46.914062 17.792969 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      {/* Pizza */}
      <div className="p-4 border border-dashed border-black/60 sm:border-white rounded-2xl -translate-y-[5%] sm:-translate-y-[10%]">
        <div className="grid grid-cols-6 gap-2 sm:gap-0">
          <div className="flex items-center">
            <img src={pizza} alt="" className="w-16 2xl:w-20" />
          </div>

          <div className="col-span-2 flex flex-col lg:gap-2 2xl:gap-4 items-center lg:items-start justify-center">
            <div className="text-sm lg:text-xl 2xl:text-2xl text-left">Mexicoo Pizza</div>
            <div className="text-xs sm:text-sm flex gap-2 items-center">
              <div className="loader"></div>
              78 Calories
            </div>
          </div>

          <div className="flex flex-col sm:gap-3 justify-center">
            <div className="line-through text-[#ffdb80]">$7.90</div>
            <CountUp delay={2.5} start={0} end={7.9} duration={4} decimals={2} decimal=",">
              {({ countUpRef }) => (
                <div className="lg:text-2xl 2xl:text-3xl">
                  $<span ref={countUpRef} className="animate-bounce infinite" />
                </div>
              )}
            </CountUp>
          </div>

          <div className="flex col-span-2 justify-center items-center">
            <button className="flex items-center justify-center gap-2 btn btn-sm lg:btn-sm 2xl:btn-md bg-[#ffdb80] rounded-full lowercase">
              <div>
                <svg className="w-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 stroke-black fill-none" viewBox="0 0 24 24">
                  <defs></defs>
                  <g id="ic-actions-timer">
                    <circle className="cls-1" cx="12" cy="13.5" r="8" />
                    <polyline className="cls-2" points="12 9 12 14 15 16" />
                  </g>
                </svg>
              </div>
              <div className="text-center text-xs lg:text-sm 2xl:text-lg">30 dk.</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
