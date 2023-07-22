import "../style/navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar px-[4%] py-10">
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
          <a className="font-bold text-4xl">
            Fode<span className="text-[#ffdb80] text-4xl font-bold">.</span>
          </a>
        </div>
        <div className="navbar-end">
          <div className="search-container mr-5">
            <div>
              <input className="search expandright border-b-2 border-current" id="searchright" type="search" name="q" placeholder="Search" />
              <label className="button searchbutton flex justify-center" htmlFor="searchright">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-current">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </label>
            </div>
          </div>
          <div className="hidden lg:flex mr-28 gap-20">
            <button className="p-2 flex items-center gap-1 group nav opacity-70 hover:opacity-100 duration-150">
              <span>Why Fode</span>
              <svg className="w-4 fill-current group-hover:-translate-y-1 duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.07 4.92998C15.2658 4.12416 14.2405 3.57519 13.124 3.35264C12.0076 3.13009 10.8501 3.24397 9.79845 3.67986C8.74676 4.11574 7.84812 4.85401 7.21641 5.80112C6.58471 6.74823 6.24837 7.86154 6.25001 8.99998C6.25001 9.1989 6.32902 9.38966 6.46968 9.53031C6.61033 9.67097 6.80109 9.74998 7.00001 9.74998C7.19892 9.74998 7.38968 9.67097 7.53034 9.53031C7.67099 9.38966 7.75001 9.1989 7.75001 8.99998C7.74803 8.15659 7.99644 7.33158 8.46378 6.6295C8.93111 5.92742 9.59633 5.37985 10.3752 5.05618C11.154 4.73251 12.0113 4.64731 12.8386 4.81136C13.6659 4.97542 14.4259 5.38135 15.0223 5.97772C15.6186 6.57409 16.0246 7.33407 16.1886 8.16136C16.3527 8.98865 16.2675 9.84602 15.9438 10.6248C15.6201 11.4037 15.0726 12.0689 14.3705 12.5362C13.6684 13.0035 12.8434 13.252 12 13.25C11.8019 13.2526 11.6126 13.3324 11.4725 13.4725C11.3324 13.6126 11.2526 13.8019 11.25 14V16C11.25 16.1989 11.329 16.3897 11.4697 16.5303C11.6103 16.671 11.8011 16.75 12 16.75C12.1989 16.75 12.3897 16.671 12.5303 16.5303C12.671 16.3897 12.75 16.1989 12.75 16V14.7C13.813 14.5576 14.8152 14.1212 15.6436 13.44C16.472 12.7587 17.0938 11.8598 17.4389 10.8442C17.784 9.82874 17.8387 8.73706 17.5968 7.69214C17.355 6.64723 16.8262 5.6906 16.07 4.92998Z"
                />
                <path
                  d="M12 20.75C12.6904 20.75 13.25 20.1904 13.25 19.5C13.25 18.8096 12.6904 18.25 12 18.25C11.3096 18.25 10.75 18.8096 10.75 19.5C10.75 20.1904 11.3096 20.75 12 20.75Z"
                />
              </svg>
            </button>
            <button className="relative p-2 nav opacity-70 hover:opacity-100 duration-150">
              <span>
                About
              </span>
            </button>
            <button className="p-2 flex items-center gap-1 group nav opacity-70 hover:opacity-100 duration-150">
              <span>Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 group-hover:translate-y-1 duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-outline border-white text-white hover:text-[#ffdb81] hover:bg-transparent hover:border-[#ffdb81] rounded-full capitalize px-6">Sign up</button>
            <button className="btn rounded-full bg-[#ffdb80] hover:bg-[#ffdb81] capitalize px-7 ">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
