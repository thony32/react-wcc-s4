import Base from './components/Base'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='gilroy relative'>
      {/* <div className='absolute top-0 right-0 h-screen z-0'>
        <img className="h-full w-full z-0" src="/images/back.png" alt="" />
      </div> */}
      <div className='absolute w-full'>
        <Navbar />
      </div>
      <div className='z-50'>
        <Base />
      </div>
    </div>
  )
}

export default App
