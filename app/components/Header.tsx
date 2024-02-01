import React from "react"
import Container from "./Container"
import Link from "next/link"
import Image from "next/image"
import { PhoneCall } from "lucide-react"

function Header() {
  return (
    <header className="w-full py-8">
      <Container>
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <img src="/images/logo.svg" alt="brand-logo" width={200} height={30} />
          </Link>
          <div className="flex items-center gap-6 ">
            <Link
              href={"#services"}
              className="hidden md:block text-base text-slate-700 hover:text-primary font-medium"
            >
              Services
            </Link>
            <Link
              href={"#about"}
              className="hidden md:block text-base text-slate-700 hover:text-primary font-medium"
            >
              About us
            </Link>
            <Link
              href={"#contact"}
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary rounded-full text-base text-primary hover:bg-primary hover:text-white transition-all"
            >
              <PhoneCall size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
