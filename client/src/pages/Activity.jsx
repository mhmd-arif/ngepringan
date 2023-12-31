import { useNavigate } from "react-router-dom";
import { kwt1, bkr1, bkl4, posyandu4 } from "../assets/imgActivity";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Activity = () => {
  const navigate = useNavigate();

  const toKWT = () => {
    navigate("/kegiatan/kwt");
    window.scrollTo(0, 0);
  };

  const toBKR = () => {
    navigate("/kegiatan/bkr");
    window.scrollTo(0, 0);
  };

  const toBKL = () => {
    navigate("/kegiatan/bkl");
    window.scrollTo(0, 0);
  };

  const toPosyanduRemaja = () => {
    navigate("/kegiatan/posyanduremaja");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" lg:max-w-5xl lg:h-screen flex flex-col container mx-auto font-poppins items-center lg:text-center lg:mt-32 mt-24 lg:mb-0 "
      >
        <div className="lg:text-4xl text-3xl font-bold">Kegiatan padukuhan</div>
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-x-2 lg:gap-y-0 gap-y-8 w-full mt-10 justify-content-center font-bold lg:text-2xl text-xl">
          <div className="flex flex-col items-center gap-2 " onClick={toKWT}>
            <img
              src={kwt1}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <button className="flex flex-col items-center text-2xl">
              Kelompok Wanita Tani (KWT)
            </button>
          </div>
          <div className="flex flex-col items-center gap-2 " onClick={toBKL}>
            <img
              src={bkl4}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <button className="flex flex-col items-center text-2xl">
              Bina Keluarga Lansia (BKL)
            </button>
          </div>
          <div className="flex flex-col items-center gap-2 " onClick={toBKR}>
            <img
              src={bkr1}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <button className="flex flex-col items-center text-2xl">
              Bina Keluarga Remaja (BKR)
            </button>
          </div>
          <div
            className="flex flex-col items-center gap-2 "
            onClick={toPosyanduRemaja}
          >
            <img
              src={posyandu4}
              className="w-[250px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
            />
            <button className="flex flex-col items-center text-2xl">
              Posyandu Remaja
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Activity;
