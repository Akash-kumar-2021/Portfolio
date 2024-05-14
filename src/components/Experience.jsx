import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png";
import mui from "../assets/mui.png";
import figma from "../assets/figma.png"
import TimeLine from "./TimeLine";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: mui,
      title: "Material UI",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: figma,
      title: "Figma",
      style: "shadow-pink-500",
    },
    {
      id: 9,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience mt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-16">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
          Experience
          </p>
        </div>   
        <div className="mt-16">
        <TimeLine />
        </div>   
      </div>
      
    </div>
  );
};

export default Experience;
