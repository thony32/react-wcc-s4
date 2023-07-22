import "../style/navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar px-[5%] py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="font-bold text-2xl">
            Fode<span className="text-[#ffdb80] text-4xl">.</span>
          </a>
        </div>
        <div className="navbar-end">
          <a className="hover:border-t-2 hover:border-l-2 hover:rounded-tl-lg p-2 mx-4 rounded-full">Item 1</a>
          <a className="hover:border-t-2 hover:border-l-2 hover:rounded-tl-lg p-2 mx-10">Item 1</a>
          <a className="btn btn-outline rounded-full hover:bg-[#ffdb80] hover:border-[#ffdb80] hover:text-black lowercase capitalize px-5 mx-4">Sign up</a>
          <a className="btn rounded-full bg-[#ffdb80] hover:bg-[#ffdb81] lowercase capitalize px-7 ">Login</a>
        </div>
      </div>
    </div>
  )
}
