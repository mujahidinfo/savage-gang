import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import Faq_Logo from "../assets/faq-logo.svg";

const Faq = () => {
  const FAQ_TEXT = [
    {
      title: "title-1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam recusandae reprehenderit.",
    },
    {
      title: "title-2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam recusandae reprehenderit.",
    },
    {
      title: "title-3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam recusandae reprehenderit.",
    },
    {
      title: "title-4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam recusandae reprehenderit.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <h1
        className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-center mb-8"
        style={{ fontFamily: "Aldrich" }}
      >
        Sincerely Asked Questions
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="md:w-3/4 w-full">
          {FAQ_TEXT.map((details) => (
            <div className="mb-4">
              <Disclosure>
                <Disclosure.Button className="w-full flex justify-between items-center p-4 bg-violet-900 border-2 rounded-lg border-violet-700 ">
                  <h1>{details.title}</h1>
                  <FaAngleDown />
                </Disclosure.Button>
                <Disclosure.Panel className="text-white bg-gray-900 p-4 rounded-lg">
                  <h1>{details.description}</h1>
                </Disclosure.Panel>
              </Disclosure>
            </div>
          ))}
        </div>
        <div>
          <img
            className="w-48  hidden md:block"
            src={Faq_Logo}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;