import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import { Bg, GG1, GG2, GG3, GG4, GG5, Logo } from "../assets";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Homepage() {
  const toInformation = () => {
    const element = document.getElementById("section-information");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div
        id="Hero"
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

      <div id="Body" className="bg-white">
        <div className="flex flex-col container mx-auto font-poppins items-center lg:text-center ">
          <div className="flex flex-col gap-8 mt-10 lg:mt-0 lg:mx-10">
            <div id="section-information" className="pb-10 lg:pb-0 pt-6"></div>
            <div className="flex flex-col text-4xl font-bold gap-4 lg:gap-6 pt-4">
              Informasi Padukuhan
              <div className="flex flex-row gap-4 w-full justify-center ">
                <div className="flex flex-col items-center gap-2 max-w-[250px]">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Kelompok Wanita Tani (KWT)
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 max-w-[250px]">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Bina Keluarga Remaja (BKR)
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 max-w-[250px]">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Bina Keluarga Lansia (BKL)
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 max-w-[250px]">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Posyandu Balita
                  </div>
                </div>
              </div>
            </div>

            <div id="section-education" className="pb-10 lg:pb-0 pt-6"></div>
            <div className="flex flex-col text-4xl font-bold gap-4 lg:gap-6 pt-4">
              Edukasi Digital
              <div className="flex flex-row gap-4 w-full justify-center ">
                <div className="flex flex-col items-center gap-2 max-w-[250px]">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Isi Piringku
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 max-w-[250px]">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Apa itu Anemia?
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 max-w-[250px]">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Cuci Tangan yang Baik
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 max-w-[250px]">
                  <img
                    src={GG3}
                    className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                  />
                  <div className="flex flex-col items-center text-2xl">
                    Penyakit Menular Hewan
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
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
