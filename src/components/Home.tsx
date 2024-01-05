import { FC } from "react";
import { Buttons } from "../components/Buttons";
import { CardWrapper } from "./CardWrapper";
import DropDown from "../components/DropDown";
import HeroListItem from "../components/HeroListItem";
type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <div className="container  h-screen mx-auto   ">
      <div className="flex flex-row gap-3 md:gap-8 -mx-24 px-24 bg-gray-100 pt-16">
        <div className="flex-initial w-3/5 relative ">
          <h1 className="text-3xl md:text-5xl font-bold   ">
            Find your dream Home right now
          </h1>
          <p className="text-xs md:text-sm my-5">
            We are real estate company we help you search your dream house near
            your working. Let's talk to discus
          </p>
          <Buttons title="Get Started" className="mr-2" />
          <Buttons title="Demo Video" variant="borderless" />
          <div className="inline-flex gap-3 mb-16 mt-10">
            <HeroListItem title="Experienced engineer" />
            <HeroListItem title="Experienced engineer" />
            <HeroListItem title="Experienced engineer" />
          </div>
          <CardWrapper className="absolute  -bottom-10 w-full flex flex-row justify-between items-center">
            <DropDown />
            <DropDown />
            <DropDown />
            <Buttons title="Search now" className="h-full" />
          </CardWrapper>
        </div>

        <div className="flex-initial w-full  ">
          <img
            src="https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-72 h-80 object-cover rounded mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
