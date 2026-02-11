import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { LuCoffee } from "react-icons/lu";
import { RiInstagramLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

const socialData = [
  {
    name: "Instagram",
    href: "https://instagram.com/almakcentre",
    Icon: RiInstagramLine,
  },
  {
    name: "GitHub",
    href: "https://github.com/LeMill-Vycta",
    Icon: TbBrandGithub,
  },
  {
    name: "Email",
    href: "mailto:contact@vyctalemill.com",
    Icon: IoMdMail,
  },
];

const baseIconClass =
  "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] p-2 text-base text-white/90 transition-all duration-300 hover:border-accent/60 hover:text-accent hover:shadow-glow";

const Socials = ({ compact = false }) => {
  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-3"}`}>
      {socialData.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={social.name}
          title={social.name}
          className={baseIconClass}
        >
          <social.Icon aria-hidden className={compact ? "text-sm" : "text-base"} />
        </Link>
      ))}

      {!compact && (
        <Link
          href="https://ko-fi.com/lemill"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-accent/55 bg-accent/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/20 hover:text-white"
        >
          <LuCoffee aria-hidden />
          Coffee
        </Link>
      )}
    </div>
  );
};

export default Socials;
