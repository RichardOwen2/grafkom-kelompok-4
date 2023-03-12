import { Link } from 'react-router-dom';
import { RiListSettingsLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <>

      <nav
        className="relative flex w-full flex-wrap items-center justify-between bg-[#1A1A1D] py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start py-5"
        data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <button
            className="block border-0 bg-transparent py-2 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd" />
              </svg>
            </span>
          </button>
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent4"
            data-te-collapse-item>
            <a className="pr-2 text-xl font-semibold text-[#E50914]" href="#">GRAFKOM</a>
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref>
              <li>
                <Link className="p-0 text-white text-sm hover:text-[#a3a2a2] disabled:text-black/30 lg:px-2 [&.active]:text-black/90" to={'/lensa/cembung'}>Lensa Cembung</Link>
              </li>
              <li>
                <Link className="p-0 text-white text-sm hover:text-[#a3a2a2] disabled:text-black/30 lg:px-2 [&.active]:text-black/90" to={'/lensa/cekung'}>Lensa Cekung</Link>
              </li>
              <li>
                <Link className="p-0 text-white text-sm hover:text-[#a3a2a2] disabled:text-black/30 lg:px-2 [&.active]:text-black/90" to={'/cermin/cekung'}>Cermin Cekung</Link>
              </li>
              <li>
                <Link className="p-0 text-white text-sm hover:text-[#a3a2a2] disabled:text-black/30 lg:px-2 [&.active]:text-black/90" to={'/cermin/cembung'}>Cermin Cembung</Link>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center">
             <button
                  className="text-white hover:text-[#a3a2a2]"
                  type="button"
                  data-te-offcanvas-toggle
                  data-te-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                    <RiListSettingsLine size={22} />
              </button>
          </div>
        </div>
      </nav>
    </>
  );
}