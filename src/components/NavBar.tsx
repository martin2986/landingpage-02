import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { buttonVariants } from "./Buttons";

const navLinks = [
  {
    link: " Home",
    path: "/",
  },
  {
    link: "Blog",
    path: "blog",
  },
  {
    link: "Feature",
    path: "feature",
  },
];
type NavProps = {};

const NavBar: FC<NavProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>(navLinks[0].link);
  const handleNavigation = (selected: string) => {
    setIsActive(selected);
  };
  return (
    <>
      <nav className="shadow-md">
        <div className="container mx-auto flex justify-between p-1  items-center ">
          <div className="text-xl lg:flex-1">
            <Link to="/">Home</Link>
          </div>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <RxHamburgerMenu />
          </div>
          <ul className=" hidden  lg:flex flex-row lg:gap-x-8 text-sm">
            {navLinks.map(({ link, path }) => (
              <li key={link} onClick={() => handleNavigation(link)}>
                <Link to={path}>{link}</Link>
                {isActive === link && (
                  <motion.div
                    layoutId="active-nav"
                    className="border-b-2 border-transparent border-b-black"
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="hidden justify-end lg:flex lg:flex-1 ">
            <Link
              to="contact"
              className={`${buttonVariants({
                variant: "default",
              })} bg-black px-6 hover:border-black`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden min-h-screen" role="dialog">
          <div className="fixed inset-y-0 z-50 right-0  w-full overflow-y-auto  bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className=" ">
                <Link to="/" onClick={() => setIsOpen((prev) => !prev)}>
                  Home
                </Link>
              </div>
              <div
                className=" cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <MdOutlineClose />
              </div>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navLinks.map(({ link, path }) => (
                    <div key={link}>
                      <Link
                        className="-mx-3 px-3 block text-sm font-semibold py-2 leading-7 hover:bg-gray-100"
                        to={path}
                        onClick={() => setIsOpen((prev) => !prev)}
                      >
                        {link}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <Link
                    to="login"
                    className={`${buttonVariants()} bg-black px-5 hover:border-black`}
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
