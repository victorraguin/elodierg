/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import team from "/public/Elodie-Roger.jpg";
import epicButton from "/public/epicButton.png";
import epicButton2 from "/public/epicButton2.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AboutUs() {

  const router = useRouter();
  return (
    <>
      <div className="bg-[#EBEBEB] flex flex-col justify-center w-full  mb-10 ">
        <div className="bg-[#EBEBEB] lg:py-12 lg:flex lg:justify-center">
          <div className="bg-white lg:mx-8 lg:flex lg:max-w-[80rem] lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
              <div
                className="h-[35rem] shadow-[inset_0_20px_5px_0_#EBEBEB] md:shadow-none md:h-64 bg-cover lg:rounded-lg lg:h-full"
                style={{ backgroundImage: `url("/Elodie-Roger.jpg")` }}></div>
            </div>
            <div className="py-12 px-6 max-w-xl lg:max-w-7xl lg:w-3/4">
              <h2 className="text-4xl md:text-6xl text-[#58623D] font-medium font-Valky text-center">
                About Us
              </h2>
              <p className="text-lg pt-5">
                Hello and Welcome! My name is Elodie Roger, I am the founder and
                owner of Origins Environmental Services. We provide services in{" "}
                <strong>
                  riparian ecosystems restoration and enhancement.
                </strong>
              </p>
              <p className="text-lg pt-2">
                At Origins Environmental Services we care about our{" "}
                <strong>community, nature</strong> and its{" "}
                <strong>biodiversity</strong>. We bring our passion, knowledge
                and experience to support our partners and clients in{" "}
                <strong>restoring, enhancing</strong>, and{" "}
                <strong>monitoring</strong> their riparian areas and ecosystems.
              </p>
              <p className="text-lg pt-2">
                With nature as our greatest teacher, we believe it is our
                responsibility to restore habitats that have been damaged and
                impacted by natural or anthropogenic pressures. We address
                climate change and build <strong>resilience</strong> using{" "}
                <strong>non-invasive</strong>, organic and{" "}
                <strong>natural</strong> material.
              </p>
              <p className="text-lg pt-2">
                We approach our work using an{" "}
                <strong> interdisciplinary</strong> lens to create tangible as
                well as economically viable solutions. We apply principles of
                biology, ecology and bioengineering to restoring riparian
                ecosystems’ functions.
              </p>
              <p className="text-lg pt-2">
                We <strong>consult, manage,</strong> and{" "}
                <strong>coordinate</strong> projects while delivering{" "}
                <strong>fieldwork</strong> with passion and technical expertise.
              </p>
              {/* <div className="mt-8">
                <a
                  href="#contact-us"
                  className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">
                  Contact Me
                </a>
              </div> */}
              {/* <div className=" mt-10 shadow-md w-fit flex flex-row ">
                <Link href="#contact-us">
                  <Image
                    src={epicButton}
                    alt="Epic Button"
                    className="md:w-[95%] mx-auto cursor-pointer"
                  />
                  <h3 className="text-2xl cursor-pointer text-[#58623D]  pt-2  font-Valky text-center font-semibold">
                    Contact Me{" "}
                    <img
                      src="/arrow-right.png"
                      alt="right arrow"
                      className="inline-block w-6 h-6 group hover:transalte-x-2"
                    />
                  </h3>
                </Link>
              </div> */}
              <Image
                  src={epicButton2}
                  alt="Epic Button"
                  className="md:w-[40%] mx-auto pt-5 cursor-pointer"
                  onClick={() => router.push("#contact-us")}
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
