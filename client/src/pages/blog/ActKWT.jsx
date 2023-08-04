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
import { kwt1, kwt2, kwt3, kwt4, kwt5, kwt6 } from "../../assets/imgActivity";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ActKWT = () => {
  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto px-6 font-poppins items-center lg:text-center lg:mt-32 mt-24  font-bold max-w-5xl"
      >
        <h1 className="lg:text-4xl text-3xl mb-10 text-center">
          KELOMPOK WANITA TANI (KWT)
        </h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center">
            <h2>TAUKAH KAMU?</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Kelompok Wanita Tani (KWT) merupakan wadah bagi ibu-ibu di
              padukuhan yang berkomitmen untuk mengembangkan sektor pertanian
              dan peternakan. Anggota KWT aktif terlibat dalam kebun cabai,
              kolam lele, dan peternakan ayam petelur. Setiap hari, dengan penuh
              semangat, mereka bergantian piket berdasarkan rukun tetangga (RT)
              dari hari Senin hingga Sabtu, sementara hari Minggu menjadi momen
              istirahat. Kebun cabai KWT menjadi sumber kebanggaan kami, karena
              panen dilakukan setiap tiga hari sekali, menghasilkan cabai segar
              berkualitas tinggi. Selain itu, kami juga menerapkan praktik
              lingkungan yang ramah, dimana kotoran ayam dari peternakan menjadi
              pakan alami untuk ikan lele, dan air dari kolam lele digunakan
              untuk menyiram kebun cabai. Hasil panen cabai yang melimpah
              biasanya dibeli oleh warga dukuh, menjalin hubungan yang harmonis
            </p>
          </div>

          <div>
            <h2 className="text-center">GALERI</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-full mt-5 gap-y-4 gap-x-8 text-sm font-semibold px-10">
              <img
                src={kwt1}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={kwt2}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={kwt3}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={kwt3}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={kwt5}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
              <img
                src={kwt6}
                className=" object-cover rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md"
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2>THANK YOU!</h2>
            <div className="text-sm font-medium max-w-2xl text-center ">
              Terima kasih telah membaca konten ini, semoga informasi tentang
              Kelompok Wanita Tani (KWT) di desa Ngepringan IV bermanfaat bagi
              Anda.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ActKWT;
