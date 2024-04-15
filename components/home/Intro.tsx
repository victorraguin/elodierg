import Image from "next/image";
import styles from "../styles/Home.module.css";
import origins from "/public/origins.png";
import wline from "/public/white_line.png";
import transition from "/public/transition2.svg";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Menu from "./menu";

export default function Intro() {
  return (
    <>
      <div className={`font-Ambit bg-black h-screen`}>
        <Menu />
        <div className="flex flex-col justify-center items-center">
          <Image
            src={wline}
            alt="Separator"
            className="mx-auto w-3/4 absolute top-20 mt-5 md:mt-10 rounded-full z-20 h-[0.1rem]"
          />
          <Image
            alt="Origins Environmental Services"
            className="top-[5rem] md:top-[8rem] 3xl:top-[8rem] absolute z-20 w-[20rem] md:w-[25rem] pt-[3rem] 3xl:pt-[5rem] scale-105 "
            src={origins}
          />
          <h1 className="text-white text-2xl text-center px-10 md:px-0 md:text-4xl font-medium  pt-[17rem] md:pt-[22rem] 3xl:pt-[27rem] z-20 font-Valky">
            Consulting and Fieldwork Services in Riparian Ecosystems Restoration
          </h1>
          <h2 className="text-white text-xl md:text-2xl px-4 font-light mx-auto text-center pt-5 md:pt-10 2xl:pt-5 z-20 xl:w-[90%] 2xl:w-[80%] 3xl:w-[70%]">
            We specialize in riparian ecosystems restoration and enhancement. We
            support the recovery of damaged landscapes, eroding slopes and
            wetland habitats. We use bioengineering techniques and native
            species planting to achieve greater riparian, watershed, and
            community health.
          </h2>
          <div className="hidden lg:flex z-30 md:mt-20  3xl:mt-20 xl:mt-10 2xl:mt-8 shadow-black shadow-sm bg-clip-padding backdrop-filter backdrop-blur-2xl  text-white border border-[#ffffff3f]  rounded-xl  duration-200 transition ease-in-out text-center flex-col w-[20rem] md:w-[30rem] h-[12rem]">
            <div>
              <h4 className="text-base md:text-xl text-left px-6  pt-4 text-gray-400 tracking-[0.06rem] font-light">
                VANCOUVER ISLAND
              </h4>
              <p className="text-3xl font-light py-4 text-center font-Valky">
                Elodie Roger
              </p>
              <Image src={wline} alt="Separator" className="mx-auto " />
              <div className="flex flex-row justify-center">
                <a href="mailto:elodie@origins.com">
                <EmailIcon className="text-4xl m-4 mx-8 hover:cursor-pointer  ease-in-out duration-200 transition" />
                </a>
                <a href="tel:250-888-8888">
                <LocalPhoneIcon className="text-4xl m-4 mx-8 hover:cursor-pointer  ease-in-out duration-200 transition" />
                </a>
              </div>
            </div>
          </div>
          <Image
          src={transition}
          alt="Separator"
          className=" z-20 bottom-0  absolute  w-full"
        />
        <video
          autoPlay
          muted
          loop
          className="absolute z-10 bottom-0 w-full h-full object-cover brightness-75">
          <source src="/foret.mp4" type="video/mp4" />
        </video>
        </div>
      </div>
    </>
  );
}
