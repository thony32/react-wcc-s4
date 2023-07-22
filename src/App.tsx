import { useEffect, useState } from "react";
import Base from "./components/Base";
import Navbar from "./components/Navbar";

function App() {
  const [isLoad, setIsLoad] = useState(true);

  const [valia, setValia] = useState("scale-[30%] lg:translate-x-[135%] lg:translate-y-[10%] 2xl:translate-x-[200%] 2xl:translate-y-[25%] absolute duration-700");
  const [baguette_deux, setBaguette_deux] = useState("scale-[30%] lg:translate-x-[109%] lg:translate-y-[45%] 2xl:translate-x-[160%] 2xl:translate-y-[75%] rotate-[20deg] z-10 absolute duration-700");
  const [baguette_un, setBaguette_un] = useState("scale-[30%] 2xl:translate-x-[150%] lg:translate-x-[95%] 2xl:translate-y-[75%] lg:translate-y-[50%] translate-x-[150%] translate-y-[75%] rotate-[90deg] z-10 absolute duration-700");
  const [vanttan, setVanttan] = useState("scale-[20%] lg:translate-x-[175%] lg:translate-y-[50%] 2xl:translate-x-[255%] 2xl:translate-y-[65%] z-0 absolute duration-700");

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false)
      setValia(" lg:scale-[65%] 2xl:scale-[100%] lg:translate-x-[145%] lg:translate-y-[10%] 2xl:translate-x-[200%] 2xl:translate-y-[25%] absolute duration-700")
      setBaguette_deux(" lg:scale-[65%] 2xl:scale-[100%] lg:translate-x-[115%] lg:translate-y-[20%] 2xl:translate-x-[165%] 2xl:translate-y-[30%] z-10 absolute duration-700")
      setBaguette_un(" lg:scale-[65%] 2xl:scale-[100%] 2xl:translate-x-[155%] lg:translate-x-[117%] lg:translate-y-[27%] translate-x-[168%] translate-y-[40%] z-10 absolute duration-700")
      setVanttan("lg:scale-[65%] 2xl:scale-[100%] 2xl:translate-x-[258%] lg:translate-x-[190%] 2xl:translate-y-[45%] translate-x-[260%] lg:translate-y-[25%] z-0 absolute duration-700")
    }, 2000)
  })

  return (
    <div className='relative gilroy'>
      {/* nap */}
      <div>
        <img className='absolute bottom-[20%] scale-110' src="/images/nap.png" alt="" />
      </div>
      {/* ondulation */}
      <div>
        <img className="absolute top-[20%] left-[5%]" src="/src/assets/ondulations.svg" alt=""/>
      </div>
      <div className={
        isLoad ? 'opacity-0 duration-1000 ease-in-out' : 'opacity-100 duration-1000 ease-in-out absolute top-0 right-0 h-full -z-50'
      }>
        <img className="h-full w-full z-0" src="/images/back.png" alt="" />
      </div>

      {/* images */}
      <div className="absolute -z-50 top-0 left-0 w-full h-screen translate-y-10">
        <div className='h-full relative'>
          <div className={isLoad ? '-translate-x-[23%] duration-700' : 'translate-x-0 duration-700'}>
            {/* vilia */}
            <img className={valia} src="/images/vilia.png" alt="" />
            {/* bagette */}
            <img id="baguette_one" className={baguette_deux} src="/images/baguette 2.png" alt="" />
            <img id="baguette_two" className={baguette_un} src="/images/baguette 1.png" alt="" />
            {/* vantan */}
            <img id="vantan" className={vanttan} src="/images/Vanttan.png" alt="" />

            {/* Others */}
            <div id="others" className={isLoad ? "opacity-0 duration-1000 ease-in-out" : "opacity-100 duration-1000 ease-in-out"}>
              <img className=" blur-sm lg:scale-[55%] 2xl:scale-[100%] lg:translate-x-[545%]  lg:translate-y-[90%] 2xl:translate-x-[700%]  2xl:translate-y-[125%] absolute duration-700" src="/images/tomate.png" alt="" />
              <img className=" blur-sm lg:scale-[65%] 2xl:scale-[100%] 2xl:translate-x-[700%] lg:translate-x-[520%] 2xl:translate-y-[75%] lg:translate-y-[50%] translate-x-[700%]  translate-y-[75%] absolute duration-700" src="/images/leaf 1.png" alt="" />
              <img className=" blur-sm lg:scale-[65%] 2xl:scale-[100%] 2xl:translate-x-[1400%] lg:translate-x-[1060%] 2xl:translate-y-[500%] lg:translate-y-[360%] translate-x-[1400%] translate-y-[500%] absolute duration-700" src="/images/leaf 2.png" alt="" />
              <img className=" blur-sm lg:scale-[65%] 2xl:scale-[100%] 2xl:translate-x-[1350%] lg:translate-x-[1080%] 2xl:translate-y-[730%] lg:translate-y-[530%] translate-x-[1400%] translate-y-[750%] absolute duration-700" src="/images/oignon.png" alt="" />
            </div>
          </div>
        </div>
        {/* others */}
        <div></div>
      </div>

      {/* content principal */}
      <div className={isLoad ? "opacity-0 duration-1000 ease-in-out" : "opacity-100 duration-1000 ease-in-out"}>
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
