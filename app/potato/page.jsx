import Image from "next/image";
import React from "react";
import potatoImg from "../public/assets/projects/Mr-PotatoHead.png";
import Link from "next/link";

const potato = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={potatoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Mr PotatoSstore </h2>
          <h3> grocery ecccomerce store</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built and manage the online grocery store website "Mr. Potato Head
            & Veges." Seamlessly blending functionality and user experience, the
            platform offers a diverse range of fresh produce and grocery items
            at customers' fingertips. From intuitive browsing to secure
            checkout, I ensured a smooth digital shopping journey. The website's
            responsive design guarantees accessibility across devices, while
            robust backend integration streamlines inventory management and
            order processing. Through collaborative problem-solving and
            innovative coding, I helped establish an efficient and user-friendly
            online marketplace that caters to the modern shopper's needs.
          </p>

          <a href="www.mrpotatohead.store" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">View Site</button>
          </a>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default potato;
