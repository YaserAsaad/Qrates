import React from "react";

function FourthPart() {
  return (
    <div>
      <section>
        <div className="flex flex-col justify-center items-center my-[5rem]">
          <h4 className="uppercase border-black w-fit px-3 py-1.5 border-2 text-sm mt-4 md:mt-0 font-medium">
            community
          </h4>
          <h2 className="md:text-4xl font-semibold my-[2rem]">
            Join a growing community.
          </h2>
          <h3 className="md:text-lg font-medium max-w-sm md:max-w-2xl text-center mb-[2rem]">
            We're build a home for the next generation vinyl lovers and cassette
            junkies. Get in front of fans, connect with artists, labels and
            stores.
          </h3>
          <button
            className="bg-white text-black p-2 
           px-20 md:px-20 md:p-3  text-md font-medium uppercase rounded-full border-2 border-black"
          >
            read stories
          </button>
        </div>
      </section>
    </div>
  );
}

export default FourthPart;
