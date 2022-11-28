/* eslint-disable @next/next/no-img-element */
import React from "react";
import test1 from "../public/test1.jpg";
import Image from "next/image";
import wilder from "../public/wilder_restoration.jpg";
import cowichan from "../public/cowichan-watershed.jpg";
import streamside from "../public/streamside.png";
import epicButton from "../public/epicButton.png";

export default function OurProjects() {
  return (
    <>
      <h2 className="text-4xl md:text-6xl text-[#58623D] font-medium font-Valky text-center mt-[8rem] mb-10 ">
        Our Projects
      </h2>
      <div className="flex flex-row flex-wrap md:flex-nowrap pb-10 px-4 md:space-x-10 xl:space-x-0 md:px-20 3xl:px-60">
        <div className="flex flex-col  items-center w-fit relative">
          <Image
            src={test1}
            alt="Project1"
            className="lg:w-[70%] rounded-2xl shadow-md shadow-black md:mb-10"
          />
          <h3 className="text-2xl text-[#58623D]  font-semibold font-Valky text-center pt-10 md:pt-0">
            Landslide Mitigation and Erosion Control
          </h3>
          <p className="text-lg pt-5  text-center w-[90%] md:w-full xl:w-[90%] mx-auto">
            We support our clients and partners in{" "}
            <strong>
              stabilizing eroding banks and mitigating landslides risks
            </strong>
            . We developed solutions to
            <strong> landslide recovery</strong> and mitigation using an
            interdisciplinary approach. We assessed bank{" "}
            <strong>stabilityz, risks and safety concerns </strong>
            and revegetated their coastal bluff using native species and
            bioengineering techniques.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-fit relative pt-20 md:pt-0">
          <Image
            src={test1}
            alt="Project1"
            className="lg:w-[70%] rounded-2xl shadow-md shadow-black  mb-10"
          />
          <h3 className="text-2xl text-[#58623D]  font-Valky text-center font-semibold">
            Twinned-Watershed Project
          </h3>
          <p className="text-lg pt-5 text-center w-[90%] md:w-full xl:w-[90%] mx-auto font-normal ">
            We worked closely with{" "}
            <strong>Cowichan Watershed Board and Cowichan Tribes</strong> to
            assess riparian habitat health along the Chemainus and Koksilah
            rivers. The riparian vegetation assessment integrated the cultural
            significances of the place with current condition of riparian
            ecosystems adjacent to{" "}
            <strong>important fish-bearing reaches</strong>. This project
            brought forward the concept of <strong>“whole-watershed”</strong>{" "}
            approach when identifying conservation and natural resources
            management priorities.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap md:flex-nowrap justify-evenly px-20 pb-10">
        <Image src={wilder} alt="Wilder Restoration" className="md:w-[40%] lg:w-[30%]" />
        <Image
          src={cowichan}
          alt="Cowichan Watershed Board"
          className="md:w-[30%] lg:w-[15%] "
        />
        <Image
          src={streamside}
          alt="Streamside Native Plants"
          className="md:w-[30%] lg:w-[20%] rounded-xl"
        />
      </div>
      {/* <div className="relative hover:cursor-pointer pt-10">
        <Image src={epicButton} alt="Epic Button" className="w-[18%] mx-auto" />
        <h3 className="text-2xl text-[#58623D]  pt-10 font-Valky text-center font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          More Projects?
        </h3>
      </div> */}
    </>
  );
}
