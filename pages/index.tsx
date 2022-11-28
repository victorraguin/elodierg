/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Intro from "../components/Intro";
import OurProjects from "../components/OurProjects";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ORIGINS - Riparian Ecosystem Restoration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center bg-[#EBEBEB] h-full font-Ambit">
        <div className="bg-[#EBEBEB]">
          <Intro />
          <div className="pt-20">
          <AboutUs />
          </div>
          <OurServices />
          <OurProjects />
          <Testimonials />
          <ContactUs />
          <p className="text-center pb-10">Made with 💖, by <a href="https://www.victor-raguin.fr" target="_blank" rel="noreferrer" className="underline">Victor</a></p>
        </div>
      </main>
    </div>
  );
}
