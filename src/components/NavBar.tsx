import { FC } from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../UI/Buttons";
import logo from "@/assets/logo.png";
type NavProps = {};

const NavBar: FC<NavProps> = () => {
  return (
    <>
      <nav className="shadow-md">
        <div className="container mx-auto flex justify-between p-1  items-center ">
          <div className="text-xl lg:flex-1">
            <Link to="/">
              <img src={logo} alt="" className="  w-10" />
            </Link>
          </div>

          <div className=" justify-end lg:flex lg:flex-1 ">
            <Link
              to="contact"
              className={`${buttonVariants({
                variant: "default",
                size: "sm",
              })}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
