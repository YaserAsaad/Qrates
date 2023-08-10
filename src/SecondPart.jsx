import React from "react";

function SecondPart() {
  return (
    <div className="">
      <div className="flex justify-center mt-[2rem] mb-[6rem]">
        <p className="text-4xl text-black font-bold">
          Choose from two formats and three project types.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <section className=" bg-[#497775] border-2 border-black flex justify-center ">
          <div className="flex items-center flex-col my-[5rem]">
            <h4 className="uppercase border-black  bg-white px-3 py-1.5 border-2 text-sm font-semibold w-fit">
              VINYL PRODUCTION
            </h4>
            <h2 className="font-bold text-4xl text-black my-[2rem] self-center">
              Vinyl
            </h2>
            <p className="max-w-[30rem] text-center text-xl ">
              We know how special pressed records are to you. Our products are
              built for fans, by fans. We make it easy for artists to press
              vinyl, so the music you love can keep reaching ears in the most
              beautiful way.
            </p>
            <img
              className="w-[40%] my-[3rem]"
              src="https://assets.qrates.com/assets/common/sticker/vinyl-love-97bd449a3eecf71ebb8a0b78bf4409a22fb4bfa82b2f7f07db0c60cbd1bf3206.png"
              alt=""
            />
            <button className="mt-[2rem] font-semibold bg-black text-white rounded-3xl p-3 px-6 uppercase mt-">
              make your own vinyl
            </button>
          </div>
        </section>
        <section className=" bg-[#81836C] border-2 border-black justify-center flex">
          <div className="flex items-center flex-col my-[5rem]">
            <h4 className="uppercase border-black  bg-white px-3 py-1.5 border-2 text-sm font-semibold w-fit">
              CASSETTE DUPLICATION
            </h4>
            <h2 className="font-bold text-4xl text-black my-[2rem] self-center">
              Cassette
            </h2>
            <p className="max-w-[30rem] text-center text-xl ">
              Cassettes have always been special to music fans and artists.
              Whether you are saving a recording of a great concert, or
              preserving an early demo, there’s no better way to keep that music
              close than on cassette tapes.
            </p>
            <img
              className="w-[80%] my-[2rem]"
              src="https://assets.qrates.com/assets/common/sticker/cassette-run-c52594419a36edac41325e29aaf63ccf99db98385f37d212ea20f77d71ab390d.png"
              alt=""
            />
            <button className="mt-[2rem] font-semibold bg-black text-white rounded-3xl p-3 px-6 uppercase mt-">
              make your own CASSETTE
            </button>
          </div>
        </section>
      </div>
      {/* little break */}
      <div className="flex flex-col justify-center my-[4rem]">
        <p className="md:text-lg text-center max-md:hidden font-medium">
          Choose the project type that best suits your needs depending on
          pressing costs and delivery time.
        </p>
        <p className="md:hidden text-4xl font-medium text-center mb-[1rem]">
          Find your fit
        </p>
        <p className="md:hidden text-center self-center max-w-[18rem] font-medium">
          Choose the best Qrates project type to suit your needs ↓
        </p>
      </div>
      {/* end of break */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <section className=" bg-[#81836C] border-2 border-black flex justify-center">
          <div className="flex items-center flex-col my-[5rem]">
            <h4 className="uppercase border-black  bg-white px-3 py-1.5 border-2 text-sm font-semibold w-fit">
              GET INTO IT
            </h4>
            <h2 className="font-bold text-4xl text-black my-[2rem] self-center">
              Make & Sell
            </h2>
            <p className="max-w-[30rem] text-center text-xl ">
              Put your music on physical, sooner. Take pre-orders from fans and
              we'll take care of the rest.
            </p>
            <img
              className="w-[70%] my-[3rem]"
              src="https://assets.qrates.com/assets/common/sticker/press_sell-79f40b644d0a73d034023b8a030a3a7eb72b8719c861c1e8d9fc83121ead6525.png"
              alt=""
            />
            <button className="mt-[2rem] font-semibold bg-black text-white rounded-3xl p-3 px-20 uppercase mt-">
              learn more
            </button>
          </div>
        </section>
        <section className=" bg-[#FFF804] border-2 border-black justify-center flex">
          <div className="flex items-center flex-col my-[5rem]">
            <h4 className="uppercase border-black  bg-white px-3 py-1.5 border-2 text-sm font-semibold w-fit">
              NO RISK, NO WASTE
            </h4>
            <h2 className="font-bold text-4xl text-black my-[2rem] self-center">
              Crowdfunding
            </h2>
            <p className="max-w-[30rem] text-center text-xl ">
              Rally your fans and gather pledges. Press the exact number of
              records you need, without having to pay anything upfront.
            </p>
            <img
              className="w-[60%] my-[1.4rem]"
              src="https://assets.qrates.com/assets/common/sticker/crowdfunding-5e98c304d1cfa25d58fc9bce9fc720a25f5b21f17b12645c17b089bc08af0db6.png"
              alt=""
            />
            <button className="mt-[2rem] font-semibold bg-black text-white rounded-3xl p-3 px-20 uppercase mt-">
              learn more
            </button>
          </div>
        </section>
      </div>
      {/* little break */}
      <div className="flex max-md:flex-col justify-center h-[13rem] bg-black ">
        <p className="md:text-xl text-md max-md:text-center text-white max-w-[25rem] md:max-w-[50rem] self-center font-medium">
          Just after straight up vinyl pressing or cassette duplication? We do
          that too. Tell us where and we'll ship in bulk to wherever you need.
        </p>
        <a
          className="max-md:mt-[1.5rem] underline text-white self-center font-medium"
          href="#"
        >
          START A PRESS ONLY PROJECT
        </a>
      </div>
      {/* end of break */}
    </div>
  );
}

export default SecondPart;
