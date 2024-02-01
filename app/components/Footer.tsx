import { Facebook, Instagram, Linkedin, Twitter, PhoneCall, Mail } from "lucide-react"
import Image from "next/image"
import React from "react"

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="flex w-full flex-col  items-center  justify-center gap-10 bg-slate-900 px-10 py-10 text-center lg:h-[200px]">
      <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="w-[200px] ">
          <Image
            src="images/logo.svg"
            alt="logo"
            width={200}
            height={52}
            className="max-w-[500px] lg:max-w-full"
          />
        </div>
        <div className="text-base flex flex-col items-center justify-center gap-5 text-center text-slate-400 sm:flex-row">
          <div className="flex items-center gap-1 hover:text-slate-300">
            <Mail size={18} />
            <a href="mailto:socixmediabiz@gmail.com" className="transition-all">
              socixmediabiz@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-1 hover:text-slate-300">
            <PhoneCall size={18} />
            <a href="tel:+918788818633" className="transition-all">
              +918788818633
            </a>
          </div>
          <div className="flex items-center gap-1 hover:text-slate-300">
            <PhoneCall size={18} />
            <a href="tel:+918080810736" className="transition-all">
              +918080810736
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 text-slate-400">
          <a
            className="hover:text-slate-300 transition-all"
            aria-label="facebook"
            href="https://www.facebook.com/people/SocixMedia/100093518701411/"
            target="_blank"
          >
            <Facebook />
          </a>
          <a
            aria-label="linkedin"
            className="hover:text-slate-300 transition-all"
            href="https://www.linkedin.com/in/aaditya-jha-510332263"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            aria-label="twitter"
            className="hover:text-slate-300 transition-all"
            href="https://twitter.com/socixmedia"
            target="_blank"
          >
            <Twitter />
          </a>
          <a
            aria-label="instagram"
            className="hover:text-slate-300 transition-all"
            href="https://www.instagram.com/socixmedia/"
            target="_blank"
          >
            <Instagram />
          </a>
        </div>
      </div>

      <p className="text-gray-300 text-sm">&copy; 2022 SocixMedia. All rights reserved</p>
    </footer>
  )
}

export default Footer
