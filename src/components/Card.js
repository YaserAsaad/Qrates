function Card({ colors, setColors }) {
  return (
    <div>
      <section className="">
        <div className="max-md:hidden grid grid-cols-2 relative border-2 border-black">
          <div
            className={` lg:h-[56rem] ${
              colors ? "bg-[#FF6711]" : "bg-[#FFF804]"
            } flex flex-col gap-[12rem]`}
          >
            <h4 className="uppercase border-black  bg-white px-3 py-1.5 border-2 text-sm font-semibold w-fit m-8 ">
              ARTISTS ON QRATES
            </h4>
            <h2 className="text-[1.6rem] font-medium m-8 max-w-lg">
              {colors
                ? "We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies."
                : "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."}

              <p className="text-xl mt-6">
                —
                <a className="underline" href="">
                  {colors
                    ? "Mason Lieberman (The Real Folk Blues, 2020)"
                    : "SOL"}
                </a>
              </p>
            </h2>
            <div className="spans m-8 ">
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
          <div className="lg:h-[56rem] border-2 border-t-0 border-black">
            {colors ? (
              <img
                className="h-[56rem] w-full "
                src="https://images.prismic.io/qrates-prd/86e9c6a8-3732-41a8-82e3-c63d3f97b45f_artist_mason.jpg?auto=compress,format"
              />
            ) : (
              <img
                className="h-[56rem] w-full "
                src="https://images.prismic.io/qrates-prd/88610884-3509-4baa-aeb0-a49ed0c8300b_artist_sol.jpg?auto=compress,format"
                alt=""
              />
            )}
          </div>
          <img
            className="absolute w-[12rem] z-20 right-[6%] top-[-10%]"
            src="https://assets.qrates.com/assets/common/sticker/watching-d8a03faae53805783d95adee0858be2f3e9b5e99d85c85913cbea868695ec621.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Card;
