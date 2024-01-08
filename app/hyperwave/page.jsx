import Image from "next/image";
import React from "react";
import hyperwaveImg from "../public/assets/projects/HyperwaveKenya.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const hyperwave = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={hyperwaveImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Hyperwave Networks </h2>
          <h3> It solutions and networking company</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            {/* I built this app to demonstrate knowledge working in React JS and
						accessing API endpoints. This app was built using React JS and is
						hosted on Firebase. This application supports user authentication
						using firebase. Users are able to create a new account using their
						email address and can then sign in to save coins to a user specific
						list. This is made possble by creating a firestore cloud storage
						database at the time of user registration. Another feature of this
						application is dynamic routing through the &quot;React Router
						DOM&quot; package. This application was built using the Coin Gecko
						API. */}
            As a contracted IT developer, I contributed to the dynamic digital
            presence of Hyperwave Technologies, a cutting-edge networking
            company. Through skillful coding and strategic design, I enhanced
            the website's user experience, ensuring seamless navigation and
            efficient access to its innovative networking solutions.
            Collaborating closely with the team, I integrated state-of-the-art
            features that spotlighted Hyperwave's prowess in the industry. The
            result is a responsive and visually captivating website that mirrors
            the company's commitment to technological advancement. My role in
            shaping Hyperwave's virtual gateway underscores my dedication to
            elevating brands through impactful digital solutions.
          </p>

          <a
            href="https://www.hyperwave.co.ke/"
            target="_blank"
            rel="noreferrer"
          >
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

export default hyperwave;
