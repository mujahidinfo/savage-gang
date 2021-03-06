import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";
// import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-800 to-violet-900 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex md:flex-row flex-col md:justify-between items-center text-white gap-4 p-4">
            <div className="md:w-1/2">
              <img src={Logo} alt="" />
              <p className="text-sm font-thin">
                Savage isn't a meme. It's not a cream. It's not a sunglass. A
                savage has to be made. They were made, after a lot of tragedy.
                They are the true savage, they don't need the sunglasses.
              </p>
            </div>
            {/* <div>
              <ul className="flex gap-4 md:flex-col md:gap-0">
                <Link to="/store">Store</Link>
                <Link to="/about">About</Link>
                <Link to="/roadmap">Roadmap</Link>
              </ul>
            </div> */}
            <div className="flex flex-col md:items-end gap-3">
              <a href="https://opensea.io/collection/savage-gang">
                <button className="w-full btn bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white">
                  View OpenSea
                </button>
              </a>
              <a href="mailto:savageganghomo@email.com">
                <button className="w-full btn bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white">
                  Contact Us
                </button>
              </a>
              <div className="flex justify-center md:justify-between gap-3 ">
                <a href="https://discord.gg/zWgExnBFEP">
                  <FaDiscord className="btn btn-circle bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white p-3" />
                </a>
                <a href="https://www.instagram.com/savageganghomo">
                  <FaInstagram className="btn btn-circle bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white p-3" />
                </a>
                <a href="https://twitter.com/savageganghomo?t=HzIJJ652DYxphyCHJgrp2A&s=09">
                  <FaTwitter className="btn btn-circle bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white p-3" />
                </a>
                <a href="https://opensea.io/collection/savage-gang">
                  <GiSailboat className="btn btn-circle bg-gradient-to-r from-violet-600 to-violet-500 border-none text-white p-3" />
                </a>
              </div>
              <h1 className="text-xs text-red-400">
                We are still not so active on Discord, but you may join.
              </h1>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-center font-thin text-xs text-white pb-2">
            <h1>
              {new Date().getFullYear()} Savage Gang NFT! All Rights Reserved.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
