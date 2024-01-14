import React from "react"
import Container from "./Container"
import Link from "next/link"

function Header() {
  return (
    <header className="w-full py-8">
      <Container>
        <div className="flex justify-between items-center">
          <img src="/images/logo.svg" alt="logo" />
          <div className="flex items-center gap-6 ">
            <Link
              href={"#services"}
              className="text-base text-slate-700 hover:text-primary font-medium"
            >
              Services
            </Link>
            <Link
              href={"#services"}
              className="text-base text-slate-700 hover:text-primary font-medium"
            >
              About us
            </Link>
            <Link
              href={"#contact"}
              className=" inline-flex px-4 py-2 border border-primary rounded-full text-base text-primary hover:bg-primary hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
