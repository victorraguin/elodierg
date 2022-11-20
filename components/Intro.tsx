import Image from "next/image";
import Menu from "../components/menu";
import styles from "../styles/Home.module.css";
import origins from "/public/origins.png";
import wline from "/public/white_line.png";
import transition from "/public/transition2.svg";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Intro() {
  return (
    <>
    <div className={`${styles.main} relative`}>
    <Menu />
    <div className="flex flex-col justify-center items-center">
      <Image
        src={wline}
        alt="Separator"
        className="mx-auto w-3/4 absolute top-20 mt-5 rounded-full z-10 h-[0.1rem]"
      />
      <Image
        alt="Origins Environmental Services"
        className="top-[6rem] absolute z-10 w-[25rem] pt-[4rem]"
        src={origins}
      />
      <h1 className="text-white text-4xl font-medium  pt-[20rem] z-10 font-Valky">
        Consulting and Fieldwork Services in Riparian Ecosystems
        Restoration
      </h1>
      <h2 className="text-white text-2xl font-light w-[60%] mx-auto text-center pt-10 z-10">
        We specialize in riparian ecosystems restoration and enhancement.
        We support the recovery of damaged landscapes, eroding slopes and
        wetland habitats. We use bioengineering techniques and native
        species planting to achieve greater riparian, watershed, and
        community health.
      </h2>
      <div className="z-10 mt-10  hover:border-white shadow-black shadow-sm bg-clip-padding backdrop-filter backdrop-blur-xl  text-white border border-[#ffffff3f]  rounded-xl hover:shadow-md duration-200 transition ease-in-out text-center flex flex-col w-[30rem] h-[11rem]">
        <div>
          <h4 className="text-xl text-left px-6  pt-4 text-gray-400 tracking-[0.06rem] font-light">
            VANCOUVER ISLAND
          </h4>
          <p className="text-3xl font-light py-2 text-center font-Valky">
            Elodie Roger
          </p>
          <Image src={wline} alt="Separator" className="mx-auto " />
          <div className="flex flex-row justify-center">
            <EmailIcon className="text-4xl m-4 mx-8 hover:cursor-pointer hover:text-[#58623D] ease-in-out duration-200 transition" />
            <LocalPhoneIcon className="text-4xl m-4 mx-8 hover:cursor-pointer hover:text-[#58623D] ease-in-out duration-200 transition" />
          </div>
        </div>
      </div>
      <div className="flex flex-row absolute ">
    </div>
    </div>
    <video
    autoPlay
    muted
    loop
    className="absolute z-0 top-0 left-0 w-full opacity-70">
    <source src="/foret.mp4" type="video/mp4" />
  </video>
  </div>
  <Image src={transition} alt="Separator" className=" z-10 absolute -bottom-[4rem] w-full  "/>

  </>
  );
}