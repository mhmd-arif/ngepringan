import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-green pt-8 pb-6 mt-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <div className="flex flex-row justify-center items-center">
                  <a
                    className="text-[30px] text-red"
                    href="https://www.instagram.com/ngepringan_4/"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <div className="flex flex-row justify-center items-center">
                  <a
                    className="text-[30px] text-[#dd2a7b]"
                    href="https://www.instagram.com/ngepringan_4/"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Media Sosial
                </span>
                <ul className="list-unstyled">
                  <li className="flex items-center py-1">
                    <button
                      className="bg-white text-blueGray-800 shadow-lg font-normal h-6 w-6 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <div className="flex flex-row justify-center items-center">
                        <a
                          className="text-[20px] text-[#dd2a7b]"
                          href="https://www.instagram.com/ngepringan_4/"
                        >
                          <FaInstagram />
                        </a>
                      </div>
                    </button>
                    <a
                      href="https://www.instagram.com/ngepringan_4/"
                      className="font-semibold block text-sm"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center py-1">
                    <button
                      className="bg-white text-blueGray-800 shadow-lg font-normal h-6 w-6 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <div className="flex flex-row justify-center items-center">
                        <a
                          className="text-[20px] text-red"
                          href="https://www.instagram.com/ngepringan_4/"
                        >
                          <FaYoutube />
                        </a>
                      </div>
                    </button>
                    <a
                      href="https://www.instagram.com/ngepringan_4/"
                      className="font-semibold block text-sm"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Alamat
                </span>
                <p>Ngepringan IV, Sendangrejo, Minggir, Sleman, Yogyakarta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © Tim KKN-PPM UGM 2023 Unit Minggir
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
