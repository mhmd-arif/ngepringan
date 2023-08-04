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
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EduEcoBrick = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto font-poppins items-center lg:text-center lg:mt-32 mt-24  font-bold max-w-5xl"
      >
        <h1 className="lg:text-4xl text-3xl mb-10">ECO BRICK</h1>
        <div className="max-w-4xl flex flex-col gap-14 mx-5">
          <div className="flex flex-col gap-2 items-center">
            <h2>TAUKAH KAMU?</h2>
            <p className=" text-sm text-center lg:font-semibold font-medium max-w-2xl">
              Dari setiap botol air mineral yang kita gunakan setiap hari, kita
              memiliki kesempatan untuk menciptakan eco brick yang inovatif dan
              berdaya guna! <br /> Eco brick dapat dimanfaatkan sebagai bahan
              bangunan alternatif, furnitur kreatif, atau bahkan karya seni
              ramah lingkungan.
            </p>
          </div>

          <div>
            <h2 className="text-center ">ALAT DAN BAHAN</h2>
            <div className="grid lg:grid-cols-4 grid-cols-1 w-full mt-5 justify-center gap-4 text-sm font-semibold lg:px-20">
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={botol}
                  className="lg:w-[150px] w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>botol plastik</div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={sampah}
                  className="lg:w-[150px] w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>sampah plastik </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={gunting}
                  className="lg:w-[150px] w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>gunting </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={tongkat}
                  className="lg:w-[150px] w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>tongkat</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-center ">LANGKAH-LANGKAH</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-full mt-5 gap-y-4 gap-x-8 text-sm font-semibold px-10">
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={eco1}
                  className="lg:w-[150px] w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Kumpulkan sampah plastik dan botol mineral
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={eco2}
                  className="lg:w-[150px] w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Bersihkan dan jemur sampah plastik dan botol mineral{" "}
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={eco3}
                  className="lg:w-[150px] w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Potong sampah plastik menjadi bagian-bagian kecil{" "}
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={eco4}
                  className="lg:w-[150px] w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Masukan potongan sampah ke dalam botol dengan bantuan tongkat
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={eco4}
                  className="lg:w-[150px] w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Pastikan isi dalam botol terkompresi
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={eco6}
                  className="lg:w-[150px] w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10  text-center">Hasil akhir eco brick</div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2>THANK YOU!</h2>
            <div className="text-sm lg:font-semibold font-medium max-w-2xl text-center ">
              Mari manfaatkan sampah tersebut untuk memberikan kontribusi
              positif bagi lingkungan dan menciptakan perubahan yang
              berkelanjutan.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EduEcoBrick;
