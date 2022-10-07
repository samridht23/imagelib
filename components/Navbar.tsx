import Logo from "../public/logo.svg";
import Image from "next/image";
import SearchIcon from "../public/search.svg";

const Navbar = () => {
  return (
    <div className="bg-gray-50 drop-shadow-md fixed w-full z-20">
      <div className="flex justify-between items-center transition ease-in-out delay-200 h-16 bg-gray-50 mx-2">
        <div className="flex w-full md:w-1/2">
          <div className="flex w-full">
            <div className="flex md:mx-4 w-7 mx-2 ">
              <Image src={Logo} />
            </div>
            <div className="w-full">
              <form>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                  Search
                </label>
                <div className="flex items-center ">
                  <div className="flex absolute items-center pl-3 w-8 pointer-events-none">
                    <Image src={SearchIcon} alt="SearchIcon" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="p-2 pl-10 w-full text-base text-gray-800 font-['NeueNormal'] bg-gray-200 focus:bg-gray-50 hover:bg-gray-50 border rounded-full border-none outline-none"
                    placeholder="Search"
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center text-true-gray-400 md:mx-6 mx-2">
          <div className="hidden md:flex items-center ">
            {links.map((e) => (
              <a
                className="text-sm font-['NeueMedium'] text-gray-400 hover:text-gray-600 mx-2"
                href={e.href}
                key={e.label}
              >
                {e.label}
              </a>
            ))}
          </div>
          <div className="md:hidden"></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

const links = [
  {
    label: "Home",
    href: "googe.com",
  },
  {
    label: "Trending",
    href: "#",
  },
  {
    label: "Latest",
    href: "#",
  },
  {
    label: "More",
    href: "#",
  },
];
