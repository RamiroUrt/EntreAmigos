import { useRef, useEffect, useState } from "react";
import Cebado from "../assets/video/Cebar.mp4";
import Button from "./Button/Button";
import ModelMate from "./layout/ModelMate";
import Nav from "../components/layout/Nav/Nav";
import LogoPNG from "../../public/img/logoPng.png";

const Hero = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [navOpacity, setNavOpacity] = useState(0); // Estado para controlar la opacidad

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const buttonContainer = document.querySelector('.hero-button-container');
    
        // Calcular la opacidad del Nav
        if (scrollY > 700) {
          const opacity = Math.min((scrollY - 300) / 90, 50); 
          setNavOpacity(opacity);
          
          // Ocultar botones
          if (buttonContainer) {
            buttonContainer.classList.add('hidden');
          }
        } else {
          setNavOpacity(0); // Ocultar Nav
          // Mostrar botones
          if (buttonContainer) {
            buttonContainer.classList.remove('hidden');
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {navOpacity > 0 && <Nav opacity={navOpacity} />}
      <main ref={heroRef} className="hero-container">
        <video ref={videoRef} autoPlay loop muted>
          <source src={Cebado} type="video/mp4" />
        </video>
        <div className="hero-section">
          <nav className="nav-hero">
            <div className="nav-logo">
              <img src={LogoPNG} alt="Logo" />
            </div>
          </nav>
          <div className="hero-contain-content">
            <div className="hero-left">
              <h1 className="tittle">
                Entre <span>amigos</span>
              </h1>
              <p className="text-secondary">-Mates artesanales-</p>
            </div>
            <div className="hero-right">
              <ModelMate />
            </div>
          </div>
          <div className="hero-button-container">
            <Button className={"hero-button"} text="NUESTROS MATES" />
            <Button className={"hero-button"} text="NUESTROS COMBOS" />
            <Button className={"hero-button"} text="NUESTROS TERMOS" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;