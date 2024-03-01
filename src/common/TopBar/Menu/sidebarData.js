import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoMdPerson />,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <IoIcons.IoMdTabletPortrait />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
];
