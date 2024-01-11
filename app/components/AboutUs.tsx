import React from "react";
import Image from "next/image";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 px-[10%] py-[8%] md:flex-row ">
        <div className="flex w-1/2 items-center justify-center rounded-full md:w-1/3">
          <Image
            src={"/images/aadi-pic.png"}
            alt="hero-image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="max-w-[500px] rounded-full lg:max-w-full"
          />
        </div>

        <div className="flex flex-col items-start md:ml-10 md:w-1/2">
          <h3 className="m-5 ml-0 text-center text-3xl font-semibold lg:text-4xl">
            About us
          </h3>
          <article className="text-sm">
            <p>
              Founded in 2023, not in a garage, but in the visionary mind of
              Aaditya Jha, the founder of SocixMedia, we are an innovative
              digital marketing agency. Aaditya's entrepreneurial spirit and
              forward-thinking mindset laid the foundation for our journey
              towards transforming brands and making a lasting impact in the
              digital landscape.
            </p>
            <br />
            <p>
              At SocixMedia, we ain't just some regular service, we're all about
              crafting dope stories that grab your heart, blow your mind, and
              actually get sh*t done. We totally get how crucial your brand is
              and the dreams you're holding tight. Our mission? Making those
              dreams come true by slaying it on social media, so your voice can
              be heard loud and clear by the whole damn world.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
