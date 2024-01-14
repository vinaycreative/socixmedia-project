import Image from "next/image";
import React from "react";

type Props = {};

const FreeQuote = (props: Props) => {
  return (
    <div className="m-10 flex items-center justify-center  lg:my-40">
      <form className="relative flex w-full flex-col  items-center justify-between rounded-3xl bg-primary px-20 py-5 text-white lg:h-[100px] lg:w-[85%] lg:flex-row  lg:py-16">
        <h1 className="w-full text-center text-xl font-semibold lg:w-1/2">
          Get a FREE quote from our sales executives
        </h1>
        <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 lg:mt-0 lg:w-1/2 lg:flex-row lg:gap-10">
          <input
            type="text"
            className="h-14 w-2/3 rounded-full pl-8 font-medium text-black outline-none placeholder:font-medium placeholder:text-gray-400"
            placeholder="Enter Your Email"
          />
          <button className="w-fit rounded-full bg-white px-10 py-2 font-semibold text-primary ">
            Submit
          </button>
        </div>

        <div className="absolute right-5  w-[30%] min-w-[300px]">
          <Image
            src={"/images/quote-bg.svg"}
            alt="quote"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </form>
    </div>
  );
};

export default FreeQuote;
