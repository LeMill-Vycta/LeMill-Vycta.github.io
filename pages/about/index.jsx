import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaAws,
  FaCcStripe,
  FaFigma,
  FaHtml5,
  FaJoomla,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { FaLaravel, FaPython } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypePhp, BsPaypal } from "react-icons/bs";
import {
  GiArtificialIntelligence,
  GiAustralia,
  GiFrance,
  GiJapan,
  GiKenya,
  GiSouthAfrica,
  GiTanzania,
} from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAircanada,
  SiBlender,
  SiCplusplus,
  SiDungeonsanddragons,
  SiNextdotjs,
} from "react-icons/si";

import Bulb from "../../components/Bulb";
import { fadeIn } from "../../variants";

export const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaLaravel,
          FaReact,
          FaPython,
          SiCplusplus,
          BsFiletypePhp,
          FaAws,
          FaHtml5,
          FaJs,
          BiLogoTypescript,
          SiNextdotjs,
          FaJoomla,
          FaWordpress,
          FaCcStripe,
          BsPaypal,
        ],
      },
      {
        title: "UI/UX and Creative",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop, SiBlender, GiArtificialIntelligence],
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Full-stack Developer - Almak Centre Limited",
        stage: "2020 - Present",
      },
      {
        title: "Cybersecurity Consultant - Source44 Consulting",
        stage: "2019 - 2020",
      },
      {
        title: "Web Developer - Inflo",
        stage: "2017 - 2019",
      },
      {
        title: "ICT Consultant - County Government",
        stage: "2015 - 2017",
      },
      {
        title: "Backend Developer - Peak Technologies",
        stage: "2014 - 2017",
      },
      {
        title: "Project Collaborations",
        stage: "2013 - Present",
      },
    ],
  },
  {
    title: "Credentials",
    info: [
      {
        title: "AWS Cloud Practitioner Essentials - Fullstack Academy and AWS",
        stage: "2023",
      },
      {
        title: "Three.js Course - Three.js Journey",
        stage: "2022",
      },
      {
        title: "Hardware and Networking Training - Camara Education",
        stage: "2021",
      },
      {
        title: "UX Design - Google UX Design",
        stage: "2020",
      },
      {
        title: "Web Development - BrainStation",
        stage: "2020",
      },
      {
        title: "Cybersecurity Training - Offensive Security",
        stage: "2018",
      },
      {
        title: "Computer Information Technology - Methodist University",
        stage: "2015",
      },
    ],
  },
  {
    title: "Countries",
    info: [
      {
        title: "Kenya",
        icons: [GiKenya],
      },
      {
        title: "United States",
        icons: [LiaFlagUsaSolid],
      },
      {
        title: "Japan",
        icons: [GiJapan],
      },
      {
        title: "Canada",
        icons: [SiAircanada],
      },
      {
        title: "South Africa",
        icons: [GiSouthAfrica],
      },
      {
        title: "Australia",
        icons: [GiAustralia],
      },
      {
        title: "Tanzania",
        icons: [GiTanzania],
      },
      {
        title: "China",
        icons: [SiDungeonsanddragons],
      },
      {
        title: "France",
        icons: [GiFrance],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden px-0 pb-14 pt-32 md:pt-36">
      <div className="container mx-auto flex flex-col gap-8 xl:flex-row xl:items-start">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:w-[44%]"
        >
          <span className="accent-chip">About Me</span>
          <h1 className="h1 mt-6">
            Building bold digital products where <span className="text-accent">strategy</span> meets precision.
          </h1>
          <p className="mb-5 text-sm md:text-base xl:text-lg">
            I started coding more than a decade ago and evolved from freelance execution into full-cycle product
            engineering. Today I partner with agencies, startups, and business teams to design and ship platforms that
            look premium and perform at scale.
          </p>
          <p className="text-sm md:text-base xl:text-lg">
            My edge is a blend of engineering rigor, design sensitivity, and applied AI. I focus on outcomes that are
            measurable: faster products, clearer brand presence, and stronger user conversion.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="section-shell rounded-2xl p-4 text-center">
              <div className="text-2xl font-extrabold text-accent">
                <CountUp start={0} end={11} duration={3} />+
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/70">Years</p>
            </div>
            <div className="section-shell rounded-2xl p-4 text-center">
              <div className="text-2xl font-extrabold text-accent">
                <CountUp start={0} end={794} duration={3.5} />+
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/70">Clients</p>
            </div>
            <div className="section-shell rounded-2xl p-4 text-center">
              <div className="text-2xl font-extrabold text-accent">
                <CountUp start={0} end={2450} duration={3.8} />+
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/70">Projects</p>
            </div>
            <div className="section-shell rounded-2xl p-4 text-center">
              <div className="text-2xl font-extrabold text-accent">
                <CountUp start={0} end={9} duration={3} />
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/70">Countries</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.26)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:w-[56%]"
        >
          <div className="section-shell shell-dynamic h-full rounded-[2rem]">
            <div className="no-visible-scrollbar mb-6 flex flex-nowrap gap-2 overflow-x-auto overflow-y-hidden pb-2 pr-3 sm:flex-wrap sm:overflow-visible">
              {aboutData.map((item, itemI) => {
                const isActive = index === itemI;

                return (
                  <button
                    type="button"
                    key={item.title}
                    className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-200 md:text-sm ${
                      isActive
                        ? "border-accent/65 bg-accent/15 text-accent"
                        : "border-white/15 text-white/75 hover:border-accent/40 hover:text-accent"
                    }`}
                    onClick={() => setIndex(itemI)}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            <div className="grid gap-3">
              {aboutData[index].info.map((item, itemI) => (
                <article
                  key={`${item.title}-${itemI}`}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                >
                  <h3 className="text-sm font-semibold text-white md:text-base">{item.title}</h3>
                  {item.stage && (
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-accent/90 md:text-sm">{item.stage}</p>
                  )}

                  {item.icons?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.icons.map((Icon, iconI) => (
                        <span
                          key={`${item.title}-icon-${iconI}`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-lg text-white/90"
                        >
                          <Icon />
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <Bulb />
    </section>
  );
};

export default About;
