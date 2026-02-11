import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-10 w-[180px] select-none mix-blend-color-dodge opacity-45 xl:w-[360px]"
    >
      <Image
        src="/top-left-img.png"
        alt=""
        width={360}
        height={360}
        priority
        sizes="(max-width: 1200px) 180px, 360px"
      />
    </div>
  );
};

export default TopLeftImg;
