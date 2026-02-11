import Link from "next/link";
import { useRouter } from "next/router";

import MobileNav from "./MobileNav";
import { navData } from "./navData";

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 top-0 z-50 flex w-full flex-col items-center xl:right-[2%] xl:inset-x-auto xl:w-16 xl:justify-center"
    >
      <div className="pointer-events-auto hidden h-[80px] w-full items-center justify-between gap-y-8 rounded-full border border-white/10 bg-black/45 px-4 py-8 text-2xl shadow-2xl backdrop-blur-xl xl:flex xl:h-max xl:flex-col xl:justify-center xl:px-0">
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
      <MobileNav />
    </nav>
  );
};

export default Nav;
