import React from "react"
import Container from "./Container"
import Link from "next/link"

function Header() {
  return (
    <header className="w-full py-8">
      <Container>
        <div className="flex justify-between items-center">
          <img src="/images/logo.svg" alt="logo" />
          <Link
            href={"#contact"}
            className=" inline-flex px-6 py-3 border border-primary rounded-full text-base text-primary hover:bg-primary hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header
