import { FC } from "react";
import { Buttons } from "../components/Buttons";
import HeroListItem from "../components/HeroListItem";

import Home from "../components/Home";
import Section from "../components/Section";
import SectionTItle from "../components/SectionTItle";
import Services from "../components/Services";
type HomeProps = {};

const HomePage: FC<HomeProps> = () => {
  return (
    <div className="">
      <Home />
      <Section
        type="left"
        image1="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image2="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <SectionTItle
          title="   Our every real-estate Near by main city"
          description=" Do I have to record this meeting gain traction, root-and-branch
          review, nor game-plan who's record this meeting gain traction."
        />
        <Buttons title="Read More" />
      </Section>
      <Services />
      <Section
        type="right"
        image2="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image1="https://images.unsplash.com/photo-1612637968894-660373e23b03?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <SectionTItle
          title="We don't sell apartment we sell feeling!"
          description="Building a next generation collaboration platform to connect renters, homeowner, and agents."
        />
        <div className="flex flex-row flex-wrap gap-3">
          <HeroListItem title="Timely apartment hand hover" />
          <HeroListItem title="Community Support" />
          <HeroListItem title="Globally recognised" />
          <HeroListItem title="Affordable Cost" />
        </div>
        <Buttons title="Discover Now" />
      </Section>
      <Section
        type="left"
        image1="https://images.unsplash.com/photo-1583902340370-6a3fc847d373?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image2="https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <SectionTItle
          title="Need a home loan"
          description="Building a next generation collaboration platform to connect renters, homeowner, and agents."
        />
        <p className="text-xs md:text-sm text-gray-500 my-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In amet
          dolor eos doloremque nihil explicabo, laboriosam ducimus tenetur
          molestiae at ipsum perspiciatis maiores aut tempora ipsa voluptas quia
          quasi recusandae?
        </p>
        <Buttons title="Calculate Payments" />
      </Section>
    </div>
  );
};

export default HomePage;
