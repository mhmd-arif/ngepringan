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
        className=" w-full flex flex-col container mx-auto font-poppins items-center lg:text-center lg:mt-32 mt-24  font-bold max-w-5xl"
      >
        <h1 className="lg:text-4xl text-3xl mb-10">POT TANAMAN HIAS</h1>
        <div className="max-w-4xl flex flex-col gap-14 mx-5">
          <div className="flex flex-col gap-2 items-center">
            <h2>TAUKAH KAMU?</h2>
            <p className=" text-sm text-center lg:font-semibold font-medium max-w-2xl">
              Setiap botol air mineral yang kita gunakan terdapat peluang untuk
              menciptakan pot tanaman hias inovatif dan menarik! <br />
              Sehingga kita dapat mengurangi limbah plastik serta menciptakan
              wadah kreatif yang mempercantik lingkungan sekitar.
            </p>
          </div>

          <div>
            <h2 className="text-center ">ALAT DAN BAHAN</h2>
            <div className="grid lg:grid-cols-4 grid-cols-1 w-full mt-5 justify-center gap-4 text-sm font-semibold lg:px-20">
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={botol}
                  className="w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>botol plastik</div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={alatlukis}
                  className="w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>perlengkapan melukis </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={gunting}
                  className="w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div>gunting </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-center ">LANGKAH-LANGKAH</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-full mt-5 gap-y-4 gap-x-8 text-sm font-semibold px-10">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={pot1}
                  className="w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Potong botol plastik menjadi dua bagian
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={pot2}
                  className="w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Gambar pola pada botol dengan bantuan kertas
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={pot3}
                  className="w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Potong botol sesuai pola
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={pot4}
                  className="w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Lukis botol sesuai keinginan
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={pot5}
                  className="w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Jangan lupa tambahkan detail lukisan
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  ">
                <img
                  src={pot6}
                  className="w-[200px] object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
                />
                <div className="px-10 text-center">
                  Hasil akhir pot tanaman hias
                </div>
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

export default EduPotTanaman;
