/* eslint-disable @next/next/no-img-element */
export default function ContactUs() {
    return (
      <>
                  <div id="contact-us" className="pb-10 flex items-top justify-center  md:-top-[5rem] sm:items-center sm:pt-0 ">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
              <div className="mt-8 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl p-8  text-white border border-[#ffffff3f] bg-[#ffffff48] rounded-xl shadow-md duration-200 transition ease-in-out text-center">
                <h1 className="text-5xl sm:text-5xl text-[#58623D] font-Valky font-semibold">
                  Contact Us
                </h1>
                <p className=" font-normal text-lg sm:text-xl text-[#252F40]  mt-2">
                We approach every partnership and project with commitment and care. We invest in developing long-term dynamic relationships with our clients and community. Contact us today for more information about our work, to request a quote or submit an inquiry. It will be a pleasure to hear from you by phone, email or using the contact form below.
                </p>
                <div className="py-8 px-4 mx-auto max-w-screen-md">
                  <form action="#" className="space-y-6">
                    <div className="flex flex-row justify-around w-full text-black">
                      <div className="flex flex-col w-1/2 md:w-1/3">
                        <label
                          htmlFor="email"
                          className="block mb-2  text-[#252F40] font-bold text-base">
                          Your email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                          placeholder="hello@origins.com"
                          required
                        />
                      </div>

                      <div className="flex flex-col w-1/2 md:w-1/3">
                        <label
                          htmlFor="subject"
                          className="block mb-2  text-[#252F40] font-bold text-base">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block mb-2  text-[#252F40] font-bold text-base">
                        How can i help you?
                      </label>
                      <textarea
                        id="message"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your Message..."></textarea>
                    </div>

                    <button
                      type="submit"
                      className="py-3 px-5 block mb-2  text-[#252F40] font-bold text-base border border-[#252F40] rounded-xl">
                      Send message
                    </button>
                    <div className="flex flex-row w-full flex-wrap md:flex-nowrap justify-around align-middle items-center ">
                      {/* <div className="flex flex-col items-center mt-8 text-[#252F40]">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-[#252F40]">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div className="ml-4 pt-2  text-md tracking-wide font-semibold w-40">
                          Origins, Street, State, Postal Code
                        </div>
                      </div> */}

                      <div className="flex flex-col items-center mt-4 text-[#252F40]">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-[#252F40]">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <a  href="tel:250-818-1661" className="ml-4 pt-2 text-md tracking-wide font-semibold hover:underline cursor-pointer">
                        250-818-1661 
                        </a>
                      </div>

                      <div className="flex flex-col items-center mt-2 text-[#252F40]">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-[#252F40]">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <a href="mailto:Elodie@originsenvironmental.com" className="ml-4 pt-2  hover:underline cursor-pointer text-md tracking-wide font-semibold ">
                        Elodie@originsenvironmental.com
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </>
    );
  }
  