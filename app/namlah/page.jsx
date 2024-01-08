import Image from "next/image";
import React from "react";
import namlahImg from "../../public/assets/projects/Namlah.png";
import Link from "next/link";

const namlah = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[80vh] relative">
        <div className="absolute top-0 left-0 w-full h-[80vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={namlahImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Namlah homes </h2>
          <h3> property management website</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I proudly showcase my contribution to Namlah Homes Limited's dynamic
            real estate website. Seamlessly merging innovative design with
            cutting-edge functionality, I've crafted a user-centric platform
            that effortlessly connects potential buyers with their dream
            properties. Through meticulous coding and user interface
            optimization, I've enhanced the browsing experience, ensuring
            intuitive navigation and swift access to property listings. Namlah
            Homes Limited's website stands as a testament to my expertise in
            transforming vision into digital reality, empowering the real estate
            journey with technology that captivates and delivers.
          </p>

          <a href="www.namlahhomes.com" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 bg-blue-500 text-white">
              View Site
            </button>
          </a>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default namlah;
