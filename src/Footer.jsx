import React from "react";

function Footer() {
  return (
    <div className="">
      <section>
        <div className="flex flex-col justify-center items-center py-[8rem] bg-black text-white ">
          <h4 className="uppercase border-white w-fit px-3 py-1.5 border-2 text-sm  md:mt-0 font-medium ">
            QRATES STUDIO
          </h4>
          <h2 className="md:text-4xl font-semibold my-[2rem] max-w-sm text-center">
            Make it real with Qrates Studio
          </h2>
          <h3 className="md:text-lg font-medium max-w-sm md:max-w-2xl text-center mb-[2rem]">
            Design the look and feel of your vinyl and cassette and use the
            profit calculator to immediately see how much your project will
            cost, and how much you'll earn.
          </h3>
          <div className="my-[3rem] mb-[6rem] w-[15rem] md:w-[30rem] lg:w-[36rem] relative">
            <img
              src="https://assets.qrates.com/packs/media/section_vinyl_studio/sample_4dilla-d886be83.png"
              alt=""
            />
            <img
              className="absolute top-[-25%] left-[-30%] w-[20%] z-10 "
              src="https://assets.qrates.com/packs/media/sticker/dollar_white-94a2da47.png"
              alt=""
            />
          </div>
          <button
            className="bg-[#FFF804] text-black p-2 
           px-20 md:px-36 md:p-6 text-md font-medium uppercase rounded-full border-2 border-black"
          >
            try it now
          </button>
        </div>
      </section>
      {/* the real footer */}
      <section className="px-20 bg-black">
        <div className=" ">
          <footer className="footer  md:p-10 bg-black text-neutral-content text-lg grid grid-cols-2 md:flex gap-32">
            <div>
              <span className="footer-title">FOR ARTISTS</span>
              <a className="link link-hover">Why Qrates?</a>
              <a className="link link-hover">Crowdfunding</a>
              <a className="link link-hover">Make & Sell</a>
              <a className="link link-hover">Our Services</a>
              <a className="link link-hover">Artist Toolkit</a>
              <a className="link link-hover">Referral Program</a>
            </div>
            <div>
              <span className="footer-title">FOR FANS</span>
              <a className="link link-hover">Discover</a>
              <a className="link link-hover">Records</a>
              <a className="link link-hover">Stories</a>
              <a className="link link-hover">Lists</a>
              <a className="link link-hover">Artists & Labels</a>
            </div>
            <div>
              <span className="footer-title">OUR COMPANY</span>
              <a className="link link-hover">About Qratese</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Partners</a>
            </div>
            <div>
              <span className="footer-title">HELP</span>
              <a className="link link-hover">Support Center</a>
              <a className="link link-hover">Contact Us</a>
              <a className="link link-hover">Returns</a>
              <a className="link link-hover">Shipping</a>
            </div>
          </footer>
        </div>
        {/* the image of footer */}
        <div className="flex max-sm:flex-col   md:flex-row md:justify-between pt-[10rem] pb-[5rem] md:items-center">
          <img
            className="bg-black w-[25rem] "
            src="https://assets.qrates.com/assets/common/logos/qrates-logo-footer-63b9d6b5d17935952ed3dfae37556ac898f2c9a8358a662de836094fa1030642.svg"
            alt=""
          />
          <div>
            {/* language dropdown */}
            <div className="flex md:items-center flex-col ">
              <div className="flex items-start md:items-end flex-col ">
                <div className="dropdown mb-4 max-sm:ml-20 max-sm:mt-8">
                  <label tabIndex={0} className="btn m-1">
                    English
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-black text-white border border-white rounded-box w-[6.5rem]"
                  >
                    <li>
                      <a>English</a>
                    </li>
                    <li>
                      <a>عربي</a>
                    </li>
                  </ul>
                </div>
                {/* social network icons */}

                <div className="flex items-center flex-col max-sm:ml-20 max-sm:mt-2">
                  <div className="grid grid-flow-col gap-4">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current cursor-pointer"
                        color="white"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        color="white"
                        className="fill-current cursor-pointer"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        color="white"
                        className="fill-current cursor-pointer"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                {/* terms of service */}
                <div className="mt-10 max-sm:text-center max-sm:ml-16 ">
                  <ul className="md:flex md:flex-row md:gap-6 text-white ">
                    <li className="cursor-pointer hover:underline">
                      Terms of Service
                    </li>
                    <li className="cursor-pointer hover:underline">
                      Privacy Policy
                    </li>
                    <li className="cursor-pointer hover:underline">
                      Legal Information
                    </li>
                    <li className="hover:bg-red-800">© Y5SO</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
