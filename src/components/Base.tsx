import { useState } from "react";
import Chef from "./Chef";
import Pizza from "./Pizza";
import CountUp from "react-countup";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

export default function Base() {
  // * for buy button
  const [shop, setShop] = useState(
    "w-5 fill-[#151515] group-hover:scale-125 duration-300 ease-in-out"
  );
  const [check, setCheck] = useState(
    "w-5 text-[#151515] absolute duration-300 ease-in-out opacity-0"
  );

  const handleBuy = () => {
    setShop(
      "w-5 fill-[#151515] group-hover:scale-125 duration-300 ease-in-out translate-y-5 opacity-0"
    );
    setCheck(
      "w-5 text-[#151515] absolute duration-300 ease-in-out opacity-100"
    );

    setTimeout(() => {
      setShop(
        "w-5 fill-[#151515] group-hover:scale-125 duration-300 ease-in-out"
      );
      setCheck(
        "w-5 text-[#151515] absolute duration-300  translate-y-5 ease-in-out opacity-0"
      );
    }, 2000);
  };

  // * animate three line
  const bar_one = document.getElementById("bar_one");
  const bar_two = document.getElementById("bar_two");
  const bar_three = document.getElementById("bar_three");

  const [c_bar_one, setC_bar_one] = useState(
    "w-12 h-2 rounded-2xl bg-[#F0BA71] cursor-pointer duration-300"
  );
  const [c_bar_two, setC_bar_two] = useState(
    "w-6 h-2 rounded-2xl bg-gray-300 cursor-pointer duration-300"
  );
  const [c_bar_three, setC_bar_three] = useState(
    "w-3 h-2 rounded-2xl bg-gray-300 cursor-pointer duration-300"
  );

  bar_one?.addEventListener("mouseover", () => {
    setC_bar_one(
      "w-12 h-2 rounded-2xl bg-[#F0BA71] cursor-pointer duration-300"
    );
    setC_bar_two("w-6 h-2 rounded-2xl bg-gray-300 cursor-pointer duration-300");
    setC_bar_three(
      "w-3 h-2 rounded-2xl bg-gray-300 cursor-pointer duration-300"
    );
  });

  bar_two?.addEventListener("mouseover", () => {
    setC_bar_one("w-3 h-2 rounded-2xl bg-gray-300 cursor-pointer duration-300");
    setC_bar_two(
      "w-12 h-2 rounded-2xl bg-[#F0BA71] cursor-pointer duration-300"
    );
    setC_bar_three(
      "w-3 h-2 rounded-2xl bg-gray-300 cursor-pointer duration-300"
    );
  });

  bar_three?.addEventListener("mouseover", () => {
    setC_bar_one("w-3 h-2 rounded-2xl bg-gray-300 cursor-pointer duration-300");
    setC_bar_two("w-6 h-2 rounded-2xl bg-gray-300 cursor-pointer duration-300");
    setC_bar_three(
      "w-12 h-2 rounded-2xl bg-[#F0BA71] cursor-pointer duration-300"
    );
  });

  return (
    <div>
      <div className="grid grid-cols-2 lg:h-[115vh] 2xl:h-[90vh] px-[15%]">
        <div className="flex items-center">
          <div className="space-y-10">
            <div className="lg:space-y-3 2xl:space-y-6">
              <div className="space-y-3">
                <h1 className=" lg:text-5xl 2xl:text-7xl">Italian Pasta</h1>
                <div className="h-20 w-[750px]">
                  <Typed
                    className="lg:text-5xl 2xl:text-7xl font-extrabold"
                    strings={['With special sauce']}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                  >
                  </Typed>
                </div>
              </div>
              <p className="text-2xl text-black/50">Italian pasta with special sauce is a <br /> flavor you can find only in <b className="text-black">fode</b></p>
            </div>
            <div className="grid grid-cols-5">
              <div>
                <div className="line-through opacity-50">$7.90</div>
                <CountUp
                  delay={3}
                  start={0}
                  end={7.9}
                  duration={4}
                  decimals={2}
                  decimal=","
                >
                  {({ countUpRef }) => (
                    <div className="lg:text-3xl 2xl:text-4xl">
                      $<span ref={countUpRef} className="animate-bounce infinite" />
                    </div>
                  )}
                </CountUp>
              </div>
              <div className="col-span-4">
                <button onClick={handleBuy} className="bg-[#151515] hover:ring hover:ring-[#151515] hover:ring-offset-2 active:scale-105 lg:p-3 2xl:p-5 rounded-full duration-150 flex items-center gap-5 lg:w-2/5 2xl:w-1/2 group cursor-pointer">
                  <span className="bg-[#F0BA71] flex items-center justify-center p-3 duration-100 rounded-full ring-1 ring-white">
                    <svg className={shop} viewBox="704.081 796 200 200">
                      <path d="M891.876,977.909l-6.938-125.811h-34.661v-10.157c0-25.333-20.608-45.941-45.94-45.941s-45.94,20.609-45.94,45.941v10.157

	h-36.161l-5.969,126.355l-0.006,0.219c-0.049,4.547,1.758,9.01,4.955,12.239c3.198,3.233,7.641,5.089,12.19,5.089h141.351
	c4.688,0,9.228-1.953,12.453-5.36C890.434,987.233,892.135,982.593,891.876,977.909z M770.379,841.941
	c0-18.725,15.233-33.959,33.958-33.959c18.724,0,33.958,15.234,33.958,33.959v10.157h-67.917V841.941z M878.507,982.402
	c-0.973,1.026-2.339,1.615-3.751,1.615H733.405c-1.37,0-2.707-0.558-3.672-1.534c-0.942-0.95-1.483-2.257-1.492-3.597l5.423-114.806
	h24.731v15.173c0,3.309,2.682,5.991,5.991,5.991c3.309,0,5.991-2.682,5.991-5.991v-15.173h67.917v15.173
	c0,3.309,2.682,5.991,5.991,5.991c3.309,0,5.99-2.682,5.99-5.991v-15.173h23.321l6.313,114.49

	C879.99,979.98,879.478,981.377,878.507,982.402z"
                      />
                    </svg>
                    <svg
                      className={check}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-white text-2xl font-bold capitalize">
                    Buy now
                  </span>
                </button>
              </div>

            </div>
            <div className="flex gap-2">
              <div id="bar_one" className={c_bar_one}></div>
              <div id="bar_two" className={c_bar_two}></div>
              <div id="bar_three" className={c_bar_three}></div>
            </div>
          </div>
        </div>

      </div>
      <div className="flex justify-between lg:gap-10 lg:p-5 2xl:gap-16 2xl:gap-16 -translate-y-[10%]">
        <Chef />

        <div className="flex items-center lg:translate-x-[110%] 2xl:translate-x-[150%] ">
          <span className="lg:p-0 2xl:p-2 text-white font-semibold rotate-90 ... -translate-y-[100%] ">
            scroll
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-16 animate-bounce infinite"
            zoomAndPan="magnify"
            viewBox="0 0 37.5 74.999998"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <clipPath id="aafcfa17d7">
                <path
                  d="M 0 52.992188 L 37.007812 52.992188 L 37.007812 74.503906 L 0 74.503906 Z M 0 52.992188 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="1316e9b1b7">
                <path
                  d="M 16.347656 1 L 20.847656 1 L 20.847656 74 L 16.347656 74 Z M 16.347656 1 "
                  clip-rule="nonzero"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#aafcfa17d7)">
              <path
                fill="#ffffff"
                d="M 37.460938 56.921875 L 18.8125 75.488281 L 0.0351562 56.792969 L 3.851562 52.988281 L 18.8125 67.886719 L 33.640625 53.117188 L 37.460938 56.921875 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#1316e9b1b7)">
              <path
                fill="#ffffff"
                d="M 16.347656 3.660156 L 16.347656 70.894531 C 16.347656 72.21875 17.351562 73.292969 18.597656 73.292969 C 19.839844 73.292969 20.847656 72.21875 20.847656 70.894531 L 20.847656 3.660156 C 20.847656 2.332031 19.839844 1.257812 18.597656 1.257812 C 17.351562 1.257812 16.347656 2.332031 16.347656 3.660156 Z M 16.347656 3.660156 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
          </svg>
        </div>
        <Pizza />
      </div>
      </div>
      );
}
