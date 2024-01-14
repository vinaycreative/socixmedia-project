import React from "react"

const Divider = () => {
  return (
    <div className="flex items-center justify-between my-16">
      <div className=" mx-5 h-[2px] w-full bg-primary md:mx-20" />

      <div className="hidden items-center justify-center md:flex">
        {Array.from(Array(12).keys()).map((item, index) => (
          <div key={index} className="mx-[10px] rounded-full bg-primary p-[4px]" />
        ))}
      </div>

      <div className="flex items-center justify-center md:hidden">
        {Array.from(Array(4).keys()).map((item, index) => (
          <div key={index} className="mx-[10px]  rounded-full bg-primary p-[4px]" />
        ))}
      </div>
      <div className="mx-5 h-[2px] w-full bg-primary md:mx-20" />
    </div>
  )
}

export default Divider
