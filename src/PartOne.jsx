import React from "react";

function PartOne() {
  return (
    <div className="mt-24 md:mt-36">
      <div className="relative">
        <div className="img_text flex-auto flex">
          <div className="flex flex-row ">
            <div className="HEADING-WRITE ml-8 ">
              <h2 className="uppercase border-black w-fit px-3 py-1.5 border-2 text-sm mt-4 md:mt-0 font-medium">
                why qrates
              </h2>

              <h1 className="text-4xl md:text-6xl font-bold md:w-[24rem] w-[16rem] mt-6 md:mt-8">
                Music in your hands.{" "}
                <span className="relative after:h-2 after:left-0 after:bottom-0 after:rounded-3xl after:rotate-2 after:w-full after:bg-black after:absolute ">
                  Without the barriers.
                </span>{" "}
              </h1>
              <h3 className="md:w-[30rem] w-[20rem] md:text-2xl text-lg mt-4 md:mt-10 md:font-semibold">
                Full-service production, a global retail network, customer
                support - and you keep up to 85% of profits. ↓
              </h3>
            </div>
          </div>
        </div>
        {/* PICS SECTION */}
        <section className="relative xl:hidden ">
          <div
            className="max-sm:w-[320px] max-sm:h-[400px] 
            max-md:w-[400px] max-md:h-[500px] max-lg:w-[530px] max-lg:h-[600px] max-xl:w-[640px] max-xl:h-[700px]
           bg-[url(https://assets.qrates.com/assets/pages/why/top_section_image_1-19e17128a5c5d00086b015c854c53e996947b7b6c3861da0018d176972ff9b24.png)] object-cover object-center float-right mt-10 rotate-[5deg] "
          ></div>

          <div
            className="max-sm:w-[320px] max-sm:h-[400px]
            max-md:w-[400px] max-md:h-[500px]
            max-lg:w-[530px] max-lg:h-[600px]
            max-xl:w-[640px] max-xl:h-[700px]
           bg-[url(https://assets.qrates.com/assets/pages/why/top_section_image_2-437b9cf9e5119f1e270f4fd3cafafaf2683ae3d5c11c2cca3b57228d4f0e5ba8.png)] object-cover object-center float-left -rotate-[5deg] "
          ></div>
          <div
            className="w-[12rem] h-[10rem]
          max-sm:w-[6rem] max-sm:h-[10rem]
          bg-no-repeat float-right mr-0 md:mr-8 mt-20"
          >
            <img
              className="max-[420px]:hidden p-6 max-md:p-0 max-lg:p-2 max-xl:p-0"
              src="https://assets.qrates.com/assets/common/sticker/paid_to_artists-67aaceef55833613704b30da81f0ffce0727e17e879bdaa3f7cba9a63917fa17.svg"
              alt=""
            />
          </div>
        </section>

        {/* END SECTION */}
        <div className="max-xl:hidden flex flex-col relative ">
          <div className="rotate-[5deg] ml-[40rem] right-[10rem] md:absolute z-10 top-[-28rem] min-w-[20rem]">
            <img
              className="w-[90%] max-md:w-[80%] border-dashed border-2 border-black "
              src="https://assets.qrates.com/assets/pages/why/top_section_image_1-19e17128a5c5d00086b015c854c53e996947b7b6c3861da0018d176972ff9b24.png"
              alt="pic"
            />
          </div>

          <div className="-rotate-[5deg] flex ml-10 md:ml-28  mt-8 absolute">
            <img
              className="max-md:w-[80%] border-dashed border-2 border-black "
              src="https://assets.qrates.com/assets/pages/why/top_section_image_2-437b9cf9e5119f1e270f4fd3cafafaf2683ae3d5c11c2cca3b57228d4f0e5ba8.png"
              alt=""
            />
          </div>
          <div className=" mt-32 justify-end flex-row  p-[20%] hidden md:flex">
            <img
              className="circle"
              src="https://assets.qrates.com/assets/common/sticker/paid_to_artists-67aaceef55833613704b30da81f0ffce0727e17e879bdaa3f7cba9a63917fa17.svg"
              alt=""
            />
          </div>
          <hr className="border-b w-full max-lg:hidden border-black absolute left-0 bottom-16 z-[-1] " />
        </div>
      </div>
    </div>
  );
}

export default PartOne;
