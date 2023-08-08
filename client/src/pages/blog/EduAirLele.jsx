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

const EduAirLele = () => {
  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto px-6 font-poppins items-center lg:text-center lg:mt-32 mt-24  font-bold max-w-5xl"
      >
        <h1 className="lg:text-3xl text-3xl mb-10 text-center">
          Pemanfaatan Air Kolam Lele untuk Kebun Cabai: Inovasi Kelompok Wanita
          Tani di Padukuhan Ngepringan IV
        </h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center">
            <h2>Vaksinasi LSD dari sisi veteriner</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Pertanian merupakan sektor penting dalam kehidupan manusia, baik
              sebagai sumber pangan maupun penghasilan. Di tengah upaya
              mengembangkan pertanian yang lebih berkelanjutan, kelompok wanita
              tani (KWT) telah muncul sebagai pelaku utama dalam merangkul
              perubahan positif dalam dunia pertanian. Salah satu contoh yang
              inspiratif adalah kelompok wanita tani di Padukuhan Ngepringan IV,
              yang berhasil mengatasi permasalahan lingkungan sekaligus
              meningkatkan produktivitas pertanian dengan cara yang inovatif.
            </p>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              KWT di Padukuhan Ngepringan IV memiliki aset berharga berupa kolam
              lele dan kebun cabai. Kolam lele mereka menghasilkan air yang
              memiliki kadar amonia, yang pada awalnya menjadi permasalahan
              utama. Kadar amonia yang terlalu tinggi menghasilkan bau tidak
              sedap yang mengganggu lingkungan sekitar. Selain itu, tingginya
              kadar amonia juga menyebabkan banyak lele yang mati, mengancam
              kelangsungan hidup usaha peternakan ikan lele mereka. Namun,
              inilah saatnya kreativitas dan keberanian KWT bersinar.
            </p>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              KWT tidak hanya melihat permasalahan, tetapi juga potensi yang
              dapat dimanfaatkan dari air kolam lele tersebut. Mereka menyadari
              bahwa meskipun amonia memiliki efek negatif pada aroma dan
              kesehatan lele, itu juga bisa menjadi sumber nutrisi berharga bagi
              tanaman. Inilah titik awal dari solusi inovatif mereka.
            </p>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Air yang mengandung amonia dari kolam lele ternyata memiliki
              potensi untuk menyuburkan tanaman, khususnya tanaman cabai di
              kebun mereka. Dengan bijak, KWT mengambil langkah untuk
              memanfaatkan air ini dengan mengalirkannya ke kebun cabai. Kebun
              cabai yang sebelumnya menghadapi tantangan kesuburan dan
              ketersediaan air, kini menerima suntikan nutrisi yang signifikan
              dari air kolam lele.
            </p>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Namun, mengalirkan air kolam lele ke kebun cabai bukanlah tugas
              yang mudah. Untuk mempermudah proses ini, KWT telah memasang water
              pump yang berfungsi untuk mengalirkan air dari kolam lele ke kebun
              cabai. Water pump ini menjadi jantung dari sistem pengaliran air
              yang mereka ciptakan. Dengan water pump, KWT dapat menyiram kebun
              cabai secara efisien setiap sore, mengoptimalkan pemanfaatan air
              kolam lele.
            </p>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Tidak hanya berhasil mengatasi permasalahan bau dan kematian lele
              yang disebabkan oleh kadar amonia, tetapi KWT juga mampu
              meningkatkan produktivitas kebun cabai mereka secara signifikan.
              Tanaman cabai tumbuh lebih subur dan menghasilkan panen yang lebih
              melimpah. Hasil panen yang lebih besar tidak hanya meningkatkan
              kesejahteraan anggota KWT, tetapi juga memberikan kontribusi
              positif pada pasokan pangan lokal.
            </p>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Selain itu, langkah inovatif yang diambil oleh KWT ini juga
              memiliki dampak positif terhadap lingkungan. Dengan memanfaatkan
              air kolam lele yang sebelumnya dianggap sebagai limbah, KWT telah
              mengubahnya menjadi sumber kebaikan bagi tanaman dan lingkungan
              sekitar. Ini adalah contoh nyata bagaimana pertanian berkelanjutan
              dapat dimulai dari tindakan kecil namun berdampak besar.
            </p>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Kisah sukses KWT di Padukuhan Ngepringan IV memberikan inspirasi
              bagi semua pihak yang peduli dengan pertanian berkelanjutan dan
              inovasi dalam pertanian. Langkah-langkah yang mereka ambil untuk
              memanfaatkan air kolam lele, mengatasi permasalahan amonia, dan
              kematian lele adalah bukti nyata bahwa dengan pandangan kreatif,
              bahkan permasalahan lingkungan dan kesehatan hewan ternak dapat
              diubah menjadi peluang untuk mencapai tujuan yang lebih besar.
              Semoga kisah ini dapat menjadi contoh bagi komunitas lainnya untuk
              menjalankan praktik pertanian yang lebih bijaksana dan
              berkelanjutan.
            </p>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2>THANK YOU!</h2>
            <div className="text-sm font-medium max-w-2xl text-center ">
              Terima kasih telah membaca konten ini, semoga informasi tentang
              Pemanfaatan Air Kolam Lele untuk Kebun Cabai bermanfaat bagi Anda.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EduAirLele;
