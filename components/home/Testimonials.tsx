/* eslint-disable @next/next/no-img-element */
export default function Testimonials() {
  return (
    <>
      <h2 className="text-6xl text-[#58623D] font-medium font-Valky text-center mt-[8rem] mb-10 ">
        Testimonials
      </h2>
      <div className="relative">
        <div
          className="h-[100rem] md:h-[35rem] bg-cover bg-center bg-no-repeat brightness-75 shadow-md shadow-black"
          style={{ backgroundImage: `url("/testimonials-bg.jpg")` }}></div>
        <div className="flex flex-row flex-wrap md:flex-nowrap px-2 2xl:px-20 3xl:px-40 pb-10 absolute top-[6rem] z-20">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <section className=" p-8 w-[90%] lg:shadow-lg  bg-clip-padding backdrop-filter backdrop-blur-xl  text-white border border-[#ffffff3f]  py-4 rounded-2xl text-sm md:text-base hover:shadow-md duration-200 transition ease-in-out text-center">
              <div className="flex flex-row space-x-2 items-center">
                <img
                  alt="KevinWestick"
                  src="/kevin_westick.jpg"
                  className="aspect-square  md:flex h-28 w-28 mx-6 rounded-full object-cover"
                />

                <blockquote className="my-auto pt-4 max-h-[20rem] overflow-auto">
                  <p className="text-base">
                    Elodie was instrumental in designing solutions to the
                    specific problems we have on our site. She was able to
                    combine a number of different strategies, from new plantings
                    to live staking and interwoven fencing and terracing which
                    have already shown significant benefits. What we are most
                    happy about is the solutions provided were all natural and
                    designed toward bringing the riparian area back to a more
                    natural state, which we feel is the best long-term method of
                    dealing with the erosion issues.
                  </p>

                  <cite className="mt-8 inline-flex items-center not-italic">
                    <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                    <p className="text-sm uppercase text-white sm:ml-3">
                      <strong>Kevin Westick</strong>, Project Recipient
                    </p>
                  </cite>
                </blockquote>
              </div>
            </section>
          </div>
          <div className="mx-auto max-w-5xl px-4 py-8 my-auto">
            <section className=" p-8 lg:shadow-lg  bg-clip-padding backdrop-filter backdrop-blur-xl  text-white border border-[#ffffff3f]  py-4 rounded-2xl text-sm md:text-base hover:shadow-md duration-200 transition ease-in-out text-center">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                <img
                  alt="Avatar"
                  src="/avatar2.jpg"
                  className="aspect-square  object-cover h-28 w-28 rounded-full"
                />

                <blockquote className="sm:col-span-2">
                  <p className="text-base">
                    Elodie has demonstrated the attributes that make a good
                    Professional Biologist . She is honest, understands her
                    field of science, is competent in skills and is ethical in
                    the way she conducts her work.
                  </p>

                  <cite className="mt-8 inline-flex items-center not-italic">
                    <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                    <p className="text-sm uppercase text-white sm:ml-3">
                      <strong>Dave. R. Clough</strong>, R.P. Bio.
                    </p>
                  </cite>
                </blockquote>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
