import { Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Activity from "./pages/Activity";
import Education from "./pages/Education";

import ActKWT from "./pages/blog/ActKWT";
import ActBKL from "./pages/blog/ActBKL";
import ActBKR from "./pages/blog/ActBKR";
import ActPosyanduRemaja from "./pages/blog/ActPosyanduRemaja";

import EduEcoBrick from "./pages/blog/EduEcoBrick";
import EduPertanianMikro from "./pages/blog/EduPertanianMikro";
import EduPotTanaman from "./pages/blog/EduPotTanaman";
import EduVaksinLsd from "./pages/blog/EduVaksinLsd";
import EduAirLele from "./pages/blog/EduAirLele";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/edukasi" element={<Education />} />
      <Route path="/kegiatan" element={<Activity />} />
      <Route path="/edukasi/ecobrick" element={<EduEcoBrick />} />
      <Route path="/edukasi/pottanamanhias" element={<EduPotTanaman />} />
      <Route path="/edukasi/pertanianmikro" element={<EduPertanianMikro />} />
      <Route path="/edukasi/vaksinasilsd" element={<EduVaksinLsd />} />
      <Route path="/edukasi/pemanfaatanairkolamlele" element={<EduAirLele />} />
      <Route path="/edukasi/daurulang" element={<EduVaksinLsd />} />
      <Route path="/edukasi/ciptakankarya" element={<EduVaksinLsd />} />
      <Route path="/kegiatan/kwt" element={<ActKWT />} />
      <Route path="/kegiatan/bkl" element={<ActBKL />} />
      <Route path="/kegiatan/bkr" element={<ActBKR />} />
      <Route path="/kegiatan/posyanduremaja" element={<ActPosyanduRemaja />} />
    </Routes>
  );
}

export default App;
