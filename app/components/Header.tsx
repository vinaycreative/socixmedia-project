import React from "react";
import Container from "./Container";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full py-8">
      <Container>
        <div className="flex items-center justify-between px-5 sm:px-0">
          <img src="/images/logo.svg" alt="logo" />
          <Link
            href={"#contact"}
            className=" inline-flex rounded-full border border-primary px-6 py-3 text-base text-primary hover:bg-primary hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Header;
