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
      <div className={`font-Ambit bg-black`}>
        <Menu />
        <div className="flex flex-col justify-center items-center">
          <Image
            src={wline}
            alt="Separator"
            className="mx-auto w-3/4 absolute top-20 mt-5 rounded-full z-20 h-[0.1rem]"
          />
          <Image
            alt="Origins Environmental Services"
            className="top-[5rem] 3xl:top-[6rem] absolute z-20 w-[25rem] pt-[3rem] 3xl:pt-[6rem] "
            src={origins}
          />
          <h1 className="text-white text-4xl font-medium  pt-[18rem] 3xl:pt-[22rem] z-20 font-Valky">
            Consulting and Fieldwork Services in Riparian Ecosystems Restoration
          </h1>
          <h2 className="text-white text-2xl font-light w-[80%] mx-auto text-center pt-10 z-20">
            We specialize in riparian ecosystems restoration and enhancement. We
            support the recovery of damaged landscapes, eroding slopes and
            wetland habitats. We use bioengineering techniques and native
            species planting to achieve greater riparian, watershed, and
            community health.
          </h2>
          <div className="z-30 mt-10 3xl:mt-20 hover:border-white shadow-black shadow-sm bg-clip-padding backdrop-filter backdrop-blur-xl  text-white border border-[#ffffff3f]  rounded-xl hover:shadow-md duration-200 transition ease-in-out text-center flex flex-col w-[30rem] h-[11rem]">
            <div>
              <h4 className="text-xl text-left px-6  pt-4 text-gray-400 tracking-[0.06rem] font-light">
                VANCOUVER ISLAND
              </h4>
              <p className="text-3xl font-light py-2 text-center font-Valky">
                Elodie Roger
              </p>
              <Image src={wline} alt="Separator" className="mx-auto " />
              <div className="flex flex-row justify-center">
                <EmailIcon className="text-4xl m-4 mx-8 hover:cursor-pointer  ease-in-out duration-200 transition" />
                <LocalPhoneIcon className="text-4xl m-4 mx-8 hover:cursor-pointer  ease-in-out duration-200 transition" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 z-0 w-full h-full bg-[#EBEBEB]"></div>
          <Image
          src={transition}
          alt="Separator"
          className=" z-20 absolute bottom-5 3xl:top-[45.5rem] w-full"
        />
        <video
          autoPlay
          muted
          loop
          className="absolute z-10 w-full h-full object-cover brightness-75">
          <source src="/foret.mp4" type="video/mp4" />
        </video>
        </div>
      </div>
    </>
  );
}
