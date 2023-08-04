import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { eco6, tani4, pot6 } from "../assets/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Education = () => {
  const navigate = useNavigate();

  const toEcoBrick = () => {
    navigate("/edukasi/ecobrick");
    window.scrollTo(0, 0);
  };

  const toPotTanaman = () => {
    navigate("/edukasi/pottanamanhias");
    window.scrollTo(0, 0);
  };

  const toPertanianMikro = () => {
    navigate("/edukasi/pertanianmikro");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" lg:max-w-5xl lg:h-screen flex flex-col container mx-auto font-poppins items-center lg:text-center lg:mt-32 mt-24 lg:mb-0  "
      >
        <div className="lg:text-4xl text-3xl font-bold">Edukasi Digital</div>
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-x-2 lg:gap-y-0 gap-y-8 w-full mt-10 justify-content-center font-bold lg:text-2xl text-xl">
          <div
            className="flex flex-col items-center gap-2 "
            onClick={toPotTanaman}
          >
            <img
              src={pot6}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <button className="flex flex-col items-center ">
              Pot Tanaman Hias
            </button>
          </div>
          <div
            className="flex flex-col items-center gap-2 "
            onClick={toEcoBrick}
          >
            <img
              src={eco6}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <button className="flex flex-col items-center ">Eco Brick</button>
          </div>
          <div
            className="flex flex-col items-center gap-2 "
            onClick={toPertanianMikro}
          >
            <img
              src={tani4}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <button className="flex flex-col items-center ">
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
