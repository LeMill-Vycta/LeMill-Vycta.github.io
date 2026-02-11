import Image from "next/image";

const Bulb = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 z-10 w-[95px] select-none mix-blend-difference opacity-25 contrast-150 xl:-bottom-16 xl:w-[130px] xl:opacity-40"
    >
      <Image
        src="/bulb-cut.png"
        alt=""
        width={160}
        height={100}
        sizes="(max-width: 1200px) 95px, 130px"
        className="h-full w-full"
      />
    </div>
  );
};

export default Bulb;
