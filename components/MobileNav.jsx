import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { navData } from "./navData";

const MobileNav = () => {
  const { pathname, events } = useRouter();
  const navRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsNavVisible(false);
      }
    };

    const closeOnRouteChange = () => setIsNavVisible(false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    events.on("routeChangeComplete", closeOnRouteChange);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      events.off("routeChangeComplete", closeOnRouteChange);
    };
  }, [events]);

  return (
    <>
      <button
        type="button"
        className="hamburger-btn pointer-events-auto"
        aria-label={isNavVisible ? "Close navigation" : "Open navigation"}
        aria-expanded={isNavVisible}
        aria-controls="mobile-nav"
        onClick={() => setIsNavVisible((prev) => !prev)}
      >
        <span className={`hamburger-line first ${isNavVisible ? "toggled" : ""}`} />
        <span className={`hamburger-line second ${isNavVisible ? "toggled" : ""}`} />
        <span className={`hamburger-line third ${isNavVisible ? "toggled" : ""}`} />
      </button>

      <nav
        ref={navRef}
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`pointer-events-auto fixed left-1/2 top-1/2 z-50 w-[min(90vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/15 bg-black/80 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 xl:hidden ${
          isNavVisible
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navData.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${
                  isActive
                    ? "border-accent/60 bg-accent/15 text-accent"
                    : "border-white/10 bg-white/[0.02] text-white/90 hover:border-accent/50 hover:text-accent"
                }`}
              >
                <span>{link.name}</span>
                <link.Icon aria-hidden className="text-lg" />
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
