import React from "react"
import Container from "./Container"

const OurServices = () => {
  const servicesData = [
    {
      icon: "dazzle-digital-marketing-strategy.png",
      title: "Social Media Marketing",
      description:
        "Strategic promotion & engagement: Includes Meta Ads, Social Media Management, Branding and many other. time to connect with your audiences & achieve business goals.",
    },
    {
      icon: "software-development-icon.svg",
      title: "Software Development",
      description:
        "Creating functional websites: We build and design websites to provide an engaging and seamless user experience.",
    },
    {
      icon: "3d-design-icon.svg",
      title: "Graphic Design",
      description:
        "Visual communication & creativity: We craft impactful visuals to convey messages, enhance brands, and captivate audiences.",
    },
  ]
  return (
    <div className="pt-6 pb-24">
      <Container>
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-24">Our Services</h1>
          <div className="flex gap-7 px-6">
            {servicesData.map((service, index) => {
              return (
                <div className="flex flex-col items-center text-center" key={index}>
                  <img
                    className="w-20 mb-4"
                    src={`/images/${service.icon}`}
                    alt={`icon-${index}`}
                  />
                  <h2 className="text-lg text-slate-800 font-semibold mb-2">{service.title}</h2>
                  <p className="text-sm text-slate-500">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OurServices
