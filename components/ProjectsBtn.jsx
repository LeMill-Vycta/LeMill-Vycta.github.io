import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="group mx-auto pb-8 xl:mx-0 xl:pb-0">
      <Link
        href="/designs"
        className="relative flex h-[130px] w-[130px] items-center justify-center rounded-full border border-accent/35 bg-circleStar bg-cover bg-center shadow-glow transition-all duration-300 hover:border-accent min-[420px]:h-[150px] min-[420px]:w-[150px] md:h-[170px] md:w-[170px]"
      >
        <Image
          src="/rounded-text.png"
          alt="View designs"
          width={170}
          height={170}
          className="h-[102px] w-[102px] animate-spin-slow opacity-85 min-[420px]:h-[116px] min-[420px]:w-[116px] md:h-[130px] md:w-[130px]"
          priority
        />

        <span className="absolute text-center text-xs font-bold uppercase tracking-[0.14em] text-accent transition-opacity duration-300 group-hover:opacity-0 min-[420px]:text-sm min-[420px]:tracking-[0.16em]">
          New
          <br />
          Designs
        </span>

        <HiArrowRight
          aria-hidden
          className="absolute text-4xl text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
