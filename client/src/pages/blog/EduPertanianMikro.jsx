import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Bg, GG1, GG2, GG3, GG4, GG5, Logo } from "../../assets";
import {
  tani1,
  tani2,
  tani3,
  tani4,
  galon,
  pisau,
  solder,
} from "../../assets/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EduPertanianMikro = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto font-poppins items-center lg:text-center lg:mt-32 font-bold max-w-5xl"
      >
        <h1 className="text-4xl mb-10">PERTANIAN MIKRO</h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center">
            <h2>TAUKAH KAMU?</h2>
            <p className=" text-sm font-semibold max-w-2xl">
              Sampah galon air mineral yang kita minum sehari-hari dapat kita
              manfaatkan untuk pertanian mikro dengan memanfaatkannya menjadi
              pot untuk tanaman
            </p>
          </div>

          <div>
            <h2>ALAT DAN BAHAN</h2>
            <div className="grid grid-cols-3 w-full mt-5 justify-center gap-4 text-sm font-semibold px-20">
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={galon}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>Galon</div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={pisau}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>Pisau </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={solder}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>Solder</div>
              </div>
            </div>
          </div>

          <div>
            <h2>LANGKAH-LANGKAH</h2>
            <div className="grid grid-cols-3 w-full mt-5 gap-y-4 gap-x-8 text-sm font-semibold px-10">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={tani1}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">Lubangi bagian atas dengan solder</div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={tani2}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">
                  Potong menjadi 2 bagian dengan pisau
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={tani3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">Hasil setelah dipotong</div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={tani4}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">
                  Susun kedua bagian sesuai gambar di atas
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={tani4}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">
                  Isi bagian bawah dengan air, dan bagian atas dengan media
                  tanam
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={tani4}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">Tanam tanaman yang anda inginkan</div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2>THANK YOU!</h2>
            <div className="text-sm font-semibold max-w-2xl ">
              Jangan biarkan sampah terbuang sia-sia, ayo bergandengan tangan
              dalam memanfaatkannya untuk menciptakan dunia yang lebih hijau dan
              berkelanjutan!
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EduPertanianMikro;
