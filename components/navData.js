import {
  GrBusinessService,
  GrMail,
} from "react-icons/gr";
import { BsFillChatLeftHeartFill, BsPersonWorkspace } from "react-icons/bs";
import { HiHomeModern } from "react-icons/hi2";
import { SiAffinitydesigner } from "react-icons/si";

export const navData = [
  { name: "Home", path: "/", Icon: HiHomeModern },
  { name: "Designs", path: "/designs", Icon: SiAffinitydesigner },
  { name: "Services", path: "/services", Icon: GrBusinessService },
  { name: "About", path: "/about", Icon: BsPersonWorkspace },
  { name: "Testimonials", path: "/testimonials", Icon: BsFillChatLeftHeartFill },
  { name: "Contact", path: "/contact", Icon: GrMail },
];
