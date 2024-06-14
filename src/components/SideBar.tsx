import { buttonVariants } from "@/UI/Buttons";
import { motion } from "framer-motion";
import { FC } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
type SideBarProps = {
  setIsOpen: () => void;
  type: "side" | "nav";
};

const SideBar: FC<SideBarProps> = ({ setIsOpen, type }) => {
  return (
    <motion.nav
      variants={menuVar}
      initial="initial"
      animate="animate"
      exit="exit"
      className={` fixed inset-y-0 z-50 right-0  w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10${
        type === "nav" ? "lg:hidden  " : ""
      }`}
      role="dialog"
    >
      <div className="flex flex-row  items-center justify-between pb-3 border-b">
        <div className=" flex flex-row items-center justify-between ">
          <h3 className="text-base text-base-900 font-semibold leading-7 ">
            Finders
          </h3>
        </div>
        <div className="text-base-900 cursor-pointer" onClick={setIsOpen}>
          <MdOutlineClose />
        </div>
      </div>

      <div className="space-y-2 ">
        {sideLinks.map(({ link, path }) => (
          <div key={link}>
            <Link
              className="-mx-3 px-3 block text-sm font-semibold leading-7 py-2  hover:bg-gray-100"
              to={path}
              onClick={setIsOpen}
            >
              {link}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-6  ">
        <div className="flex text-base-900 items-center gap-2 mt-3">
          <Link
            to="/register"
            onClick={setIsOpen}
            className={buttonVariants({
              variant: "outline",
              size: "sm",
            })}
          >
            Register
          </Link>
          <Link
            to="/login"
            onClick={setIsOpen}
            className={buttonVariants({ size: "sm" })}
          >
            Sign in
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default SideBar;

export const menuVar = {
  initial: { opacity: 0, width: 0 },
  animate: { opacity: 1, width: "100%", transition: { duration: 0.5 } },
  exit: { opacity: 0, width: 0 },
};

export const sideLinks = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "About",
    path: "/about",
  },
  {
    link: "Contact",
    path: "/contact",
  },
];
