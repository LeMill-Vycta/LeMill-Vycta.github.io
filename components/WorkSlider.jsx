"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Tabs } from "./ui/tabs";
import { CardBody, CardContainer, CardItem } from "./ui/3dcard";
import Beam from "./ui/beam.tsx";
import { motion } from "framer-motion";

const workSlides = {
  slides: [
    {
      title: "Business",
      images: [
        {
          title: "Agency Website",
          path: "/designs/agency.png",
          link: "https://agencyvyc.netlify.app",
        },
        {
          title: "Autofix Website",
          path: "/designs/autofix.png",
          link: "https://autofixvyc.pages.dev",
        },
        {
          title: "Barbershop Website",
          path: "/designs/barber.png",
          link: "https://barbervyc.pages.dev",
        },
        {
          title: "Bookish Website",
          path: "/designs/bookish.png",
          link: "https://bookishvyc.pages.dev",
        },        
        {
          title: "Dentelo Website",
          path: "/designs/dentelo.png",
          link: "https://dentelovyc.pages.dev",
        },
        {
          title: "Eduweb Website",
          path: "/designs/eduweb.png",
          link: "https://eduwebvyc.pages.dev",
        },
        {
          title: "Ridex Website",
          path: "/designs/ridex.png",
          link: "https://ridexvyc.pages.dev",
        },
        {
          title: "Fasteat Website",
          path: "/designs/fasteat.png",
          link: "https://fasteatvyc.pages.dev",
        },
        {
          title: "Filmlane Website",
          path: "/designs/filmlane.png",
          link: "https://filmlanevyc.pages.dev",
        },
        {
          title: "Fitlife Website",
          path: "/designs/fitlife.png",
          link: "https://fitlifevyc.pages.dev",
        },
        {
          title: "Foodie Website",
          path: "/designs/foodie.png",
          link: "https://foodievyc.pages.dev",
        },      
        {
          title: "Gamics Website",
          path: "/designs/gamics.png",
          link: "https://gamicsvyc.pages.dev",
        },
        {
          title: "Grilli Website",
          path: "/designs/grilli.png",
          link: "https://grillivyc.pages.dev",
        },
        {
          title: "Halloween Website",
          path: "/designs/halloween.png",
          link: "https://halloweenvyc.pages.dev",
        },
        {
          title: "Homeverse Website",
          path: "/designs/homeverse.png",
          link: "https://homeversevyc.pages.dev",
        },
        {
          title: "Tourly Website",
          path: "/designs/tourly.png",
          link: "https://tourlyvyc.pages.dev",
        },
      ],
    },
    {
      title: "Ecommerce",
      images: [
        {
          title: "Anon Ecommerce",
          path: "/designs/anonecom.jpg",
          link: "https://anonecommvyc.pages.dev",
        },
        {
          title: "Casmart Website",
          path: "/designs/casmart.png",
          link: "https://casmartvyc.pages.dev",
        },
        {
          title: "Cryptex Website",
          path: "/designs/cryptex.png",
          link: "https://cryptexvyc.pages.dev",
        },
        {
          title: "Footcap Website",
          path: "/designs/footcap.png",
          link: "https://footcapvyc.pages.dev",
        },
        {
          title: "Glowing Website",
          path: "/designs/glowing.png",
          link: "https://glowingvyc.pages.dev",
        },
        {
          title: "Kitter Website",
          path: "/designs/kitter.png",
          link: "https://kittervyc.pages.dev",
        },
        {
          title: "NFT Website",
          path: "/designs/nft.png",
          link: "https://nftvyc.netlify.app",
        },
        {
          title: "Plants Website",
          path: "/designs/plants.png",
          link: "https://plantsvyc.pages.dev",
        },
        {
          title: "Restaurant Website",
          path: "/designs/restaurant.png",
          link: "https://restaurantvyc.pages.dev",
        },
        {
          title: "Watches Website",
          path: "/designs/watches.png",
          link: "https://watchesvyc.pages.dev",
        },
        {
          title: "Woodex Website",
          path: "/designs/woodex.png",
          link: "https://woodexvyc.pages.dev",
        },        
      ],
    },
    {
      title: "3D",
      images: [
        {
          title: "Bytecraft",
          path: "/designs/gooey.png",
          link: "https://bytecraftvyc.pages.dev",
        },
        {
          title: "Can",
          path: "/designs/can.png",
          link: "https://noisewebglcan.vercel.app",
        },
        {
          title: "Factory",
          path: "/designs/factory.png",
          link: "/factoryvyc/factory.html",
        },
        {
          title: "John Doe",
          path: "/designs/johndoe.png",
          link: "https://threejs3D.vercel.app",
        },
        {
          title: "Location",
          path: "/designs/location.png",
          link: "https://locationvyc.vercel.app",
        },
        {
          title: "Pixel Loading",
          path: "/designs/pixel.png",
          link: "https://pixelvyc.pages.dev",
        },
        {
          title: "Scroll Morph",
          path: "/designs/morph.png",
          link: "https://morphvyc.pages.dev",
        },
        {
          title: "Sticky Transitions",
          path: "/designs/sticky.png",
          link: "https://stickyvyc.pages.dev",
        },
        {
          title: "This Website",
          path: "/designs/vyctalemill.png",
          link: "https://vyctalemill.com",
        },
        {
          title: "Voyage",
          path: "/designs/voyager.png",
          link: "https://portfolio3js.netlify.app",
        },
        
        // Add more images as needed
      ],
    },
    {
      title: "Personal",
      images: [
        {
          title: "Blog Website",
          path: "/designs/blogy.png",
          link: "https://blogyvyc.netlify.app",
        },
        {
          title: "Ethan Portfolio",
          path: "/designs/portfolio.png",
          link: "https://portfoliovyc.netlify.app",
        },
        {
          title: "Jack Porfolio",
          path: "/designs/jack.png",
          link: "https://jackvyc.pages.dev",
        },
        {
          title: "Space Portfolio",
          path: "/designs/spaceportfolio.png",
          link: "https://space-vyc.vercel.app",
        },
        {
          title: "Vcard Website",
          path: "/designs/vcard.png",
          link: "https://vcardvyc.pages.dev",
        },
        {
          title: "Wren Blog",
          path: "/designs/brief.png",
          link: "https://biovyc.netlify.app",
        },
        {
          title: "Xportfolio",
          path: "/designs/xportfolio.png",
          link: "https://xportfolio-vyc.vercel.app",
        },
      ],
    },
    {
      title: "UI",
      images: [
        {
          title: "Clock UI Website",
          path: "/designs/clock-ui.png",
          link: "https://clock-uivyc.pages.dev",
        },
        {
          title: "Dashboard Design",
          path: "/designs/dashboard.png",
          link: "https://dashboardvyc.netlify.app",
        },
        {
          title: "Landing Page",
          path: "/designs/landing.png",
          link: "https://landingpagevyc.pages.dev",
        },
        {
          title: "Simple Slides Website",
          path: "/designs/simpleslide.png",
          link: "https://simpleslidesvyc.pages.dev",
        },
        {
          title: "Slides Horizontal",
          path: "/designs/horizontal.png",
          link: "https://slideshorizontalvyc.pages.dev",
        },
        {
          title: "Slides Vertical",
          path: "/designs/vertical.png",
          link: "https://slidesverticalvyc.pages.dev",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const tabs = useMemo(
    () =>
      workSlides.slides.map((slide, index) => ({
        title: slide.title,
        value: `slide-${index + 1}`,
        content: (
          <div className="grid row-auto gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {slide.images.map((image, imageI) => (
              <div key={imageI} style={{ perspective: "1000px" }}>
                <motion.div>
                  <Beam className="top-0 hidden xl:block" />
                  <CardContainer className="relative rounded-2xl">
                    <CardBody
                      className={`group/card relative h-[18.5rem] w-full rounded-2xl border border-accent/40 bg-matte p-5 hover:border-accent hover:shadow-glow md:h-[19rem] ${
                        imageI === slide.images.length - 1 ? "mb-8 xl:mb-10" : ""
                      }`}
                    >
                      <CardItem translateZ="45" className="text-base font-semibold tracking-wider">
                        {image.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="58"
                        className="mt-2 max-w-sm text-xs text-white/65 md:text-sm"
                      >
                        Click image for <span className="font-semibold text-accent">Live Preview</span>
                      </CardItem>

                      <Link
                        href={image.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-x-1 text-[12px] tracking-[0.18em]"
                      >
                        <CardItem translateZ="100" className="mt-4 w-full gap-x-1">
                          <Image
                            src={image.path}
                            alt={image.title}
                            height={300}
                            width={500}
                            loading="lazy"
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 42vw, 28vw"
                            className="mb-2 h-40 w-full rounded-xl object-cover transition-all duration-300 group-hover/card:shadow-xl"
                          />
                        </CardItem>
                      </Link>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              </div>
            ))}
          </div>
        ),
      })),
    []
  );

  return (
    <div className="relative my-6 flex w-full max-w-6xl flex-col items-start justify-center xl:my-10">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default WorkSlider;

  
