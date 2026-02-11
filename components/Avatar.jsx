import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/hero-bg.svg"
        alt="avatar"
        width={650}
        height={650}
        className="w-full h-full m-5"
      />
    </div>
  );
};

export default Avatar;
