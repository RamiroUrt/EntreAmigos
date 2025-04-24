import { useState } from "react";
import Checkbox from "../../../Button/Checkbox/Checkbox"

const LightbulbContain = ({ onBulbChange }) => {
  const [hasBulb, setHasBulb] = useState(false);

  const handleBulbChange = (checked) => {
    setHasBulb(checked);
    onBulbChange(checked); // Notifica al componente padre (Hero)
  };

  return (
    <div className="w-100">
      <h1 className=" text-white text-primary mb-[1em] mt-[1em]">CON BOMBILLA PICO LORO</h1>
      <div className="lightbulb-contain">
        <Checkbox 
        checked={hasBulb}
        onChange={(e) => handleBulbChange(e.target.checked)}
        className={"" }/>
        <h1>SI, CON BOMBILLA</h1>
        <Checkbox />
        <h1>NO, SIN BOMBILLA</h1>
      </div>
    </div>
  )
}

export default LightbulbContain