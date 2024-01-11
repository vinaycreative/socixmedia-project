import React from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "./Container";

const Hero = () => {
  return (
    <div className="relative">
      <Container className="mt-14 flex h-full w-full justify-center  lg:mt-0 lg:h-[90vh]">
        <div className="flex w-[90%] flex-col items-center  justify-center lg:flex-row lg:justify-evenly">
          <div className="flex flex-col items-center justify-center pr-4 text-center lg:items-start lg:justify-center lg:text-start">
            <div className="w-[90%]">
              <h1 className=" mb-4 text-5xl font-semibold leading-[52px]">
                Empowering Your Brand's Social Media Presence
              </h1>

              <p className="mb-4 text-base font-normal text-gray-600">
                We are committed to providing our clients with the
                highest-quality digital marketing services bro, using the latest
                technologies to achieve their business goals.
              </p>

              <Link
                href={"#contact"}
                className=" inline-flex rounded-full border border-primary bg-primary px-6 py-3 text-base font-semibold text-white"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="flex w-full items-center justify-center lg:w-[90%]">
            <Image
              src={"/images/home-illustration.png"}
              alt="hero-image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="max-w-[500px] lg:max-w-full"
            />
          </div>

          <img
            className="absolute -left-0 top-32 w-28"
            src="/images/hero-ellipse.svg"
            alt="ellipse"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
