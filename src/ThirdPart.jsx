import React from "react";

function ThirdPart() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-[5rem]">
        {/* section - 1 */}
        <section className="flex justify-center">
          <div className="flex flex-col items-center">
            <h4 className="uppercase border-black w-fit px-3 py-1.5 border-2 text-sm mt-4 md:mt-0 font-medium ">
              our services
            </h4>
            <h3
              className="font-medium text-2xl md:text-5xl text-white mt-[2rem] 
            "
              style={{ textShadow: "0 0 5px black" }}
            >
              YOU MAKE MUSIC.
              <br />
              WE DO THE REST.
            </h3>
            <div className="flex justify-center">
              <img
                className="w-[60%] md:w-[80%] mt-[4rem] border-2 border-black -rotate-6 "
                src="https://assets.qrates.com/assets/public/our_services-948e5610c19e7f56f6ac8cfbd68e02ad9eaa8eb4f40afe461eeabf9b83a4693a.jpg"
                alt=""
              />
            </div>
            <h3 className="mt-[4rem] text-center max-w-sm md:max-w-xl md:text-xl mb-8">
              We want you to be able to put all your energy into the creative
              side of making music. So we created a one-stop shop for everything
              else.
            </h3>
            <button className="mt-auto cursor-pointer px-20 p-3 text-black border-2 border-black rounded-full uppercase font-medium">
              learn more
            </button>
          </div>
        </section>
        <section>
          {/* section - 2 */}
          {/* the dropdown section later*/}
        </section>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* section 3 */}

        <section className="bg-black border-2 border-black flex justify-center ">
          <div className="flex items-center flex-col ">
            <img
              className="max-sm:w-[70%] p-8 mb-[5rem]"
              src="https://assets.qrates.com/assets/public/store_logo-33b81e17d3d1b7f21e3c59964ea0c0a6f4e78a989ee8345653962cffc4267665.png"
              alt=""
            />
            <h4 className="uppercase border-black  bg-white px-3 py-1.5 border-2 text-sm font-semibold w-fit">
              RETAIL NETWORK
            </h4>
            <h2 className="font-bold text-4xl text-white my-[2rem] text-center">
              Worldwide distro,
              <br /> demystified.
            </h2>
            <p className="md:max-w-xl text-white  text-center md:text-xl max-md:my-[2rem] max-w-sm mb-[2rem]">
              Get direct access to over 150 of our retail partners across the
              globe.
            </p>

            <button className="mb-10 font-semibold border-2 border-white text-white rounded-full p-3 px-8 uppercase max-md:text-xs ">
              contact us
            </button>
          </div>
        </section>

        {/* section 4 */}

        <section className="bg-[#e280ff] border-2 border-black flex justify-center ">
          <div className="flex items-center flex-col ">
            <div
              className="h-[20rem] w-[22rem]
               m-8 mb-[5rem]
               md:h-[20rem] md:w-[24rem]
               lg:h-[25rem] lg:w-[32rem]
               xl:h-[25rem] xl:w-[40rem]
               
               bg-cover border-2 border-black
             bg-[url(https://assets.qrates.com/assets/public/support-67aae38b60a008aff7414d12e251fa29f0d832a86a57d28e0d1667f5a55c6b8a.jpg)]"
            ></div>
            <h4 className="uppercase border-black  bg-white px-3 py-1.5 border-2 text-sm font-semibold w-fit">
              CUSTOMER SUPPORT
            </h4>
            <h2 className="font-bold text-4xl text-black my-[2rem] text-center">
              Here to help,
              <br />
              whenever you need it.
            </h2>
            <p className="md:max-w-xl text-black text-center md:text-xl max-md:my-[2rem] max-w-sm m-auto">
              Whether you’re an artist in the middle of product, or a fan with
              questions about your order; our team is here to help.
            </p>

            <button className="mb-10 font-semibold border-2 border-black bg-black text-white rounded-full p-3 px-8 uppercase max-md:text-xs m-auto">
              contact us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ThirdPart;
