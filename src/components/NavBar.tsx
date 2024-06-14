import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { buttonVariants } from "../UI/Buttons";
import logo from "@/assets/logo.png";
import SideBar from "./SideBar";
import { AnimatePresence } from "framer-motion";
type NavProps = {};

const NavBar: FC<NavProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpenNavHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="shadow-md">
        <div className="container mx-auto flex justify-between p-1  items-center ">
          <div className="text-xl lg:flex-1">
            <Link to="/">
              <img src={logo} alt="" className="  w-10" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="  flex items-center gap-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm underline-offset-4 underline transition ease-in-out duration-200"
                      : "text-sm"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm underline-offset-4 underline"
                      : "text-sm"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm underline-offset-4 underline"
                      : "text-sm"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden justify-end md:flex lg:flex-1 gap-3 ">
            <Link
              to="register"
              className={`${buttonVariants({
                variant: "outline",
                size: "sm",
              })} `}
            >
              Register
            </Link>
            <Link
              to="login"
              className={`${buttonVariants({
                variant: "default",
                size: "sm",
              })}`}
            >
              Login
            </Link>
          </div>
          <div
            className={`md:hidden cursor-pointer`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <RxHamburgerMenu />
          </div>
        </div>
        <AnimatePresence>
          {isOpen && <SideBar setIsOpen={toggleOpenNavHandler} type="nav" />}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;
