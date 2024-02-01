import React from "react"
import Container from "@/app/components/Container"
import Image from "next/image"

const AboutUs = () => {
  return (
    <div className="w-full relative py-4 overflow-hidden" id="about">
      <Container>
        <div className="w-full flex flex-col md:flex-row justify-around items-center px-10">
          <div className="flex-1 rounded-full overflow-hidden ">
            <Image
              data-aos="zoom-in"
              className="rounded-full"
              src="/images/aadi-pic.png"
              alt="owner-photo"
              width={500}
              height={500}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1
              className=" text-3xl font-semibold mb-4 leading-[52px] text-slate-700"
              data-aos="fade-up"
              data-aos-delay="3"
            >
              About Us
            </h1>
            <p
              className="text-base font-normal text-slate-600 mb-3"
              data-aos="fade-up"
              data-aos-delay="2"
            >
              Founded in 2023, not in a garage, but in the visionary mind of Aaditya Jha, the
              founder of SocixMedia, we are an innovative digital marketing agency. Aaditya's
              entrepreneurial spirit and forward-thinking mindset laid the foundation for our
              journey towards transforming brands and making a lasting impact in the digital
              landscape.
            </p>
            <p
              className="text-base font-normal text-slate-600 mb-4"
              data-aos="fade-up"
              data-aos-delay="1"
            >
              At SocixMedia, we ain't just some regular service, we're all about crafting dope
              stories that grab your heart, blow your mind, and actually get sh*t done. We totally
              get how crucial your brand is and the dreams you're holding tight. Our mission?
              Making those dreams come true by slaying it on social media, so your voice can be
              heard loud and clear by the whole damn world.
            </p>
          </div>
        </div>
      </Container>
      <Image
        className="absolute right-0 top-8 w-16"
        src="/images/hero-circle.svg"
        alt="ellipse"
        width={64}
        height={64}
      />
      <img
        className="absolute -right-60 top-0 w-100 "
        src="/images/random-shape-1.svg"
        alt="ellipse-1"
        width={440}
        height={4437}
      />
      <Image
        className="absolute left-90 top-16 w-28 animate-pulse"
        src="/images/hero-rectangle.svg"
        alt="ellipse"
        width={112}
        height={112}
      />
      <Image
        className="hidden md:block absolute left-24 bottom-8 w-14"
        src="/images/hero-circle.svg"
        alt="ellipse"
        width={56}
        height={56}
      />
    </div>
  )
}

export default AboutUs
