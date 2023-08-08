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

const EduDaurUlang = () => {
  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto px-6 font-poppins items-center lg:text-center lg:mt-32 mt-24  font-bold max-w-5xl"
      >
        <h1 className="lg:text-4xl text-3xl mb-10 text-center">
          Kelola Sampah dengan Daur Ulang
        </h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center">
            <h2>Taukah Kamu?</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Permasalahan sampah menjadi tantangan dalam kehidupan masyarakat
              saat ini. Pertumbuhan jumlah penduduk yang semakin banyak
              menyebabkan volume sampah kian meningkat. Volume sampah yang kian
              meningkat bisa berdampak negatif bagi kelestarian lingkungan dan
              kesehatan manusia. Maka dari itu, diperlukan pengelolaan dan
              pengolahan sampah yang mampu secara efektif mencegah pencemaran
              lingkungan. Salah satu solusi efektif dalam mengurangi pencemaran
              lingkungan adalah melalui proses daur ulang.
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

          <div className="flex flex-col gap-2 items-center">
            <h2>Manfaat Daur Ulang Sampah</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Terdapat sejumlah manfaat penting yang bisa didapat dari proses
              daur ulang sampah. Diantaranya:
            </p>
            <ol class="list-decimal text-sm font-medium max-w-2xl text-start">
              <li>Mengurangi volume sampah di tempat pembuangan akhir</li>
              <p>
                Melalui proses daur ulang, sampah akan diolah menjadi barang
                baru yang lebih bermanfaat. Dengan begitu, volume sampah yang
                dibuang ke tempat pembuangan akhir akan berkurang
              </p>
              <li>Mengurangi emisi gas rumah kaca</li>
              <p>
                Proses produksi bahan baku baru seringkali menghasilkan emisi
                gas rumah kaca. Daur ulang mengurangi kebutuhan akan bahan baku
                baru, sehingga mengurangi emisi gas rumah kaca terkait.
              </p>
              <li>Mengurangi polusi laut dan darat</li>
              <p>
                Daur ulang dapat membantu mengurangi jumlah limbah yang
                mencemari lautan dan daratan, yang telah menjadi masalah serius
                bagi keanekaragaman hayati dan kesehatan manusia.
              </p>
              <li>Pakan dan air minum yang tercemar</li>
            </ol>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Daur ulang sampah merupakan solusi efektif untuk mengatasi masalah
              pengelolaan sampah dan dampak negatifnya terhadap lingkungan.
              Dengan menerapkan daur ulang dalam kehidupan kita sehari-hari,
              kita dapat membantu melindungi lingkungan dan menciptakan masa
              depan yang lebih berkelanjutan untuk generasi mendatang.
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
            <h2>THANK YOU!</h2>
            <div className="text-sm font-medium max-w-2xl text-center">
              Terima kasih telah membaca konten ini, semoga informasi tentang
              Kelola Sampah dengan Daur Ulang bermanfaat bagi Anda.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EduDaurUlang;
