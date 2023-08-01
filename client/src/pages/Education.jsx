import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Bg, GG1, GG2, GG3, GG4, GG5, Logo } from "../assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Education = () => {
  const navigate = useNavigate();

  const toEcoBrick = () => {
    navigate("/edukasi/ecobrick");
  };

  const toPotTanaman = () => {
    navigate("/edukasi/pottanamanhias");
  };

  const toPertanianMikro = () => {
    navigate("/edukasi/pertanianmikro");
  };

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
            <button
              className="flex flex-col items-center text-2xl"
              onClick={toPotTanaman}
            >
              Pot Tanaman Hias
            </button>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <img
              src={GG3}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <button
              className="flex flex-col items-center text-2xl"
              onClick={toEcoBrick}
            >
              Eco Brick
            </button>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <img
              src={GG3}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <button
              className="flex flex-col items-center text-2xl"
              onClick={toPertanianMikro}
            >
              Pertanian Mikro
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Education;
