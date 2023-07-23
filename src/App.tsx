import { useEffect, useState } from "react";
import Base from "./components/Base";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import Loading from "./components/Loading";

function App() {
  const [isLoad, setIsLoad] = useState(true);
  const [animationStyles, setAnimationStyles] = useState({
    valia: "scale-[30%] translate-x-[25%] translate-y-[25%] lg:translate-x-[138%] lg:translate-y-[10%] 2xl:translate-x-[212%] 2xl:translate-y-[25%] absolute duration-700",
    baguette_deux: "scale-[30%] translate-x-[25%] translate-y-[100%] lg:translate-x-[110%] lg:translate-y-[45%] 2xl:translate-x-[172%] 2xl:translate-y-[75%] rotate-[20deg] z-10 absolute duration-700",
    baguette_un: "scale-[30%] translate-x-[20%] translate-y-[100%] 2xl:translate-x-[162%] lg:translate-x-[98%] 2xl:translate-y-[75%] lg:translate-y-[50%] rotate-[90deg] z-10 absolute duration-700",
    vanttan: "scale-[20%] translate-x-[25%] translate-y-[50%] lg:translate-x-[178%] lg:translate-y-[45%] 2xl:translate-x-[267%] 2xl:translate-y-[65%] z-0 absolute duration-700",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const updateAnimations = () => {
      setIsLoad(false);
      document.body.style.overflow = "auto";
      setAnimationStyles({
        valia: "scale-[50%] lg:scale-[65%] 2xl:scale-[100%] translate-x-[0%] translate-y-[25%] lg:translate-x-[145%] lg:translate-y-[10%] 2xl:translate-x-[200%] 2xl:translate-y-[25%] absolute duration-700",
        baguette_deux: "scale-[50%] lg:scale-[65%] 2xl:scale-[100%] translate-x-[5%] translate-y-[80%] lg:translate-x-[115%] lg:translate-y-[20%] 2xl:translate-x-[165%] 2xl:translate-y-[30%] z-10 absolute duration-700",
        baguette_un: "scale-[50%] lg:scale-[65%] 2xl:scale-[100%]  translate-x-[5%] translate-y-[83%] 2xl:translate-x-[155%] lg:translate-x-[117%] lg:translate-y-[27%] z-10 absolute duration-700",
        vanttan: "scale-[40%] lg:scale-[65%] 2xl:scale-[100%]  translate-x-[0%] translate-y-[25%] lg:translate-y-[25%] 2xl:translate-x-[258%] lg:translate-x-[190%] 2xl:translate-y-[45%] z-0 absolute duration-700",
      });
    };

    const animationTimeout = setTimeout(updateAnimations, 4000);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className="relative gilroy">
      <div className={isLoad ? "opacity-0 hidden duration-[1500ms] ease-in-out" : "opacity-100 duration-[1500ms] ease-in-out"}>
        <img src="/images/leaf.png" className="absolute bottom-0 left-0 w-[10%] sm:w-[4%] blur-[2px] !shadow-2xl" />
      </div>
      <AnimatedCursor innerSize={15} outerSize={20} color="240,186,113" outerAlpha={0.5} innerScale={1.5} outerScale={3} clickables={["button", ".fode"]} />
      {/* loading */}
      <div className={isLoad ? "opacity-100 duration-1000 ease-in-out h-screen flex justify-center items-center translate-y-52" : "hidden"}>
        <Loading />
      </div>
      {/* images */}
      <div className="absolute -z-40 top-0 left-0 w-full h-screen translate-y-10">
        <div className="h-full relative">
          <div className={isLoad ? "-translate-x-[23%] duration-700" : "translate-x-0 duration-700 opacity-30 sm:opacity-100"}>
            {/* vilia */}
            <img className={animationStyles.valia} src="/images/vilia-min.png" alt="" loading="lazy" />
            {/* bagette */}
            <img id="baguette_one" className={animationStyles.baguette_deux} src="/images/baguette 2.png" alt="" />
            <img id="baguette_two" className={animationStyles.baguette_un} src="/images/baguette 1.png" alt="" />
            {/* vantan */}
            <img id="vantan" className={animationStyles.vanttan} src="/images/Vanttan.png" alt="" />

            {/* Others */}
            <div id="others" className={isLoad ? " opacity-0 hidden duration-1000 ease-in-out" : " opacity-100 duration-1000 ease-in-out"}>
              <img className=" blur-sm scale-[25%] lg:scale-[55%] 2xl:scale-[100%] translate-x-[20%] translate-y-[80%] lg:translate-x-[545%] lg:translate-y-[90%] 2xl:translate-x-[700%]  2xl:translate-y-[125%] absolute duration-700" src="/images/tomate.png" alt="" />
              <img className=" blur-sm scale-[25%] lg:scale-[65%] 2xl:scale-[100%] translate-x-[75%] translate-y-[65%] 2xl:translate-x-[700%] lg:translate-x-[520%] 2xl:translate-y-[75%] lg:translate-y-[50%] absolute duration-700" src="/images/leaf 1.png" alt="" />
              <img className=" blur-sm scale-[25%] lg:scale-[65%] 2xl:scale-[100%] translate-x-[175%] translate-y-[250%] 2xl:translate-x-[1400%] lg:translate-x-[1060%] 2xl:translate-y-[500%] lg:translate-y-[360%] absolute duration-700" src="/images/leaf 2.png" alt="" />
              <img className=" blur-sm scale-[25%] lg:scale-[65%] 2xl:scale-[100%] translate-x-[95%] translate-y-[400%] 2xl:translate-x-[1350%] lg:translate-x-[1080%] 2xl:translate-y-[730%] lg:translate-y-[530%] absolute duration-700" src="/images/oignon.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* content principal */}
      <div className={isLoad ? "opacity-0 duration-[1500ms] ease-in-out" : "opacity-100 duration-[1500ms] ease-in-out absolute top-0 right-0 h-full -z-50 "}>
        <img className="hidden lg:block lg:h-full lg:w-full z-0" src="/images/back.png" alt="" />
      </div>
      {/* Mobile waves */}
      <div className="absolute block sm:hidden w-full">
        <img className="w-[100vw] scale-y-[120%]" src="/src/assets/mobilewave.svg" alt="" />
      </div>
      <div className={isLoad ? "opacity-0 hidden duration-[1500ms] ease-in-out" : "opacity-100 duration-[1500ms] ease-in-out"}>
        <div>
          <img className="opacity-100 duration-1000 ease-in-out absolute bottom-[20%] -left-[5%] sm:left-0 scale-75 sm:scale-110" src="/images/nap.png" alt="" />
        </div>
        <div>
          <img className="opacity-100 duration-1000 ease-in-out absolute top-[20%] lg:left-[2%] 2xl:left-[5%] 2xl:w-40 lg:w-16 w-10" src="/src/assets/ondulations.svg" alt="" />
        </div>
        <div className="absolute w-full">
          <Navbar />
        </div>
        <div className="!z-50">
          <Base />
        </div>
      </div>
    </div>
  );
}

export default App;
