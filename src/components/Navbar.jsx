import { Link } from 'react-router-dom';
import logo from '../img/if-itk.png';
import logoIf from '../img/logo_IF.png';

export default function Navbar() {
  return (
  <>
    <nav class="bg-[#FFE1E1] border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div class="flex items-center">
            <img src={logoIf} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap">Grafkom Kelompok 4</span>
        </div>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-[#90A17D] md:hover:bg-transparent md:border-0 md:hover:text-[#90A17D] md:p-0" to={'/lensa/cembung'}>Lensa Cembung</Link>
            </li>
            <li>
              <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-[#90A17D] md:hover:bg-transparent md:border-0 md:hover:text-[#90A17D] md:p-0" to={'/lensa/cekung'}>Lensa Cekung</Link>
            </li>
            <li>
              <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-[#90A17D] md:hover:bg-transparent md:border-0 md:hover:text-[#90A17D] md:p-0" to={'/cermin/cekung'}>Cermin Cekung</Link>
            </li>
            <li>
              <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-[#90A17D] md:hover:bg-transparent md:border-0 md:hover:text-[#90A17D] md:p-0" to={'/cermin/cembung'}>Cermin Cembung</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <ul>
      <li><Link to={'/lensa/cembung'}>Lensa Cembung</Link></li>
      <li><Link to={'/lensa/cekung'}>Lensa Cekung</Link></li>
      <li><Link to={'/cermin/cekung'}>Cermin Cekung</Link></li>
      <li><Link to={'/cermin/cembung'}>Cermin Cembung</Link></li>
    </ul> */}
  </>
  );
}