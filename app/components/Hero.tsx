import React from "react"
import Container from "./Container"
import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="flex-1 flex flex-col justify-center pr-4 ">
            <div className="relative z-[1] w-[85%] ">
              <h1
                className="text-4xl md:text-5xl font-semibold mb-4 leading-[52px] text-slate-700"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Empowering Your Brand's Social Media Presence
              </h1>
              <p
                className="text-[15px] md:text-base font-normal text-slate-600 mb-4"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                We are committed to providing our clients with the highest-quality digital
                marketing services bro, using the latest technologies to achieve their business
                goals.
              </p>
              <Link
                data-aos="fade-bottom"
                data-aos-delay="100"
                href={"#contact"}
                className=" inline-flex px-6 py-3 border border-primary rounded-full text-base bg-primary text-white"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="flex-1overflow-hidden">
            <img
              data-aos="fade-left"
              data-aos-delay="100"
              src="/images/home-illustration.svg"
              alt="hero-image-poster"
              width={600}
              height={400}
            />
          </div>
          <Image
            className="absolute right-4 md:right-90 top-16 w-28"
            src="/images/hero-rectangle.svg"
            alt="ellipse"
            data-aos="fade-top"
            data-aos-delay="100"
            width={112}
            height={112}
          />

          <Image
            data-aos="fade-right"
            data-aos-delay="100"
            className="absolute left-90 bottom-10 w-20"
            src="/images/hero-circle.svg"
            alt="ellipse"
            width={80}
            height={80}
          />
        </div>
      </Container>
    </div>
  )
}

export default Hero
