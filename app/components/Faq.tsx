import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import Image from "next/image";
import { Faq } from "@/app/data";
import Container from "./Container";

type Props = {};

const FAQ = (props: Props) => {
  return (
    <Container className="mt-32 ">
      <div className=" flex w-full items-center justify-between gap-10 xl:w-[90%]">
        <div className="hidden w-[40%] lg:block">
          <Image
            src="/images/faq.png"
            alt="FAQ"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="max-w-[500px] lg:max-w-full"
          />
        </div>

        <div className="flex w-full flex-col gap-5 lg:w-[55%]">
          <h3 className="mb-4 text-4xl font-semibold leading-[52px] ">FAQ</h3>

          {Faq.map((item, index) => (
            <Accordion
              type="single"
              collapsible
              key={index}
              className="rounded-lg border-2 border-primary px-5"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h4 className="mb-4 cursor-pointer text-xl font-semibold leading-[32px]">
                    {item.title}
                  </h4>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-base font-normal leading-[24px]">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
