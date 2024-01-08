import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Profile = () => {
  return (
    <main id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m
            <span className="text-[#5651e5]"> Bonface Njuguna </span>
          </h1>
          <h2 className="py-2 text-gray-700">
            Software Developer || Web Developer
          </h2>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I build and manage websites that seamlessly serve the requirements
            of both individual clients and enterprises, blending functionality
            with a touch of innovation
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/sammy-wekesa-562b801a5/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="text-blue-600" />
              </div>
            </Link>
            <Link
              href="https://github.com/Sammy048"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-red-600" />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
