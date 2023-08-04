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
import { bkl1, bkl2, bkl3, bkl4, bkl5, bkl6 } from "../../assets/imgActivity";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ActBKL = () => {
  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto font-poppins items-center lg:text-center lg:mt-32 font-bold max-w-5xl"
      >
        <h1 className="text-4xl mb-10">BINA KELUARGA LANSIA (BKL)</h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center">
            <h2>TAUKAH KAMU?</h2>
            <p className=" text-sm font-medium max-w-2xl">
              Bina Keluarga Lansia (BKL) adalah program yang penuh kasih sayang,
              bertujuan untuk memberikan pendampingan dan perhatian khusus
              kepada para lansia agar mereka dapat hidup lebih sejahtera dan
              bahagia. Setiap bulan, para lansia dari padukuhan Ngepringan IV
              dengan antusias mengikuti kegiatan ini, yang didukung oleh
              pembicara berkompeten dari Puskesmas Kecamatan Minggir. Melalui
              BKL, kami berkomitmen untuk memberikan perawatan yang terbaik dan
              memastikan kualitas hidup para lansia semakin meningkat.
            </p>
          </div>

          <div>
            <h2>GALERI</h2>
            <div className="grid grid-cols-3 w-full mt-5 justify-center gap-2 text-sm font-semibold px-10 ">
              <img
                src={bkl1}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={bkl2}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={bkl3}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={bkl3}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={bkl5}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={bkl6}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2>THANK YOU!</h2>
            <div className="text-sm font-medium max-w-2xl ">
              Terima kasih telah membaca konten ini, semoga informasi tentang
              Bina Keluarga Lansia (BKL) di padukuhan Ngepringan IV bermanfaat
              bagi Anda.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ActBKL;
