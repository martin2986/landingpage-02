import { FC } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import FooterItem from "./FooterItem";
import FooterIcon from "./FooterIcon";
type FooterProps = {};

const company = [
  {
    name: "About",
    path: "about",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
  {
    name: "Support",
    path: "support",
  },
  {
    name: "Careers",
    path: "careers",
  },
];
const quickLinks = [
  {
    name: "Share Location",
    path: "location",
  },
  {
    name: "Property Management",
    path: "management",
  },
  {
    name: "Size Guide",
    path: "guide",
  },
  {
    name: "FAQ",
    path: "faq",
  },
];
const legal = [
  {
    name: "Terms & Condition",
    path: "terms",
  },
  {
    name: "Privacy Policy",
    path: "policy",
  },
];
const Footer: FC<FooterProps> = () => {
  return (
    <div className=" bg-indigo-950 text-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="p-3 flex flex-row justify-between flex-wrap">
          <div
            className=" w-full  md:w-32 mb-5 md:mb-0  text-center md:text-left
          "
          >
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <p className="text-xs md:w-36">
              Building a next generation platform to connect renters home owners
              and agent
            </p>
            <div className="flex flex-row gap-3 my-4 mx-4 justify-center ">
              <FooterIcon icon={<FaFacebookF />} />
              <FooterIcon icon={<FaInstagram />} />
              <FooterIcon icon={<FaTwitter />} />
              <FooterIcon icon={<FaLinkedinIn />} />
            </div>
          </div>
          <FooterItem items={company} title="Contact" />
          <FooterItem items={quickLinks} title="Quick Links" />
          <FooterItem items={legal} title="Legal" />
        </div>
      </div>

      <div className=" py-5 bg-transparent w-full inline-flex justify-center ">
        <span className="text-xs text-center md:text:sm text-gray-500 dark:text-gray-300">
          © 2023
          <a href="https://flowbite.com/">
            <strong> Company</strong>
          </a>
          <span> . All Rights Reserved.</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
