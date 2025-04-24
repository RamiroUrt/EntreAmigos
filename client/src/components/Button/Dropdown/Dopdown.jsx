import { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ setSortOrder }) => {
  const [value, setValue] = useState("menor_precio");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    setSortOrder(selectedValue);
  };

  return (
    <div className="select">
      <div className="selected">
        {value === "menor_precio"
          ? "Menor Precio"
          : value === "mayor_precio"
          ? "Mayor Precio"
          : "Más Relevante"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className="arrow"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </div>
      <div className="options">
        <div title="all">
          <input
            id="menor_precio"
            name="option"
            type="radio"
            value="menor_precio"
            checked={value === "menor_precio"}
            onChange={handleChange}
          />
          <label className="option" htmlFor="menor_precio">Menor Precio</label>
        </div>
        <div title="option-1">
          <input
            id="mayor_precio"
            name="option"
            type="radio"
            value="mayor_precio"
            checked={value === "mayor_precio"}
            onChange={handleChange}
          />
          <label className="option" htmlFor="mayor_precio">Mayor Precio</label>
        </div>
        <div title="option-2">
          <input
            id="relevante"
            name="option"
            type="radio"
            value="relevante"
            checked={value === "relevante"}
            onChange={handleChange}
          />
          <label className="option" htmlFor="relevante">Más Relevante</label>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
