import Image from "next/image";
import React from "react";

const services = [
  {
    id: 1,
    image: "/wetland.png",
    title: "Riparian Area Assessment and Restoration",
  },
  {
    id: 2,
    image: "/mountain.png",
    title: "Erosion Control, Landslide Mitigation",
  },
  { id: 3, image: "/heron.png", title: "Wetland Enhancement" },
  {
    id: 4,
    image: "/water.png",
    title: "Water Health and Contamination Remediation",
  },
  {
    id: 5,
    image: "/koi.png",
    title: "Biodiversity Enhancement and Invasive Species Management",
  },
];

export default function OurServices() {
  return (
    <>
      <h2 className="text-4xl md:text-6xl text-[#58623D] font-medium font-Valky text-center mt-20 mb-10">
        Our Services
      </h2>
      <div className="relative">
        <div
          className="h-[48rem] xl:h-[30rem] bg-cover mb-10 bg-center bg-no-repeat filter brightness-[0.65] shadow-md shadow-black"
          style={{ backgroundImage: `url('/transition_photo.jpg')` }}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 place-content-center place-items-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center p-4 bg-clip-padding backdrop-filter backdrop-blur-xl hover:border-white text-white border border-[#ffffff3f] rounded-xl hover:shadow-md transition duration-200 ease-in-out hover:cursor-pointer w-fit sm:w-3/4 h-[15rem] md:h-auto ">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="mb-2"
                  width={60}
                  height={60}
                />
                <p className="text-xl font-semibold pt-2 text-center">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
