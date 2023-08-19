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

        <div className="flex md:gap-2 list-none items-center">
          <label className="swap swap-rotate items-center">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-8 h-8 mr-2"
              xmlns="http://www.w3.org/2000/svw-8 h-8g"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {/* search & shopping cart */}
          <div className="flex md:gap-2">
            <li>
              <FiSearch size={"24"} className=" max-md:mr-4 cursor-pointer" />
            </li>
            <li>
              <FiShoppingCart
                className="flex cursor-pointer ml-2"
                size={"24"}
              />
            </li>
          </div>
          {/* hamburger */}
          <li>
            <div className="md:hidden dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost rounded-btn text-3xl ml-4"
              >
                ☰
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[10] p-2 shadow bg-base-100 rounded-box w-[25rem] mt-4 border-2 h-[40rem] border-black text-3xl font-semibold flex flex-col relative"
              >
                <li>
                  <a>Records & cassettes</a>
                </li>
                <li>
                  <a>discover</a>
                </li>
                <li>
                  <a>for artists</a>
                </li>
                <li>
                  <a>our company</a>
                </li>
                <li>
                  <a>social media</a>
                </li>
                <div className=" absolute bottom-56 right-10">
                  <img
                    className="w-28"
                    src="https://assets.qrates.com/packs/media/sticker/peace-00944d62.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col mt-[8rem]">
                  <button className="mt-[3rem] py-[1rem] text-black text-sm bg-white rounded-full border-2 border-black uppercase">
                    log in
                  </button>
                  <button className="mt-2 py-[1rem] text-white text-sm bg-black rounded-full border-2 border-black uppercase">
                    make a record
                  </button>
                </div>
              </ul>
            </div>
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
