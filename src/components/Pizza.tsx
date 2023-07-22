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
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              zoomAndPan="magnify"
              viewBox="0 0 75 37.5"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="a17eb4f0a0">
                  <path
                    d="M 25.800781 0 L 48.003906 0 L 48.003906 37 L 25.800781 37 Z M 25.800781 0 "
                    clip-rule="nonzero"
                  />
                </clipPath>
                <clipPath id="82fd7f86fb">
                  <path
                    d="M 26.351562 17.792969 L 47.816406 17.792969 L 47.816406 19.273438 L 26.351562 19.273438 Z M 26.351562 17.792969 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#a17eb4f0a0)">
                <path
                  fill="#000000"
                  d="M 44.128906 36.964844 L 25.804688 18.5625 L 44.257812 0.0351562 L 48.007812 3.800781 L 33.308594 18.5625 L 47.882812 33.199219 L 44.128906 36.964844 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
              <g clip-path="url(#82fd7f86fb)">
                <path
                  fill="#000000"
                  d="M 46.914062 17.792969 L 27.253906 17.792969 C 26.867188 17.792969 26.550781 18.121094 26.550781 18.53125 C 26.550781 18.941406 26.867188 19.273438 27.253906 19.273438 L 46.914062 19.273438 C 47.300781 19.273438 47.617188 18.941406 47.617188 18.53125 C 47.617188 18.121094 47.300781 17.792969 46.914062 17.792969 Z M 46.914062 17.792969 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            Prev.
          </div>
          {/* Next */}
          <div className="flex scale-105 font-semibold">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              
              
              zoomAndPan="magnify"
              viewBox="0 0 75 37.5"
              className="w-6 h-6"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="9ff828e112">
                  <path
                    d="M 26.445312 0 L 48.648438 0 L 48.648438 37 L 26.445312 37 Z M 26.445312 0 "
                    clip-rule="nonzero"
                  />
                </clipPath>
                <clipPath id="3ea57380e6">
                  <path
                    d="M 26.351562 17.792969 L 47.816406 17.792969 L 47.816406 19.273438 L 26.351562 19.273438 Z M 26.351562 17.792969 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#9ff828e112)">
                <path
                  fill="#000000"
                  d="M 30.320312 0.0390625 L 48.644531 18.441406 L 30.191406 36.972656 L 26.441406 33.203125 L 41.140625 18.441406 L 26.566406 3.808594 L 30.320312 0.0390625 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
              <g clip-path="url(#3ea57380e6)">
                <path
                  fill="#000000"
                  d="M 46.914062 17.792969 L 27.253906 17.792969 C 26.867188 17.792969 26.550781 18.121094 26.550781 18.53125 C 26.550781 18.941406 26.867188 19.273438 27.253906 19.273438 L 46.914062 19.273438 C 47.300781 19.273438 47.617188 18.941406 47.617188 18.53125 C 47.617188 18.121094 47.300781 17.792969 46.914062 17.792969 Z M 46.914062 17.792969 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            
          </div>
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
            <div className="text-sm flex gap-2 items-center">
              <div className="loader"></div>
              78 Calories
            </div>
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
              <div>
                <svg
                  className="w-7 h-7 stroke-black fill-none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>

                  <g id="ic-actions-timer">
                    <circle className="cls-1" cx="12" cy="13.5" r="8" />

                    <polyline className="cls-2" points="12 9 12 14 15 16" />
                  </g>
                </svg>
              </div>
              <div className="text-center text-lg">30 dk.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
