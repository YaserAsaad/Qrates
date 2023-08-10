import React from "react";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <div className="sm:mt-4 max-md:m-4 sm:m-6 items-center flex z-100  max-md:justify-between">
      <img
        className="w-8 md:w-10 cursor-pointer"
        src="https://assets.qrates.com/packs/media/logos/qrates-logo-6b1bd403.svg"
      />

      <div className="uppercase text-xs flex ">
        <ul className="hidden md:flex sm:shrink-0 md:gap-4 xl:gap-8 md:mx-8 items-center text-sm font-medium">
          <li className="cursor-pointer">records & cassettes</li>
          <li className="cursor-pointer">discover</li>
          <li className="underline cursor-pointer">for artists</li>
          <li className="cursor-pointer">our company</li>
        </ul>

        <div className="flex md:gap-6 list-none items-center">
          <li>
            <FiSearch size={"24"} className="mr-6 md:mr-0 cursor-pointer" />
          </li>
          <li>
            <FiShoppingCart className="flex cursor-pointer" size={"24"} />
          </li>
          <li>
            <button className="text-3xl md:hidden cursor-pointer ml-14">
              ☰
            </button>
          </li>
        </div>
        <div className="lg:flex xl:ml-[18rem]  text-[1.2rem] hidden ">
          <button className="mr-4 uppercase ">log in</button>
          <button className="uppercase  bg-black rounded-3xl p-4 px-8 text-white">
            make your own
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
