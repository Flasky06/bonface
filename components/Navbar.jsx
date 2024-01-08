"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   const handleShadow = () => {
  //     if (window.scrollY >= 90) {
  //       setShadow(true);
  //     } else {
  //       setShadow(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleShadow);

  //   return () => window.removeEventListener("scroll", handleShadow);
  // }, []);

  return (
    <div
      className={`fixed w-full h-20 z-[100] ${
        shadow
          ? "bg-gradient-to-r from-[#5651e5] to-[#709dff] opacity-70"
          : "bg-gradient-to-r from-[#5651e5] to-[#709dff]"
      } ease-in-out duration-300 shadow-xl`}
    >
      <div className="flex justify-end items-center w-full h-full px-2 2xl:px-16">
        {/* <Link href="/">
					<a>
						<Image
							src={Logo}
							alt="/"
							width="125"
							height="50"
							className="cursor-pointer"
						/>
					</a>
				</Link> */}
        <div>
          <div className="hidden md:flex text-white font-bold">
            <Link href="/" className="ml-10 text-sm uppercase hover:border-b">
              Home
            </Link>
            <Link
              href="/#about"
              className="ml-10 text-sm uppercase hover:border-b"
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="ml-10 text-sm uppercase hover:border-b"
            >
              Skills
            </Link>
            <Link
              href="/#projects"
              className="ml-10 text-sm uppercase hover:border-b"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="ml-10 text-sm uppercase hover:border-b"
            >
              Contact
            </Link>
          </div>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[60%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                {/* <Image src={NavLogo} width="87" height="35" alt="/" /> */}
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <div className="uppercase flex flex-col">
              <Link
                href="/"
                onClick={() => setNav(false)}
                className="py-4 text-sm "
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:bg-green-700 "
              >
                About
              </Link>
              <Link
                href="/#skills"
                onClick={() => setNav(false)}
                className="py-4 text-sm"
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                onClick={() => setNav(false)}
                className="py-4 text-sm"
              >
                Projects
              </Link>

              <Link
                href="/#contact"
                onClick={() => setNav(false)}
                className="py-4 text-sm"
              >
                Contact
              </Link>
            </div>
            <div className="pt-40">
              <div className="flex items-center justify-between my-4 w-full sm:w-full">
                <Link
                  href="https://www.linkedin.com/in/bonface-njuguna-015a29212/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href="https://github.com/Flasky06"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
