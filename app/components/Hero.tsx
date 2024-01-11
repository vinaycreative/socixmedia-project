import React from "react"
import Container from "./Container"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative">
      <Container>
        <div className="flex justify-evenly">
          <div className="flex flex-col justify-center pr-4">
            <div className="w-[85%]">
              <h1 className=" text-5xl font-medium mb-4 leading-[52px]">
                Empowering Your Brand's Social Media Presence
              </h1>
              <p className="text-base font-normal text-gray-600 mb-4">
                We are committed to providing our clients with the highest-quality digital
                marketing services bro, using the latest technologies to achieve their business
                goals.
              </p>
              <Link
                href={"#contact"}
                className=" inline-flex px-6 py-3 border border-primary rounded-full text-base bg-primary text-white"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="image">
            <img src="/images/home-illustration.png" alt="hero-image" />
          </div>
          <img
            className="absolute -left-0 top-32 w-28"
            src="/images/hero-ellipse.svg"
            alt="ellipse"
          />
        </div>
      </Container>
    </div>
  )
}

export default Hero
