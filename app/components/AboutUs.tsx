import React from "react"
import Container from "@/app/components/Container"

const AboutUs = () => {
  return (
    <div className="relative py-4">
      <Container>
        <div className="w-full flex justify-around items-center px-10">
          <div className="flex-1 rounded-full overflow-hidden ">
            <img className="rounded-full" src="./images/aadi-pic.png" alt="owner-photo" />
          </div>
          <div className="flex-1">
            <h1 className=" text-3xl font-semibold mb-4 leading-[52px] text-slate-700">
              About Us
            </h1>
            <p className="text-base font-normal text-slate-600 mb-3">
              Founded in 2023, not in a garage, but in the visionary mind of Aaditya Jha, the
              founder of SocixMedia, we are an innovative digital marketing agency. Aaditya's
              entrepreneurial spirit and forward-thinking mindset laid the foundation for our
              journey towards transforming brands and making a lasting impact in the digital
              landscape.
            </p>
            <p className="text-base font-normal text-slate-600 mb-4">
              At SocixMedia, we ain't just some regular service, we're all about crafting dope
              stories that grab your heart, blow your mind, and actually get sh*t done. We totally
              get how crucial your brand is and the dreams you're holding tight. Our mission?
              Making those dreams come true by slaying it on social media, so your voice can be
              heard loud and clear by the whole damn world.
            </p>
          </div>
        </div>
      </Container>
      <img className="absolute right-0 top-8 w-16" src="/images/hero-circle.svg" alt="ellipse" />
      <img
        className="absolute -right-60 top-0 w-100 "
        src="/images/random-shape-1.svg"
        alt="ellipse"
      />
      <img
        className="absolute left-90 top-16 w-28"
        src="/images/hero-rectangle.svg"
        alt="ellipse"
      />
      <img
        className="absolute left-24 bottom-8 w-14"
        src="/images/hero-circle.svg"
        alt="ellipse"
      />
    </div>
  )
}

export default AboutUs
