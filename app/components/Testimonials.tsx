"use client"

import React, { useEffect, useState } from "react"
import Container from "./Container"
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/app/components/ui/carousel"
import { TestimonialsData } from "../data"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

type Props = {}

const Testimonials = (props: Props) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [canScrollNext, setCanScrollNext] = React.useState<boolean>(true)
  const [canScrollPrev, setCanScrollPrev] = React.useState<boolean>(false)

  api?.on("select", (e) => {
    setCanScrollNext(e.canScrollNext())
    setCanScrollPrev(e.canScrollPrev())
  })

  return (
    <div className="relative my-56 mb-24 flex h-[400px] w-full items-center justify-center overflow-hidden">
      <Container>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-between">
            <h3 className="mb-4 text-center text-4xl font-semibold leading-[52px]">
              Testimonials
            </h3>
            <div className="flex gap-3">
              <Button
                onClick={() => api?.scrollPrev()}
                className="previous h-[40px] w-[40px] rounded-full bg-primary p-0"
                aria-label="previous-button"
                disabled={!canScrollPrev}
              >
                <ChevronLeft />
              </Button>
              <Button
                className="next h-[40px] w-[40px] rounded-full bg-primary p-0"
                aria-label="next-button"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className=" no-scrollbar mt-10 h-[300px] w-full gap-10 overflow-y-hidden pb-10"
            setApi={setApi}
          >
            <CarouselContent className="no-scrollbar">
              {TestimonialsData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=" md:basis-1/2"
                  data-aos="fade-left"
                  data-aos-delay={index + 1}
                >
                  <div className="no-scrollbar relative flex w-full flex-col items-start overflow-visible rounded-3xl border-2 border-primary p-10">
                    <h3 className="mb-4 text-center text-2xl font-semibold leading-[32px]">
                      {item.title}
                    </h3>
                    <p>{item.desc}</p>
                    <span className="mt-5 text-gray-500">{item.person}</span>
                    <div className="absolute -bottom-3 right-10 flex gap-3 overflow-visible">
                      {Array.from(Array(4).keys()).map((_, index) => (
                        <div
                          key={index}
                          className="h-[25px] w-[25px] rounded-full bg-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
      <img
        data-aos="fade-left"
        className="absolute -left-40 -bottom-40 rotate-45 w-[500px]"
        src="/images/vector-small.svg"
        alt="ellipse-3"
        width={500}
        height={495}
      />
    </div>
  )
}

export default Testimonials
