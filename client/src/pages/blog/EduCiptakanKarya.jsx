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

const EduCiptakanKarya = () => {
  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto px-6 font-poppins items-center lg:text-center lg:mt-32 mt-24  font-bold max-w-5xl"
      >
        <h1 className="lg:text-4xl text-3xl mb-10 text-center">
          Ciptakan Karya Melalui Daur Ulang Sampah
        </h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center">
            <h2>Taukah Kamu?</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Dalam upaya mengatasi masalah sampah dan dampak negatifnya
              terhadap lingkungan, daur ulang adalah salah satu solusi yang
              paling efektif. Selain membantu mengurangi limbah, daur ulang juga
              dapat menjadi sumber inspirasi untuk menciptakan kerajinan tangan
              yang indah dan bermanfaat. Dalam artikel ini, kami akan
              menjelaskan beberapa ide sederhana tentang bagaimana Anda bisa
              mengubah sampah menjadi kerajinan tangan kreatif.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <h2>Definisi Daur Ulang Sampah</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Daur ulang sampah merupakan proses pengolahan sampah menjadi bahan
              atau produk yang memiliki nilai guna. Proses ini berusaha mengubah
              sebuah barang yang sebelumnya tidak memiliki nilai guna menjadi
              barang baru yang memiliki nilai guna berkualitas.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center text-start">
            <h2>1. Kerajinan dari Botol Plastik Bekas</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Botol plastik adalah salah satu jenis sampah yang paling umum
              ditemukan di sekitar kita. Alih-alih membuangnya, Anda dapat
              mencoba mengubahnya menjadi berbagai jenis kerajinan tangan.
              Misalnya, Anda dapat memotong bagian atas botol dan membuatnya
              menjadi pot bunga kecil yang cantik. Anda juga dapat menggunting
              bagian sisi botol menjadi pola tertentu, lalu mengecatnya dan
              menggunakannya sebagai tempat pensil unik atau tempat penyimpanan
              lainnya.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center text-start">
            <h2>2. Kreasi dari Kardus Bekas</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Kardus bekas, seperti yang digunakan untuk kemasan makanan atau
              minuman, dapat diubah menjadi berbagai jenis kerajinan tangan yang
              bermanfaat. Misalnya, Anda bisa menggunting kardus menjadi
              bentuk-bentuk tertentu dan menggabungkannya untuk membuat kotak
              penyimpanan unik. Anda juga bisa melukis atau menghias kardus
              tersebut agar terlihat lebih menarik.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center text-start">
            <h2>3. Manfaatkan Kertas dan Majalah Lama</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Kertas dan majalah lama seringkali menjadi sampah yang menumpuk di
              rumah. Anda bisa memanfaatkannya untuk membuat kerajinan tangan
              kreatif seperti origami, kartu ucapan, atau bingkai foto. Potong
              kertas atau majalah menjadi pola-pola tertentu dan gunakan lem
              atau stapler untuk menyatukannya menjadi kreasi yang menarik.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center text-start">
            <h2>4. Dari Kaleng Bekas ke Kerajinan Berguna</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Kaleng bekas dari minuman atau makanan kalengan juga bisa diubah
              menjadi kerajinan tangan yang bermanfaat. Bersihkan kaleng dengan
              baik dan aman, lalu cat atau hias kaleng tersebut. Anda bisa
              membuatnya menjadi wadah penyimpanan, vas bunga, atau lilin hias
              yang indah.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center text-start">
            <h2>5. Botol Kaca Jadi Lampu Hias</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Botol kaca dari minuman seperti wine atau minuman keras dapat
              diubah menjadi lampu hias yang menarik. Anda bisa memotong bagian
              bawah botol menggunakan alat khusus atau proses yang aman. Setelah
              itu, tambahkan lampu LED ke bagian dalam botol dan hiasi dengan
              dekorasi tambahan seperti manik-manik atau kain berwarna untuk
              menciptakan lampu yang indah dan ramah lingkungan.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center text-start">
            <h2>6. Kreativitas dari Barang Elektronik Tua</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Barang elektronik yang rusak atau tidak digunakan lagi, seperti
              keyboard, mouse, atau kabel, juga bisa diubah menjadi kerajinan
              tangan yang menarik. Misalnya, Anda bisa menggunakan tombol-tombol
              keyboard lama untuk membuat kalung atau gelang kreatif.
              Bagian-bagian lainnya juga dapat digunakan untuk hiasan dinding
              atau objek dekoratif lainnya.
            </p>
          </div>

          {/* <div>
            <h2 className="text-center">GALERI</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-full mt-5 gap-y-4 gap-x-8 text-sm font-semibold px-10">
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
          </div> */}

          <div className="w-full flex flex-col items-center">
            <h2>Terima Kasih</h2>
            <div className="text-sm font-medium max-w-2xl text-center">
              Daur ulang sampah menjadi kerajinan tangan bukan hanya bermanfaat
              bagi lingkungan, tetapi juga merupakan cara yang kreatif untuk
              mengasah keterampilan seni dan keterampilan kreatif Anda. Dengan
              berinvestasi dalam mendaur ulang dan mengubah sampah menjadi
              sesuatu yang indah dan berguna, Anda juga dapat menginspirasi
              orang lain untuk melakukan hal serupa
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EduCiptakanKarya;
