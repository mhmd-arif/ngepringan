import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Bg, GG1, GG2, GG3, GG4, GG5, Logo } from "../../assets";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EduPotTanaman = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <Footer />
    </>
  );
};

export default EduPotTanaman;
