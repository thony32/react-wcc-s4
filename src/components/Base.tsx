import Chef from "./Chef";
import Pizza from "./Pizza";
import CountUp from "react-countup";

export default function Base() {
    return (
        <div>
            <div className="grid grid-cols-2 h-[90vh] px-[15%]">
                <div className="flex items-center">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <h1 className="text-7xl">Italian Pasta</h1>
                                <h1 className="text-7xl font-extrabold">With special sauce</h1>
                            </div>
                            <p className="text-2xl text-black/50">Italian pasta with special sauce is a <br /> flavor you can find only in <b className="text-black">fode</b></p>
                        </div>
                        <div className="grid grid-cols-5">
                            <div>
                                <div className="line-through opacity-50">$7.90</div>
                                <CountUp
                                    delay={0}
                                    start={0}
                                    end={7.9}
                                    duration={4}
                                    decimals={2}
                                    decimal=","
                                >
                                    {({ countUpRef }) => (
                                        <div className="text-2xl lg:text-4xl">
                                            $<span ref={countUpRef} className="animate-bounce infinite" />
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div>
                                <button className="bg-[#151515] p-5 rounded-full flex items-center gap-5 w-[250px]">
                                    <span className="bg-[#F0BA71] flex items-center justify-center p-3 rounded-full ring-1 ring-white">
                                        <svg className="w-5 fill-[#151515]" viewBox="704.081 796 200 200">
                                            <path d="M891.876,977.909l-6.938-125.811h-34.661v-10.157c0-25.333-20.608-45.941-45.94-45.941s-45.94,20.609-45.94,45.941v10.157
	h-36.161l-5.969,126.355l-0.006,0.219c-0.049,4.547,1.758,9.01,4.955,12.239c3.198,3.233,7.641,5.089,12.19,5.089h141.351
	c4.688,0,9.228-1.953,12.453-5.36C890.434,987.233,892.135,982.593,891.876,977.909z M770.379,841.941
	c0-18.725,15.233-33.959,33.958-33.959c18.724,0,33.958,15.234,33.958,33.959v10.157h-67.917V841.941z M878.507,982.402
	c-0.973,1.026-2.339,1.615-3.751,1.615H733.405c-1.37,0-2.707-0.558-3.672-1.534c-0.942-0.95-1.483-2.257-1.492-3.597l5.423-114.806
	h24.731v15.173c0,3.309,2.682,5.991,5.991,5.991c3.309,0,5.991-2.682,5.991-5.991v-15.173h67.917v15.173
	c0,3.309,2.682,5.991,5.991,5.991c3.309,0,5.99-2.682,5.99-5.991v-15.173h23.321l6.313,114.49
	C879.99,979.98,879.478,981.377,878.507,982.402z" />
                                        </svg>
                                    </span>
                                    <span className="text-white text-2xl font-bold capitalize">Buy now</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-10 h-1 rounded-2xl bg-[#F0BA71]"></div>
                            <div className="w-5 h-1 rounded-2xl bg-gray-300"></div>
                            <div className="w-2 h-1 rounded-2xl bg-gray-300"></div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-between gap-16 p-16 -translate-y-[40%]">
                <Chef />
                <div>Scroll</div>
                <Pizza />
            </div>
        </div>
    )
}
