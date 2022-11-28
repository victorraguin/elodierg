import Image from "next/image";
import team from "/public/Elodie-Roger.jpg";
import epicButton from "/public/epicButton.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#EBEBEB] flex flex-col justify-center w-full  mb-10 ">
      <div className="bg-[#EBEBEB] lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-[80rem] lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
                <div className="h-96 md:h-64 bg-cover lg:rounded-lg lg:h-full" style={{ backgroundImage: `url("/Elodie-Roger.jpg")` }}></div>
            </div>
            <div className="py-12 px-6 max-w-xl lg:max-w-7xl lg:w-3/4">
                <h2 className="text-4xl text-[#58623D] font-semibold font-Valky">About Us</h2>
                <p className="text-lg pt-5">
                  Hello and Welcome! My name is <b>Elodie Roger</b>, I am the founder
                  and owner of <strong>Origins Environmental Services</strong>.
                </p>
                <p className="text-lg pt-2">
                  At Origins Environmental Services we care about our <strong>community,
                  nature and its biodiversity</strong>. We bring our passion, knowledge
                  and experience to support our partners and clients in 
                  <strong> restoring, enhancing, and monitoring their riparian areas and
                  ecosystems</strong>.
                </p>
                <p className="text-lg pt-2">
                  With nature as our greatest teacher, we believe it is our
                  responsibility to restore habitats that have been damaged and
                  impacted by natural or anthropogenic pressures. <strong>We use
                  non-invasive, organic and natural solutions to your projects.</strong>
                </p>
                <p className="text-lg pt-2">
                  We apply principles of biology, ecology and engineering to
                  create tangible and economically viable solutions. We bring an
                  interdisciplinary approach to our work and apply principles of <strong>
                  biology, ecology and engineering to restoring ecosystems’
                  functions.</strong>
                </p>
                <p className="text-lg pt-2">
                  We <strong>consult, manage, and coordinate projects</strong> while delivering
                  fieldwork with passion and technical expertise.
                </p>
                <div className="mt-8">
                    <a href="#contact-us" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Contact Me</a>
                </div>
            </div>
        </div>
    </div> 
      </div>
    </>
  );
}
