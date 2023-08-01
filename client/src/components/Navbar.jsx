import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Logo } from "../assets";

const Navbar = () => {
  const navigate = useNavigate();

  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeClass);

  const toHome = () => {
    navigate("/");
  };

  const toBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const toInformation = () => {
    navigate("/informasi");
  };

  const toEducation = () => {
    navigate("/edukasi");
  };

  return (
    <div className="navbar">
      <div
        className={
          "navbar bg-white transform duration-300 ease " +
          (scroll ? "opacity-100 " : "lg:h-24 opacity-0 ") +
          (!isOpen ? "shadow-md" : "opacity-100")
        }
      ></div>
      <div
        className={
          "z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-green-dark " +
          "justify-between transform duration-300 ease overflow-hidden " +
          (scroll ? "h-16" : "lg:h-24 h-16")
        }
      >
        <button
          className="flex flex-row justify-start items-center h-full"
          onClick={() => {
            toHome();
          }}
        >
          <img
            src={Logo}
            className={
              "m-2 transform duration-300 ease " +
              (scroll ? "w-8" : "w-0 mr-[-4px]")
            }
          />
          <p className="transform">Ngepringan Asri</p>
        </button>
        <button
          className="p-1 rounded lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FaBars />
        </button>
        <div className="lg:flex flex-row hidden gap-5">
          <button
            className="hover:underline"
            onClick={() => {
              toHome();
            }}
          >
            Beranda
          </button>
          <button className="hover:underline" onClick={toInformation}>
            Informasi
          </button>
          <button className="hover:underline" onClick={toEducation}>
            Edukasi
          </button>
          <button className="hover:underline" onClick={toBottom}>
            Kontak
          </button>
        </div>
      </div>
      <div
        className={
          "w-screen bg-white pb-2 text-green-dark transform duration-300 ease flex flex-col lg:hidden absolute shadow-md " +
          (!isOpen ? "opacity-0 pointer-events-none" : "visible opacity-100")
        }
      >
        <button
          className="hover:bg-grey py-2"
          onClick={() => {
            setIsOpen((prev) => !prev);
            toHome();
          }}
        >
          Beranda
        </button>
        <button
          className="hover:bg-grey py-2"
          onClick={() => {
            setIsOpen((prev) => !prev);
            toInformation();
          }}
        >
          Informasi
        </button>
        <button
          className="hover:bg-grey py-2"
          onClick={() => {
            setIsOpen((prev) => !prev);
            toEducation();
          }}
        >
          Edukasi
        </button>
        <button
          className="hover:bg-grey py-2"
          onClick={() => {
            setIsOpen((prev) => !prev);
            toBottom();
          }}
        >
          Kontak
        </button>
      </div>
    </div>
  );
};

export default Navbar;
