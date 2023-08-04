import { useNavigate } from "react-router-dom";
import {
  eco1,
  eco2,
  eco3,
  eco4,
  eco6,
  botol,
  sampah,
  gunting,
  tongkat,
} from "../../assets/image";
import { bkr1, bkr2, bkr3 } from "../../assets/imgActivity";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ActBKR = () => {
  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto px-6 font-poppins items-center lg:text-center lg:mt-32 mt-24  font-bold max-w-5xl"
      >
        <h1 className="lg:text-4xl text-3xl mb-10 text-center">
          BINA KELUARGA REMAJA (BKR)
        </h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center">
            <h2>TAUKAH KAMU?</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Bina Keluarga Remaja (BKR) adalah inisiatif yang penuh inspirasi,
              berfokus pada memberikan pendampingan dan dukungan kepada para
              remaja agar mereka meraih kesejahteraan yang lebih baik. Setiap
              bulannya, para remaja dari padukuhan Ngepringan IV dengan semangat
              bergabung dalam kegiatan ini, yang memberikan ruang untuk berbagi
              pengetahuan dan pengalaman. Dengan dukungan pembicara yang ahli
              dari Puskesmas Kecamatan Minggir, BKR hadir sebagai tempat yang
              menyediakan wawasan dan bimbingan yang berharga bagi masa depan
              yang lebih cerah bagi para remaja.
            </p>
          </div>

          <div>
            <h2 className="text-center">GALERI</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-full mt-5 gap-y-4 gap-x-8 text-sm font-semibold px-10">
              <img
                src={bkr1}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={bkr2}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={bkr3}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={bkr1}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={bkr2}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={bkr3}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2>THANK YOU!</h2>
            <div className="text-sm font-medium max-w-2xl text-center ">
              Terima kasih telah membaca konten ini, semoga informasi tentang
              Bina Keluarga Remaja (BKR) di padukuhan Ngepringan IV bermanfaat
              bagi Anda.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ActBKR;
