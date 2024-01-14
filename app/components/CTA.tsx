import React from "react"
import Container from "@/app/components/Container"

const CTA = () => {
  return (
    <Container>
      <div className="py-10 px-20 my-10 bg-primary rounded-[30px] flex items-center justify-between gap-4">
        <h2 className="text-white text-[24px] font-semibold">
          Get a FREE quote from our sales executives
        </h2>
        <input
          type="text"
          placeholder="Enter your email"
          className="flex-1 py-3 px-5 rounded-full "
        />
        <button className="text-primary py-3 px-6 font-medium bg-white hover:scale-95 transition-all rounded-full">
          Submit
        </button>
      </div>
    </Container>
  )
}

export default CTA
