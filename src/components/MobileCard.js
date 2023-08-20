import React from "react";

function MobileCard({ colors, setColors }) {
  return (
    <div>
      {" "}
      {/* mobile section */}
      <section className="">
        <div className="md:hidden grid grid-cols-1 relative ">
          <div
            className={` h-auto  ${
              colors ? "bg-[#FF6711]" : "bg-[#FFF804]"
            } flex flex-col   `}
          >
            <div className="h-[535px] w-full flex justify-center mt-8">
              {colors ? (
                <img
                  className="border-2 border-black w-[87%] "
                  src="https://images.prismic.io/qrates-prd/86e9c6a8-3732-41a8-82e3-c63d3f97b45f_artist_mason.jpg?auto=compress,format"
                />
              ) : (
                <img
                  className="border-2 border-black w-[87%]"
                  src="https://images.prismic.io/qrates-prd/88610884-3509-4baa-aeb0-a49ed0c8300b_artist_sol.jpg?auto=compress,format"
                  alt=""
                />
              )}
            </div>
            <h4 className="uppercase border-black  bg-white px-3 py-1.5 border-2 text-sm font-semibold w-fit m-8 ">
              ARTISTS ON QRATES
            </h4>
            <h2 className="text-[1.2rem] font-medium mx-8 max-w-sm">
              {colors
                ? "We hit our goal of 100 Records in the first 32 minutes. And to be honest, I didn't expect that. There's no world where I would have thought that we're about to sell north of 2800 copies."
                : "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."}

              <p className=" mt-14">
                —
                <a className=" underline text-[1rem]" href="">
                  {colors ? "Mason Lieberman" : "SOL"}
                </a>
              </p>
            </h2>
            <div className="spans m-8 mt-[4rem]">
              <button
                onClick={() => setColors(true)}
                className="mr-2 border-2 border-black rounded-full px-3.5 py-1.5 bg-black text-white"
              >
                1
              </button>
              <button
                onClick={() => setColors(false)}
                className="border-2 border-black rounded-full px-3.5 py-1.5"
              >
                2
              </button>
            </div>
          </div>

          <img
            className="absolute w-[8rem] md:w-[12rem] z-20 right-[6%] top-[-3%]"
            src="https://assets.qrates.com/assets/common/sticker/watching-d8a03faae53805783d95adee0858be2f3e9b5e99d85c85913cbea868695ec621.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default MobileCard;
