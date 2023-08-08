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

const EduVaksinLsd = () => {
  return (
    <>
      <Navbar />
      <div
        id="Body"
        className=" w-full flex flex-col container mx-auto px-6 font-poppins items-center lg:text-center lg:mt-32 mt-24  font-bold max-w-5xl"
      >
        <h1 className="lg:text-3xl text-3xl mb-10 text-center">
          PENTINGNYA VAKSINASI LSD UNTUK HEWAN TERNAK DARI SISI VETERINER DAN
          HUKUM
        </h1>
        <div className="max-w-4xl flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center">
            <h2>Vaksinasi LSD dari sisi veteriner</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Lumpy Skin Disease (LSD) adalah penyakit menular pada hewan ternak
              yang disebabkan oleh virus LSD. LSD dapat menyebabkan penyakit
              kulit serius pada hewan ternak, termasuk gejala seperti benjolan
              di kulit, kerusakan kulit, dan demam tinggi. Penularan penyakit
              dari satu hewan ke hewan lain dapat melalui beberapa perantara,
              antara lain:
            </p>
            <ol class="list-decimal text-sm font-medium max-w-2xl text-justify">
              <li>
                Ditularkan oleh serangga penghisap darah, seperti nyamuk dan
                lalat
              </li>
              <li>Kontak langsung antara hewan sakit dan hewan yang sehat</li>
              <li>Penularan dari induk ke anak melalui susu</li>
              <li>Pakan dan air minum yang tercemar</li>
            </ol>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Vaksinasi dapat membantu melindungi ternak dari penderitaan.
              Vaksinasi LSD merupakan cara paling efektif untuk mencegah
              penyebaran penyakit ini di antara populasi hewan ternak. Dengan
              memberikan vaksin pada hewan, kita dapat membentuk kekebalan yang
              akan membantu melindungi hewan dari infeksi dan mencegah
              penyebaran virus ke hewan lain. Meskipun LSD tidak bersifat
              zoonosis (tidak menular dari hewan ke manusia), mengendalikan
              penyakit pada hewan ternak menjadi penting dalam menjaga kesehatan
              manusia melalui keamanan pangan dan lingkungan yang lebih baik.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <h2>Vaksinasi dari sisi hukum</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Bagaimana cara melakukan pencegahan penyakit hewan? Kegiatan
              pengendalian dan penanggulangan penyakit hewan ini meliputi
              kegiatan pengamatan dan pengidentifikasin penyakit hewan,
              pencegahan penyakit hewan, pengamanan penyakit hewan,
              pemberantasan penyakit hewan, dan pengobatan hewan. Kegiatan
              tersebut tercantum dalam Pasal 2 ayat (1) PP Nomor 47 Tahun 2014
              tentang Pengendalian dan Penanggulangan Penyakit Hewan.
            </p>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Salah satu kegiatan untuk mencegah adanya penyakit atau wabah
              penyakit pada hewan adalah dengan dilakukannya kegiatan
              surveilans, yaitu berupa tindakan pengebalan, pengoptimalan
              kebugaran hewan, dan biosecurity, dimana tindakan-tindakan
              tersebut dapat dilihat pada Pasal 24 ayat (2) PP Nomor 47 Tahun
              2014. Pengebalan hewan dilakukan melalui vaksinasi, pemberian
              antisera, dan/atau peningkatan status gizi hewan. Vaksinasi ini
              dilakukan pada daerah bebas Penyakit Hewan Menular Strategis yang
              berisiko tinggi tertular, daerah terduga, daerah tertular, dan
              daerah Wabah. Vaksinasi pada hewan ternak diberikan secara
              parental harus dilakukan oleh Dokter Hewan atau paramedik
              veteriner yang berada di bawah penyeliaan Dokter Hewan. Dalam
              pelaksanaan vaksinasi, wajib untuk dilaporkan kepada Otoritas
              Veteriner kabupaten/kota atau Otoritas Veteriner provinsi.
              Kegiatan surveilans ini dilakukan oleh Otoritas Veteriner
              Kementerian, namun dalam pelaksanaan kegiatan tersebut perlu
              adanya tindakan dari Perusahaan Peternakan, Peternak, orang
              perseorangan yang memelihara untuk memberikan kesempatan kepada
              Otoritas Veteriner dalam melakukan surveilans penyakit hewan.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <h2>Mengapa perlu patuh terhadap peraturan?</h2>
            <p className=" text-sm font-medium max-w-2xl text-justify">
              Wabah LSD dapat menyebabkan kerugian ekonomi yang besar bagi
              peternakan dan industri peternakan. Penyakit ini dapat menyebabkan
              kematian hewan, menurunkan produksi susu dan daging, serta
              mengganggu perdagangan ternak. Dengan mencegah wabah melalui
              vaksinasi, kita dapat melindungi mata pencaharian peternak dan
              stabilitas industri peternakan. Dengan begitu, penting untuk
              mematuhi peraturan perundang-undangan terkait pencegahan penyakit
              pada hewan untuk menekan cost atau biaya akibat kerugian dan
              keuntungan yang didapat adalah bahwa ternak yang sehat juga akan
              memiliki nilai jual yang tinggi.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <h2>DAFTAR PUSTAKA</h2>
            <ul class="list-disc text-sm font-medium max-w-2xl text-justify">
              <li>
                Admin Dinas Pertanian. “Vaksinasi LSD dan Penandaan Ternak
                Sapi”.
                https://dispertan.semarangkota.go.id/vaksinasi-penandaan-ternak/
                (diakses 14 Juli 2023).
              </li>
              <li>
                Peraturan Pemerintah Republik Indonesia Nomor 47 Tahun 2014
                tentang Pengendalian dan Penanggulan Penyakit Hewan
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2>THANK YOU!</h2>
            <div className="text-sm font-medium max-w-2xl text-center ">
              Terima kasih telah membaca konten ini, semoga informasi tentang
              Pentingnya Vaksinasi Lsd Untuk Hewan Ternak Dari Sisi Veteriner
              Dan Hukum bermanfaat bagi Anda.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EduVaksinLsd;
