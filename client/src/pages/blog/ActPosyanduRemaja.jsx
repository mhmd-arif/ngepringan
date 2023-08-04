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
import {
  posyandu1,
  posyandu2,
  posyandu3,
  posyandu4,
  posyandu5,
  posyandu6,
} from "../../assets/imgActivity";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ActPosyanduRemaja = () => {
  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto font-poppins items-center lg:text-center lg:mt-32 font-bold max-w-5xl"
      >
        <h1 className="text-4xl mb-10">POSYANDU REMAJA</h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center">
            <h2>TAUKAH KAMU?</h2>
            <p className=" text-sm font-medium max-w-2xl">
              Posyandu Remaja adalah kegiatan khusus yang ditujukan untuk para
              remaja padukuhan kami. Setiap bulannya, para remaja berpartisipasi
              dalam kegiatan ini yang meliputi pengukuran tinggi dan berat badan
              secara rutin, serta penyampaian materi yang bermanfaat untuk
              kesehatan dan kesejahteraan mereka. Tenaga medis ahli dari
              Puskesmas Kecamatan Minggir juga turut membantu dalam
              menyelenggarakan kegiatan ini, memastikan bahwa para remaja
              mendapatkan perawatan dan informasi yang berkualitas. Dengan
              "Posyandu Remaja," kami berkomitmen untuk memberikan perhatian
              khusus kepada para remaja, membantu mereka tumbuh sehat dan
              menjadi generasi yang kuat dan berdaya saing.
            </p>
          </div>

          <div>
            <h2>GALERI</h2>
            <div className="grid grid-cols-3 w-full mt-5 justify-center gap-2 text-sm font-semibold px-10 ">
              <img
                src={posyandu1}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={posyandu2}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={posyandu3}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={posyandu3}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={posyandu5}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={posyandu6}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2>THANK YOU!</h2>
            <div className="text-sm font-medium max-w-2xl ">
              Terima kasih telah membaca konten ini, semoga informasi tentang
              Posyandu Remaja di padukuhan Ngepringan IV bermanfaat bagi Anda.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ActPosyanduRemaja;
