import React from "react"
import Container from "@/app/components/Container"
import Image from "next/image"

const CTA = () => {
  return (
    <Container>
      <div className="relative py-10 px-20 my-10 bg-primary rounded-[30px] flex items-center flex-col md:flex-row justify-between gap-4 overflow-hidden">
        <h2 className="text-white text-center md:text-left text-[24px] font-semibold">
          Get a FREE quote from our sales executives
        </h2>
        <input
          type="text"
          placeholder="Enter your email"
          className="flex-1 py-3 px-5 rounded-full "
        />
        <button className="z-10 text-primary py-3 px-6 font-medium bg-white hover:scale-95 transition-all rounded-full">
          Submit
        </button>
        <div className="absolute right-5">
          <img src={"/images/random-shape-1.svg"} alt="quote-1" width={200} height={200} />
        </div>
      </div>
    </Container>
  )
}

export default CTA
