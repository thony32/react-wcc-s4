import { useState } from "react"

export default function MenuMobile() {
  const [why, setWhy] = useState("text-center translate-x-[100%] translate-y-[100%] scale-0 opacity-0 duration-300")
  const [about, setAbout] = useState("text-center translate-x-[100%] opacity-0 scale-0 duration-300")
  const [menu, setMenu] = useState("text-center translate-x-[100%] -translate-y-[100%]  opacity-0 scale-0 duration-300")

  const [open, setOpen] = useState("w-5 opacity-100 duration-300")
  const [close, setClose] = useState("w-5 absolute opacity-0 duration-300")

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if (!isOpen) {
      setWhy("text-center translate-x-[100%] translate-y-[0%] scale-100 opacity-100 duration-300")
      setAbout("text-center translate-x-[0%] opacity-100 scale-100 duration-300")
      setMenu("text-center translate-x-[100%] translate-y-[0%] opacity-100 scale-100 duration-300")
      
      setOpen("w-5 translate-y-5 opacity-0 duration-300")
      setClose("w-5 absolute opacity-100 duration-300")
      setIsOpen(true)
    }
    else {
      setWhy("text-center translate-x-[100%] translate-y-[100%] scale-0 opacity-0 duration-300")
      setAbout("text-center translate-x-[100%] opacity-0 scale-0 duration-300")
      setMenu("text-center translate-x-[100%] -translate-y-[100%]  opacity-0 scale-0 duration-300")

      setOpen("w-5 translate-y-0 opacity-100 duration-300")
      setClose("w-5 absolute opacity-0 duration-300")
      setIsOpen(false)
    }
  }
  return (
    <div className="flex gap-10 items-center">
      {/* List */}
      <div className="space-y-2">
        <div className={why}>
          <div className="flex justify-center">
            <button className="btn btn-sm btn-circle bg-[#151515] border-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </button>
          </div>
          {/* <label className="text-xs">Why Fode</label> */}
        </div>
        <div className={about}>
          <div className="flex justify-center">
            <button className="btn btn-sm btn-circle bg-[#151515] border-0">
              <svg className="fill-white w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.47719 7.96225C5.1802 8.25099 5.17351 8.72582 5.46225 9.02281C5.75099 9.3198 6.22582 9.32649 6.52281 9.03775L5.47719 7.96225ZM9.6 5H10.35C10.35 4.69857 10.1695 4.42644 9.89188 4.30913C9.61422 4.19182 9.29331 4.25214 9.07719 4.46225L9.6 5ZM8.85 19C8.85 19.4142 9.18579 19.75 9.6 19.75C10.0142 19.75 10.35 19.4142 10.35 19H8.85ZM18.5228 16.0377C18.8198 15.749 18.8265 15.2742 18.5377 14.9772C18.249 14.6802 17.7742 14.6735 17.4772 14.9623L18.5228 16.0377ZM14.4 19H13.65C13.65 19.3014 13.8305 19.5736 14.1081 19.6909C14.3858 19.8082 14.7067 19.7479 14.9228 19.5377L14.4 19ZM15.15 5C15.15 4.58579 14.8142 4.25 14.4 4.25C13.9858 4.25 13.65 4.58579 13.65 5H15.15ZM6.52281 9.03775L10.1228 5.53775L9.07719 4.46225L5.47719 7.96225L6.52281 9.03775ZM8.85 5V19H10.35V5H8.85ZM17.4772 14.9623L13.8772 18.4623L14.9228 19.5377L18.5228 16.0377L17.4772 14.9623ZM15.15 19V5H13.65V19H15.15Z" />
              </svg>
            </button>
          </div>
          {/* <label className="text-xs">About</label> */}
        </div>
        <div className={menu}>
          <div className="flex justify-center">
            <button className="btn btn-sm btn-circle bg-[#151515] border-0">
              <svg className="stroke-white w-6" viewBox="-0.5 0 25 25" fill="none">
                <path
                  d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          {/* <label className="text-xs">Menu</label> */}
        </div>
      </div>
      {/* Menu */}
      <div>
        <div className="flex justify-center">
          <button onClick={handleClick} className="btn btn-sm btn-circle bg-[#ffdb80] border-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={open}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={close}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
