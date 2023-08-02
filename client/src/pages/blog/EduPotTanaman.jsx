import { useNavigate } from "react-router-dom";
import {
  pot1,
  pot2,
  pot3,
  pot4,
  pot5,
  pot6,
  botol,
  alatlukis,
  gunting,
} from "../../assets/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EduPotTanaman = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto font-poppins items-center lg:text-center lg:mt-32 font-bold max-w-5xl"
      >
        <h1 className="text-4xl mb-10">POT TANAMAN HIAS</h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center">
            <h2>TAUKAH KAMU?</h2>
            <p className=" text-sm font-semibold max-w-2xl">
              Setiap botol air mineral yang kita gunakan terdapat peluang untuk
              menciptakan pot tanaman hias inovatif dan menarik! <br />
              Sehingga kita dapat mengurangi limbah plastik serta menciptakan
              wadah kreatif yang mempercantik lingkungan sekitar.
            </p>
          </div>

          <div>
            <h2>ALAT DAN BAHAN</h2>
            <div className="grid grid-cols-3 grid-rows-1 w-full mt-5 justify-center gap-4 text-sm font-semibold px-20">
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={botol}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>botol plastik</div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={alatlukis}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>perlengkapan melukis </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={gunting}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>gunting </div>
              </div>
            </div>
          </div>

          <div>
            <h2>LANGKAH-LANGKAH</h2>
            <div className="grid grid-cols-3 w-full mt-5 gap-y-4 gap-x-8 text-sm font-semibold px-10">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={pot1}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">
                  Potong botol plastik menjadi dua bagian
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={pot2}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">
                  Gambar pola pada botol dengan bantuan kertas
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={pot3}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">Potong botol sesuai pola</div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={pot4}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">Lukis botol sesuai keinginan</div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={pot5}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">
                  Jangan lupa tambahkan detail lukisan
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={pot6}
                  className="w-[150px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10">Hasil akhir pot tanaman hias</div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2>THANK YOU!</h2>
            <div className="text-sm font-semibold max-w-2xl ">
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

export default EduPotTanaman;
