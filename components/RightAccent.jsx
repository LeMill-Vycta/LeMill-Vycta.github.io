import Image from "next/image";

const RightAccent = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[52vw] max-w-[680px] select-none overflow-hidden"
    >
      <div className="absolute -right-20 top-[12%] h-64 w-64 rounded-full bg-accent/20 blur-[100px] md:h-80 md:w-80" />
      <div className="absolute right-[10%] top-[45%] h-56 w-56 rounded-full bg-cyan-400/15 blur-[95px] md:h-72 md:w-72" />
      <div className="absolute inset-y-[8%] right-[20%] hidden w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:block" />
      <Image
        src="/circles.png"
        alt=""
        width={700}
        height={700}
        priority
        sizes="(max-width: 1200px) 380px, 700px"
        className="absolute -bottom-24 -right-32 hidden w-[420px] opacity-30 mix-blend-screen md:block xl:w-[560px]"
      />
    </div>
  );
};

export default RightAccent;
