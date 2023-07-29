import { Routes, Route } from "react-router-dom";
import Education from "./pages/Education";
import Homepage from "./pages/Homepage";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/edukasi" element={<Education />} />
    </Routes>
  );
}

export default App;
