import React from "react"
import Container from "@/app/components/Container"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"
import { Faq } from "@/app/data"

const FAQ = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Container>
        <div className="flex items-center">
          <div className="hidden w-[40%] lg:block">
            <Image
              src="/images/faq-section-illustration.png"
              alt="FAQ"
              width={534}
              height={534}
              className="max-w-[500px] lg:max-w-full"
            />
          </div>
          <div className="flex w-full flex-col gap-5 lg:w-[55%] z-20">
            <h3 className="mb-4 text-4xl font-semibold leading-[52px] ">FAQ</h3>

            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {Faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border-2 border-primary px-5 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={index + 1}
                >
                  <AccordionTrigger className="text-slate-700 hover:no-underline hover:text-primary font-semibold">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-[15px]">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>

      <img
        className="absolute right-80 top-0 w-28 animate-pulse"
        src="/images/question.svg"
        alt="question-6"
        width={112}
        height={133}
      />
      <Image
        data-aos="fade-right"
        className="absolute -right-20 -bottom-40 rotate-45 w-[450px]"
        src="/images/vector.svg"
        alt="ellipse"
        width={450}
        height={630}
      />
    </div>
  )
}

export default FAQ
