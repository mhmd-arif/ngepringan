import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Bg, GG1, GG2, GG3, GG4, GG5, Logo } from "../../assets";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EduEcoBrick = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto font-poppins items-center lg:text-center lg:mt-32 font-bold max-w-5xl"
      >
        <h1 className="text-4xl mb-10">ECO BRICK</h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 ">
            <h2>TAUKAH KAMU?</h2>
            <p className=" text-sm font-semibold">
              Dari setiap botol air mineral yang kita gunakan setiap hari, kita
              memiliki kesempatan untuk menciptakan eco brick yang inovatif dan
              berdaya guna! <br /> Eco brick dapat dimanfaatkan sebagai bahan
              bangunan alternatif, furnitur kreatif, atau bahkan karya seni
              ramah lingkungan.
            </p>
          </div>

          <div>
            <h2>ALAT DAN BAHAN</h2>
            <div className="grid grid-cols-4 w-full mt-5 justify-center gap-4 text-sm font-semibold">
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={GG3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>botol plastik</div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={GG3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>sampah plastik </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={GG3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>gunting </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={GG3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>tongkat</div>
              </div>
            </div>
          </div>

          <div>
            <h2>LANGKAH-LANGKAH</h2>
            <div className="grid grid-cols-3 w-full mt-5 gap-y-4 gap-x-8 text-sm font-semibold">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={GG3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>Kumpulkan sampah plastik dan botol mineral</div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={GG3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>Bersihkan dan jemur sampah plastik dan botol mineral </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={GG3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>Potong sampah plastik menjadi bagian-bagian kecil </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={GG3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>
                  Masukan potongan sampah ke dalam botol dengan bantuan tongkat
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={GG3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>Pastikan isi dalam botol terkompresi</div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={GG3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>Hasil akhir eco brick</div>
              </div>
            </div>
          </div>

          <div>
            <h2>THANK YOU!</h2>
            <div className="text-sm font-bold">
              Mari manfaatkan sampah tersebut untuk memberikan kontribusi
              positif <br />
              bagi lingkungan dan menciptakan perubahan yang berkelanjutan.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EduEcoBrick;
