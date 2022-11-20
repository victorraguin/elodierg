/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Intro from "../components/Intro";
import team from "/public/team1.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ORIGINS - Riparian Ecosystem Restoration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <Intro />
        <div className="bg-[#EBEBEB] flex flex-col justify-center w-full pb-40">
          <div className="flex flex-row justify-center space-x-10 ml-[12rem]">
            <Image src={team} alt="Team" />
            <div className="flex flex-col flex-wrap mx-10">
              <h2 className=" text-4xl font-Valky w-fit text-[#58623D] pt-5">
                About Us
              </h2>
              <div className="flex flex-col flex-wrap w-3/4">
              <p className="text-lg pt-5">
                Hello and Welcome! My name is Elodie Roger, I am the founder and
                owner of Origins Environmental Services.
              </p>
              <p className="text-lg pt-2">
              At Origins Environmental Services we care about our community, nature and its biodiversity. We bring our passion, knowledge and experience to support our partners and clients in restoring, enhancing, and monitoring their riparian areas and ecosystems.
              </p>
              <p className="text-lg pt-2">
              With nature as our greatest teacher, we believe it is our responsibility to restore habitats that have been damaged and impacted by natural or anthropogenic pressures. We use non-invasive, organic and natural solutions to your projects.
              </p>
              <p className="text-lg pt-2">
              We apply principles of biology, ecology and engineering to create tangible and economically viable solutions. We bring an interdisciplinary approach to our work and apply principles of biology, ecology and engineering to restoring ecosystems’ functions.
              </p>
              <p className="text-lg pt-2">
              We consult, manage, and coordinate projects while delivering fieldwork with passion and technical expertise. 
              </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
