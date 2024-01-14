import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="mt-10 flex w-full flex-col  items-center  justify-center gap-10 bg-[#F6FCFF] px-10 py-10 text-center lg:h-[200px]">
      <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="w-[200px] ">
          <Image
            src="images/logo.svg"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="max-w-[500px] lg:max-w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 text-center text-primary sm:flex-row">
          <a href="">socixmediabiz@gmail.com</a>
          <a href="">+918788818633</a>
          <a href="">+918080810736</a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Facebook />
          <Linkedin />
          <Twitter />
          <Instagram />
        </div>
      </div>

      <p className="text-gray-400">
        &copy; 2022 SocixMedia. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
