/* eslint-disable @next/next/no-img-element */
import React from "react";


export default function OurServices() {
  return (
    <>
      <h2 className="text-4xl md:text-6xl text-[#58623D] font-medium font-Valky text-center mb-10 ">
        Our Services
      </h2>
      <div className="relative">
        <div
          className="h-[45rem] md:h-[25rem] bg-cover mb-20 bg-center bg-no-repeat brightness-[0.60] shadow-md shadow-black"
          style={{ backgroundImage: `url(/transition_photo.jpg)` }}></div>
        <div className="flex absolute z-20 top-0 md:top-5 flex-row flex-wrap md:space-x-10 md:flex-nowrap xl:px-[5rem] 2xl:px-[10rem] md:px-[20rem] 3xl:px-[22rem] md:pt-10 justify-around w-full pb-4 lg:shadow-lg lg:rounded-lg">
          <div className="flex flex-col items-center w-[50%] md:w-full ">
            <div
              className={`bg-clip-padding mt-[3rem] items-center flex flex-col justify-center backdrop-filter backdrop-blur-xl hover:border-white  text-white border border-[#ffffff3f]  py-10 rounded-xl w-[6rem] h-[5rem] md:h-[7rem] md:w-[8rem] hover:shadow-md duration-200 transition ease-in-out text-center hover:cursor-pointer`}>
              <img src="/wetland.png" alt="Wetland" className="m-auto  w-1/2" />
            </div>
            <p className="text-white text-xl w-full  text-center pt-2">
            Riparian Area Assessment and Restoration
            </p>
          </div>
          <div className="flex flex-col items-center w-[50%] md:w-full">
            <p
              className={`bg-clip-padding mt-[3rem] items-center backdrop-filter flex flex-col justify-center backdrop-blur-xl hover:border-white  text-white border border-[#ffffff3f]  py-10 rounded-xl w-[6rem] h-[5rem] md:h-[7rem] md:w-[8rem] hover:shadow-md duration-200 transition ease-in-out text-center hover:cursor-pointer`}>
              <img src="/mountain.png" alt="Mountain" className="m-auto w-1/2" />
            </p>
            <p className="text-white text-xl w-full text-center pt-2">
              Erosion Control, Landslide Mitigation
            </p>
          </div>
          <div className="flex flex-col items-center w-[50%] md:w-full">
            <p
              className={`bg-clip-padding mt-[3rem] items-center flex flex-col justify-center backdrop-filter backdrop-blur-xl hover:border-white  text-white border border-[#ffffff3f]  py-10 rounded-xl w-[6rem] h-[5rem] md:h-[7rem] md:w-[8rem] hover:shadow-md duration-200 transition ease-in-out text-center hover:cursor-pointer`}>
              <img src="/heron.png" alt="Heron" className="m-auto w-1/2" />
            </p>
            <p className="text-white text-xl w-full text-center pt-2 ">
              Wetland Enhancement
            </p>
          </div>
          <div className="flex flex-col items-center w-[50%] md:w-full">
            <p
              className={`bg-clip-padding mt-[3rem] items-center backdrop-filter backdrop-blur-xl hover:border-white  text-white border border-[#ffffff3f]  flex flex-col justify-center py-10 rounded-xl w-[6rem] h-[5rem] md:h-[7rem] md:w-[8rem] hover:shadow-md duration-200 transition ease-in-out text-center hover:cursor-pointer`}>
              <img src="/water.png" alt="Water" className="m-auto w-1/2" />
            </p>
            <p className="text-white text-xl w-full text-center pt-2">
            Water Health and Contamination Remediation
            </p>
          </div>
          <div className="flex flex-col items-center w-[50%] md:w-full">
            <p
              className={`bg-clip-padding mt-[3rem] items-center backdrop-filter backdrop-blur-xl hover:border-white  text-white border border-[#ffffff3f]  flex flex-col justify-center py-10 rounded-xl w-[6rem] h-[5rem] md:h-[7rem] md:w-[8rem] hover:shadow-md duration-200 transition ease-in-out text-center hover:cursor-pointer`}>
              <img src="/koi.png" alt="Koi" className="m-auto  w-1/2" />
            </p>
            <p className="text-white text-xl w-full text-center pt-2">
            Biodiversity Enhancement and Invasive Species Management
            </p>
          </div>
          {/* <div className="flex flex-col justify-center items-center">
            <p
              className={`bg-clip-padding mt-[3rem] items-center backdrop-filter backdrop-blur-xl hover:border-white  text-white border border-[#ffffff3f] flex flex-col justify-center py-10 rounded-xl w-[6rem] h-[5rem] md:h-[7rem] md:w-[8rem] hover:shadow-md duration-200 transition ease-in-out text-center hover:cursor-pointer`}>
              <img src="/bamboo.png" alt="Bamboo" className="ml-5" />
            </p>
            <p className="text-white text-xl w-[65%] text-center pt-2">
              Bio Engineering
            </p>
          </div>
          <div className="flex flex-col justify-center items-center pt-2 ">
            <p
              className={`bg-clip-padding mt-[3rem] items-center backdrop-filter backdrop-blur-xl hover:border-white  text-white border border-[#ffffff3f]  flex flex-col justify-center py-10 rounded-xl w-[6rem] h-[5rem] md:h-[7rem] md:w-[8rem] hover:shadow-md duration-200 transition ease-in-out text-center hover:cursor-pointer`}>
              <img src="/grass.png" alt="Grass" className="m-auto md:w-full w-1/2" />
            </p>
            <p className="text-white text-xl w-[65%] text-center pt-2">
              Invasive Species Control
            </p>
          </div> */}
        </div>
        {/* <div className="absolute z-20 bottom-10 right-[47%]">
          <a
            href="#"
            className="bg-[#58623D] text-gray-100 px-5 py-3 font-semibold rounded">
            More Services
          </a>
        </div> */}

      </div>
    </>
  );
}
