import React from "react";
import Image from "next/image";
import { Features } from "@/app/data";

type Props = {};

const Feature = (props: Props) => {
  return (
    <div className="mt-20 flex w-full flex-wrap items-center justify-center gap-10 lg:flex-nowrap lg:gap-10 lg:px-20">
      {Features.map((item, index) => (
        <section className="m-3 flex w-1/2  flex-col items-center justify-start gap-5 text-center sm:m-12 md:w-1/3 lg:m-14">
          <div className="h-14 w-14">
            <Image
              src={item.image}
              alt={item.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p>{item.description}</p>
        </section>
      ))}
    </div>
  );
};

export default Feature;
