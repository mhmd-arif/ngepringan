import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import { FaBars } from "react-icons/fa6";
import { Bg, GG1, GG2, GG3, GG4, GG5, Logo } from "../assets";

export default function Homepage() {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeClass);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const toInformation = () => {
    const element = document.getElementById("section-information");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toEducation = () => {
    const element = document.getElementById("section-education");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toGallery = () => {
    const element = document.getElementById("section-gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar">
        <div
          className={
            "navbar bg-white transform duration-300 ease " +
            (scroll ? "opacity-100 " : "lg:h-24 opacity-0 ") +
            (!isOpen ? "shadow-md" : "opacity-100")
          }
        ></div>
        <div
          className={
            "z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-green-dark " +
            "justify-between transform duration-300 ease overflow-hidden " +
            (scroll ? "h-16" : "lg:h-24 h-16")
          }
        >
          <button
            className="flex flex-row justify-start items-center h-full"
            onClick={() => {
              toTop();
            }}
          >
            <img
              src={Logo}
              className={
                "m-2 transform duration-300 ease " +
                (scroll ? "w-8" : "w-0 mr-[-4px]")
              }
            />
            <p className="transform">Ngepringan Asri</p>
          </button>
          <button
            className="p-1 rounded lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
          <div className="lg:flex flex-row hidden gap-5">
            <button
              className="hover:underline"
              onClick={() => {
                toTop();
              }}
            >
              Beranda
            </button>
            <button className="hover:underline" onClick={toInformation}>
              Informasi
            </button>
            <button className="hover:underline" onClick={toEducation}>
              Edukasi
            </button>
            <button className="hover:underline" onClick={toGallery}>
              Galeri
            </button>
            <button className="hover:underline" onClick={toBottom}>
              Kontak
            </button>
          </div>
        </div>
        <div
          className={
            "w-screen bg-white pb-2 text-green-dark transform duration-300 ease flex flex-col lg:hidden absolute shadow-md " +
            (!isOpen ? "opacity-0 pointer-events-none" : "visible opacity-100")
          }
        >
          <button
            className="hover:bg-grey py-2"
            onClick={() => {
              setIsOpen((prev) => !prev);
              toTop();
            }}
          >
            Beranda
          </button>
          <button
            className="hover:bg-grey py-2"
            onClick={() => {
              setIsOpen((prev) => !prev);
              toInformation();
            }}
          >
            Informasi
          </button>
          <button
            className="hover:bg-grey py-2"
            onClick={() => {
              setIsOpen((prev) => !prev);
              toEducation();
            }}
          >
            Edukasi
          </button>
          <button
            className="hover:bg-grey py-2"
            onClick={() => {
              setIsOpen((prev) => !prev);
              toGallery();
            }}
          >
            Galeri
          </button>
          <button
            className="hover:bg-grey py-2"
            onClick={() => {
              setIsOpen((prev) => !prev);
              toBottom();
            }}
          >
            Kontak
          </button>
        </div>
      </div>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="w-full h-full bg-gradient-to-t from-white">
          <div className="flex flex-col h-full container mx-auto items-center font-poppins text-green-dark">
            <div className="flex flex-col h-full items-center justify-between lg:justify-center pt-36 lg:pt-0 font-semibold lg:text-center leading-normal gap-8">
              <div className="hidden lg:flex h-20"></div>
              <img src={Logo} className="lg:w-1/12 w-1/3 lg:my-0 my-auto" />
              <div className="flex flex-col gap-8 lg:items-center">
                <p className="lg:text-4xl text-5xl font-bold">
                  Telusuri
                  <br />
                  Dukuh Ngepringan IV
                </p>
                <p className="lg:text-xl text-lg font-normal lg:w-4/5">
                  Website Official Dukuh Ngepringan IV, Desa Sendangrejo,
                  Kecamatan Minggir, Kabupaten Sleman, Yogyakarta
                </p>
                <button
                  className="bg-green-dark text-white font-normal lg:text-xl text-lg py-2 px-6 rounded-lg transform duration-300 ease lg:hover:bg-black"
                  onClick={toInformation}
                >
                  Telusuri Sekarang
                </button>
                <div className="lg:h-2"></div>
              </div>
              <div id="section-1" className="pb-10 lg:pb-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="wisata" className="bg-white">
        <div className="flex flex-col container mx-auto font-poppins items-center lg:text-center">
          <div className="flex flex-col gap-8 mt-10 lg:mt-0 lg:mx-10">
            <div id="section-information" className="pb-10 lg:pb-0 pt-6"></div>
            <div className="flex flex-col text-4xl font-bold gap-4 lg:gap-6 pt-4">
              Informasi Padukuhan
              <div className="flex flex-row gap-4 w-full justify-center ">
                <div className="flex flex-col items-center gap-2 ">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Slondok
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 ">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Slondok
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 ">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Slondok
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 ">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Slondok
                  </div>
                </div>
              </div>
            </div>

            <div id="section-education" className="pb-10 lg:pb-0 pt-6"></div>
            <div className="flex flex-col text-4xl font-bold gap-4 lg:gap-6 pt-4">
              Edukasi Digital
              <div className="flex flex-row gap-4 w-full justify-center ">
                <div className="flex flex-col items-center gap-2 ">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Slondok
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 ">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Slondok
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 ">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Slondok
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 ">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Slondok
                  </div>
                </div>
              </div>
            </div>

            <div id="section-gallery" className="pb-10 lg:pb-0 pt-6"></div>
            <div className="flex flex-col text-4xl font-bold gap-4 lg:gap-6 pt-4">
              Galeri
              <div className="grid grid-cols-6 grid-rows-6 max-h-[30rem] gap-4">
                <img
                  src={GG1}
                  className="row-span-3 col-span-3 object-cover w-full h-full rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <img
                  src={GG2}
                  className="row-span-6 col-span-1 object-cover w-full h-full rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <img
                  src={GG3}
                  className="row-span-6 col-span-1 object-cover w-full h-full rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <img
                  src={GG5}
                  className="row-span-3 col-span-1 object-cover w-full h-full rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <img
                  src={GG4}
                  className="row-span-3 col-span-3 object-cover w-full h-full rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <img
                  src={Bg}
                  className="row-span-3 col-span-1 object-cover w-full h-full rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
              </div>
            </div>

            <div id="section-maps" className="pb-10 lg:pb-0"></div>
            <div className="flex flex-col text-4xl font-bold gap-4 lg:gap-6 pt-4">
              Lokasi
              <div className="flex flex-row justify-between w-full gap-4 h-[400px]">
                <iframe
                  className="w-[100%] rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119.1256878790302!2d110.26794487727257!3d-7.714710643154136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af42692c6af5b%3A0x9198cdc88269b3d5!2sNgepringan%204%2C%20Sendangrejo%2C%20Minggir%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1690285416979!5m2!1sen!2sid"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="relative bg-green pt-8 pb-6 mt-14">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div class="mt-6 lg:mb-0 mb-6">
                <button
                  class="bg-green text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-twitter"></i>
                </button>
                <button
                  class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-facebook-square"></i>
                </button>
                <button
                  class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-dribbble"></i>
                </button>
                <button
                  class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © Tim KKN-PPM UGM 2023 Unit Minggir
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
