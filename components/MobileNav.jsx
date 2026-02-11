import Link from "next/link";
import { useRouter } from "next/router";

import { navData } from "./navData";

const MobileNav = () => {
  const { pathname } = useRouter();

  return (
    <nav className="adaptive-nav pointer-events-auto" aria-label="Adaptive navigation">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/15 bg-black/70 p-1 shadow-2xl backdrop-blur-xl min-[420px]:p-2">
        <div className="grid grid-cols-6 gap-1 min-[420px]:gap-2">
          {navData.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`group flex min-h-[3.25rem] flex-col items-center justify-center rounded-xl border px-1 py-1.5 text-center transition-all duration-200 min-[420px]:min-h-[3.6rem] min-[420px]:py-2 ${
                  isActive
                    ? "border-accent/60 bg-accent/15 text-accent shadow-glow"
                    : "border-transparent text-white/80 hover:border-accent/40 hover:text-accent"
                }`}
              >
                <link.Icon aria-hidden className="text-base min-[420px]:text-lg" />
                <span
                  className={`mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.1em] min-[420px]:block min-[620px]:text-[11px] ${
                    isActive ? "text-accent" : "text-white/75"
                  }`}
                >
                  {link.name}
                </span>
                <span className="sr-only">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
