import { useEffect, useState } from 'react'
import Base from './components/Base'
import Navbar from './components/Navbar'


function App() {
  const [isLoad, setIsLoad] = useState(true)

  const [valia, setValia] = useState("scale-[30%] translate-x-[200%] translate-y-[25%] absolute duration-700")
  const [baguette_deux, setBaguette_deux] = useState("scale-[30%] translate-x-[160%] translate-y-[75%] rotate-[20deg] z-10 absolute duration-700")
  const [baguette_un, setBaguette_un] = useState("scale-[30%] translate-x-[150%] translate-y-[75%] rotate-[90deg] z-10 absolute duration-700")
  const [vanttan, setVanttan] = useState("scale-[20%] translate-x-[255%] translate-y-[65%] z-0 absolute duration-700")


  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false)
      setValia("translate-x-[200%] translate-y-[25%] absolute duration-700")
      setBaguette_deux("translate-x-[165%] translate-y-[30%] z-10 absolute duration-700")
      setBaguette_un("translate-x-[168%] translate-y-[40%] z-10 absolute duration-700")
      setVanttan("translate-x-[260%] translate-y-[45%] z-0 absolute duration-700")
    }, 2000)
  })

  return (
    <div className='gilroy relative'>
      <div className={
        isLoad ? 'opacity-0 duration-1000 ease-in-out' : 'opacity-100 duration-1000 ease-in-out absolute top-0 right-0 h-full -z-50'
      }>
        <img className="h-full w-full z-0" src="/images/back.png" alt="" />
      </div>

      {/* images */}
      <div className="absolute -z-50 top-0 left-0 w-full h-screen">
        <div className='h-full relative'>
          <div className={isLoad ? '-translate-x-[23%] duration-700' : 'translate-x-0 duration-700'}>
            {/* vilia */}
            <img className={valia} src="/images/vilia.png" alt="" />
            {/* bagette */}
            <img className={baguette_deux} src="/images/baguette 2.png" alt="" />
            <img className={baguette_un} src="/images/baguette 1.png" alt="" />
            {/* vantan */}
            <img className={vanttan} src="/images/Vanttan.png" alt="" />

            {/* Others */}
            <div className={
              isLoad ? 'opacity-0 duration-1000 ease-in-out' : 'opacity-100 duration-1000 ease-in-out'
            }>
              <img className="translate-x-[700%] blur-sm translate-y-[125%] absolute duration-700" src="/images/tomate.png" alt="" />
              <img className="translate-x-[700%] blur-sm translate-y-[75%] absolute duration-700" src="/images/leaf 1.png" alt="" />
              <img className="translate-x-[1400%] blur-sm translate-y-[500%] absolute duration-700" src="/images/leaf 2.png" alt="" />
              <img className="translate-x-[1400%] blur-sm translate-y-[750%] absolute duration-700" src="/images/oignon.png" alt="" />
            </div>
          </div>
        </div>
        {/* others */}
        <div>

        </div>
      </div>

      {/* content principal */}
      <div className={
        isLoad ? 'opacity-0 duration-1000 ease-in-out' : 'opacity-100 duration-1000 ease-in-out'
      }>
        <div className='absolute w-full'>
          <Navbar />
        </div>
        <div className='!z-50'>
          <Base />
        </div>
      </div>
    </div>
  )
}

export default App
