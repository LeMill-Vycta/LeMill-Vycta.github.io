import Image from "next/image";
import Link from "next/link";

import Socials from "./Socials";

const Header = () => {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 w-full px-3 pt-3 md:px-6">
      <div className="container mx-auto">
        <div className="pointer-events-auto flex items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-6">
          <Link href="/" className="group inline-flex items-center" aria-label="Go to home page">
            <Image
              src="/logo.svg"
              alt="Vycta Lemill"
              width={200}
              height={44}
              priority
              className="h-auto w-[150px] transition-transform duration-300 group-hover:scale-[1.02] md:w-[200px]"
            />
          </Link>

          <div className="hidden md:flex">
            <Socials compact={false} />
          </div>

          <div className="md:hidden">
            <Socials compact />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
