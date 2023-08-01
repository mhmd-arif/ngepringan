import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Bg, GG1, GG2, GG3, GG4, GG5, Logo } from "../assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Information = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full h-screen flex flex-col container mx-auto font-poppins items-center lg:text-center lg:mt-32"
      >
        <div className="text-4xl font-bold">Edukasi Digital</div>
        <div className="grid grid-cols-4 w-full mt-10 justify-content-center font-bold">
          <div className="flex flex-col items-center gap-2 ">
            <img
              src={GG3}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <div className="flex flex-col items-center text-2xl">
              Kelompok Wanita <br /> Tani (KWT)
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <img
              src={GG3}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <div className="flex flex-col items-center text-2xl">
              Bina Keluarga <br /> Remaja (BKR)
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <img
              src={GG3}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <div className="flex flex-col items-center text-2xl">
              Bina Keluarga <br /> Lansia (BKL)
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
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

      <Footer />
    </>
  );
};

export default Information;
