
import Marquee from "react-marquee-slider";

const words = [
  "#VERANOMATERO DESCUENTO 30%",
  "#VERANOMATERO DESCUENTO DE VERANO",
  "#VERANOMATERO ENVIOS GRATIS A TODO EL PAIS",
  "#VERANOMATERO 3 & 6 COUTAS SIN INTERES",

  "#VERANOMATERO DESCUENTO 30%",
  "#VERANOMATERO DESCUENTO DE VERANO",
  "#VERANOMATERO ENVIOS GRATIS A TODO EL PAIS",
  "#VERANOMATERO 3 & 6 COUTAS SIN INTERES",
];

const Slider = ({className}) => {
  return (
    <div  className={`slider ${className || ""}`}>
      <div className="banner">
        <Marquee
          key={Math.random()}
          velocity={10}
          minScale={0.7}
          delay={0}
          scatterRandomly={false}
          resetAfterTries={100}
          direction="left"
          repeat={Infinity}
        >
          {words.map((word, index) => (
            <p key={index} style={{ padding: "0 50px" }}>
              {word}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Slider