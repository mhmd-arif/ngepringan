import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Activity from "./pages/Activity";
import Education from "./pages/Education";
import EduEcoBrick from "./pages/blog/EduEcoBrick";
import EduPertanianMikro from "./pages/blog/EduPertanianMikro";
import EduPotTanaman from "./pages/blog/EduPotTanaman";
import InfoKWT from "./pages/blog/infoKWT";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/edukasi" element={<Education />} />
      <Route path="/kegiatan" element={<Activity />} />
      <Route path="/edukasi/ecobrick" element={<EduEcoBrick />} />
      <Route path="/edukasi/pottanamanhias" element={<EduPotTanaman />} />
      <Route path="/edukasi/pertanianmikro" element={<EduPertanianMikro />} />
      <Route path="/kegiatan/pertanianmikro" element={<EduPertanianMikro />} />
    </Routes>
  );
}

export default App;
