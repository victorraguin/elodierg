/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import project2 from "../../public/Project2.jpg";
import test1 from "../../public/test1.jpg";
// import streamside from "../public/streamside.png";
import Link from "next/link";
import moreProjects from "/public/moreProjects.png";
import { useRouter } from "next/router";

export default function OurProjects() {
  const router = useRouter();
  return (
    <div className="w-fit">
      <h2 className="text-4xl md:text-6xl text-[#58623D] font-medium font-Valky text-center mt-20 ">
        Our Projects
      </h2>
      <div className="flex flex-row flex-wrap md:flex-nowrap px-4 md:space-x-10 xl:space-x-0 md:px-20 3xl:px-60">
        <div className="flex flex-col  items-center w-fit relative">
          <Image
            src={test1}
            alt="Project1"
            className="lg:w-[70%] rounded-2xl  md:mt-10 mb-10"
          />
          <h3 className="text-2xl text-[#58623D]  font-semibold font-Valky text-center pt-10 md:pt-0">
            Landslide Mitigation and Erosion Control
          </h3>
          <p className="text-lg pt-5  text-center w-[90%] md:w-full xl:w-[90%] mx-auto">
            We supported our clients in mitigating landslide risks and improving
            bank stability. We developed solutions to landslide recovery and
            mitigation using an interdisciplinary approach. We assessed risks
            and safety concerns associated with the collapse of shoreline and
            revegetated their coastal bluff using native species and
            bioengineering techniques.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-fit relative pt-20 md:pt-0">
          <Image
            src={project2}
            alt="Project2"
            className="lg:w-[70%] rounded-2xl  mt-10 mb-10"
          />
          <h3 className="text-2xl text-[#58623D]  font-Valky text-center font-semibold">
            Twinned-Watershed Project
          </h3>
          <p className="text-lg pt-5 text-center w-[90%] md:w-full xl:w-[90%] mx-auto font-normal ">
            We worked closely with Cowichan Watershed Board and Cowichan Tribes
            to assess riparian habitat health along the Chemainus and Koksilah
            rivers (BC). The riparian vegetation assessment integrated the
            cultural significances of the place with current condition of
            riparian ecosystems adjacent to important fish-bearing reaches. This
            project brought forward the concept of “whole-of-watershed” approach
            when identifying and implementing conservation and natural resources
            management priorities.
          </p>
        </div>
      </div>
        <Image
          src={moreProjects}
          alt="Epic Button"
          className="md:w-[16%] xl:w-[21%] mx-auto pt-5 cursor-pointer hover:translate-x-1 duration-300 ease-in-out"
          onClick={() => router.push("#contact-us")}
        />
    </div>
  );
}
