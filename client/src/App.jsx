import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Information from "./pages/Information";
import Education from "./pages/Education";
import EduEcoBrick from "./pages/blog/EduEcoBrick";
import EduPertanianMikro from "./pages/blog/EduPertanianMikro";
import EduPotTanaman from "./pages/blog/EduPotTanaman";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/edukasi" element={<Education />} />
      <Route path="/informasi" element={<Information />} />
      <Route path="/edukasi/ecobrick" element={<EduEcoBrick />} />
      <Route path="/edukasi/pottanamanhias" element={<EduPotTanaman />} />
      <Route path="/edukasi/pertanianmikro" element={<EduPertanianMikro />} />
    </Routes>
  );
}

export default App;
