import { Routes, Route } from "react-router-dom";
import Information from "./pages/Information";
import Education from "./pages/Education";
import Homepage from "./pages/Homepage";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/edukasi" element={<Education />} />
      <Route path="/informasi" element={<Information />} />
    </Routes>
  );
}

export default App;
