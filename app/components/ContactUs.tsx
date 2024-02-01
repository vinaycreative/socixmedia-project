import React from "react"
import Image from "next/image"
import Container from "./Container"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

const ContactUs = () => {
  return (
    <div className="relative w-full overflow-hidden pb-10 pt-0" id="contact">
      <Container>
        <div className="flex items-center justify-around gap-5 ">
          <div className="hidden flex-1 lg:flex">
            <Image
              src="/images/contactus-section-illustration.png"
              alt="Contact Us"
              data-aos="fade-right"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="max-w-[500px] lg:max-w-full"
            />
          </div>

          <div className="flex-1" data-aos="fade-left">
            <h3 className="mb-10 text-4xl font-semibold">Contact Us</h3>
            <form action="" className="flex flex-col items-center gap-6 lg:items-start">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border-2 border-primary py-3.5 px-5 text-base focus:outline-none focus:ring focus:ring-violet-200 transtion-all"
              />
              <input
                type="text"
                placeholder="Mail"
                className="w-full rounded-lg border-2 border-primary py-3.5 px-5 text-base focus:outline-none focus:ring focus:ring-violet-200 transtion-all"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-lg border-2 border-primary py-3.5 px-5 text-base focus:outline-none focus:ring focus:ring-violet-200 transtion-all"
              />
              <Textarea
                className="w-full rounded-lg border-2 border-primary py-3.5 px-5 text-base outline-none"
                placeholder="Message"
              />
              <Button className="w-full md:w-fit hover:bg-indigo-400 rounded-full bg-primary px-8 py-6 text-lg cursor-pointer">
                Send
              </Button>
            </form>
          </div>
        </div>
      </Container>
      <Image
        data-aos="fade-right"
        className="absolute -right-40 -bottom-40 rotate-45 w-[500px]"
        src="/images/vector.svg"
        alt="vector"
        width={500}
        height={700}
      />

      <Image
        className="absolute right-20 top-0 w-28"
        src="/images/hero-rectangle.svg"
        alt="ellipse-1"
        width={112}
        height={112}
      />
      <Image
        className="hidden md:block absolute left-24 bottom-8 w-14"
        src="/images/hero-circle.svg"
        alt="ellipse-2"
        width={56}
        height={56}
      />
    </div>
  )
}

export default ContactUs
