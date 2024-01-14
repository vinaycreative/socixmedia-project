import React from "react";
import Image from "next/image";
import Container from "./Container";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <Container>
      <div className="mt-32 flex items-center justify-center gap-5">
        <div className="w-[40%]">
          <Image
            src="/images/contact.png"
            alt="Contact Us"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="max-w-[500px] lg:max-w-full"
          />
        </div>

        <div className="w-[55%]">
          <h3 className="mb-10 text-4xl font-semibold">Contact Us</h3>
          <form action="" className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border-2 border-primary p-4 px-5 text-base outline-none"
            />
            <input
              type="text"
              placeholder="Mail"
              className="w-full rounded-lg border-2 border-primary p-4 px-5 text-base outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-lg border-2 border-primary p-4 px-5 text-base outline-none"
            />
            <Textarea
              className="w-full rounded-lg border-2 border-primary p-4 px-5 text-base outline-none"
              placeholder="Message"
            />
            <Button className="w-fit rounded-full bg-primary px-8 py-6 text-lg">
              Send
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
