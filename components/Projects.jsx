import React from "react";
import potatoImg from "../public/assets/projects/Mr-PotatoHead.png";
import hyperwaveImg from "../public/assets/projects/HyperwaveKenya.png";
import namlahImg from "../public/assets/projects/Namlah.png";
import eateryImg from "../public/assets/projects/eatery.png";

import gtc from "../public/assets/projects/gtc-mall.png";
import firmImg from "../public/assets/projects/firm.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <main id="projects" className="w-full pt-16">
      <div className="max-w-[1240px] mx-auto px-2 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="GTC-mall"
            backgroundImg={gtc}
            projectUrl="/gtc"
            tech="https://gtc-v2.vercel.app"
          />
          <ProjectItem
            title="Namlah Homes"
            backgroundImg={namlahImg}
            projectUrl="/namlah"
            tech="https://namlahhomes.com"
          />
          <ProjectItem
            title="Mr Potato"
            backgroundImg={potatoImg}
            projectUrl="/potato"
            tech="Grocery eccomerce website"
          />
          <ProjectItem
            title="hyperwave"
            backgroundImg={hyperwaveImg}
            projectUrl="/hyperwave"
            tech="https://www.hyperwave.co.ke"
          />
          <ProjectItem
            title="law"
            backgroundImg={firmImg}
            projectUrl="/law"
            tech="https://njuguna-law.vercel.app/"
          />
          <ProjectItem
            title="eatery"
            backgroundImg={eateryImg}
            projectUrl="/eatery"
            tech="foody-nu.vercel.app
            "
          />
        </div>
      </div>
    </main>
  );
};

export default Projects;
