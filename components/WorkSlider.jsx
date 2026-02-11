"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Tabs } from "./ui/tabs";
import { CardBody, CardContainer, CardItem } from "./ui/3dcard";
import Beam from "./ui/beam.tsx";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";

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
              <motion.div
                key={`${slide.title}-${image.title}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.34, ease: "easeOut", delay: (imageI % 6) * 0.035 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.985 }}
              >
                <Beam className="top-0 hidden xl:block" />
                <CardContainer className="relative rounded-2xl">
                  <CardBody
                    className={`group/card relative h-[20rem] w-full overflow-hidden rounded-2xl border border-accent/40 bg-[linear-gradient(170deg,#161923_0%,#090d16_44%,#070a11_100%)] p-4 shadow-[0_18px_34px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-accent hover:shadow-glow sm:h-[21rem] md:h-[22rem] md:p-5 ${
                      imageI === slide.images.length - 1 ? "mb-8 xl:mb-10" : ""
                    }`}
                  >
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_8%,rgba(241,48,36,0.22),transparent_54%)] opacity-70 transition-opacity duration-300 group-hover/card:opacity-100" />

                    <CardItem translateZ={68} className="relative z-10 text-sm font-semibold tracking-[0.08em] md:text-base">
                      {image.title}
                    </CardItem>
                    <CardItem as="p" translateZ={78} className="relative z-10 mt-2 max-w-sm text-[11px] leading-6 text-white/70 md:text-sm">
                      Tap or click for <span className="font-semibold text-accent">live preview</span>
                    </CardItem>

                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="relative z-10 mt-4 flex items-start gap-y-2 text-[12px] tracking-[0.18em]"
                    >
                      <CardItem translateZ={140} className="w-full">
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                          <Image
                            src={image.path}
                            alt={image.title}
                            height={300}
                            width={500}
                            loading="lazy"
                            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 30vw"
                            className="h-44 w-full object-cover transition-all duration-300 group-hover/card:scale-[1.06] group-hover/card:brightness-110 group-active/card:scale-[1.03] md:h-48"
                          />
                        </div>
                      </CardItem>
                      <CardItem
                        translateZ={96}
                        className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/85 transition-colors duration-300 group-hover/card:border-accent/50 group-hover/card:text-accent md:text-[11px]"
                      >
                        Live preview
                        <RxArrowTopRight aria-hidden className="text-sm" />
                      </CardItem>
                    </Link>
                  </CardBody>
                </CardContainer>
              </motion.div>
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

  
