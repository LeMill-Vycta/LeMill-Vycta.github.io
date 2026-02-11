import Link from "next/link";
import { useRouter } from "next/router";

import MobileNav from "./MobileNav";
import { navData } from "./navData";

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <>
      <nav
        aria-label="Primary desktop navigation"
        className="pointer-events-none fixed inset-y-0 right-[max(0.8rem,2vw)] z-50 hidden items-center xl:flex"
      >
        <div className="pointer-events-auto flex h-max flex-col items-center gap-7 rounded-full border border-white/10 bg-black/45 px-3 py-7 text-2xl shadow-2xl backdrop-blur-xl">
          {navData.map((link) => {
            const isActive = link.path === pathname;

            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex items-center rounded-full p-2 transition-all duration-300 ${
                  isActive ? "text-accent" : "text-white/80 hover:text-accent"
                }`}
              >
                <link.Icon aria-hidden className="text-xl" />
                <span className="sr-only">{link.name}</span>
                <span className="pointer-events-none absolute right-14 hidden rounded-md border border-accent/40 bg-black/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-glow xl:group-hover:block">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <MobileNav />
    </>
  );
};

export default Nav;
