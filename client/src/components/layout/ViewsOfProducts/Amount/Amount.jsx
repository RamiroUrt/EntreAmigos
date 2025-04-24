/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Amount = ({ onAmountChange, quantity: initialQuantity }) => {
  const [amount, setAmount] = useState(initialQuantity); // Inicializar con la cantidad proporcionada

  // Sincronizar el estado local con la prop quantity
  useEffect(() => {
    setAmount(initialQuantity);
  }, [initialQuantity]);

  const handleDecrement = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      onAmountChange(newAmount); // Notificar al componente padre
    }
  };

  const handleIncrement = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    onAmountChange(newAmount); // Notificar al componente padre
  };

  return (
    <>
      <h1 className="text-primary text-white mt-[1em] mb-[1em]">CANTIDAD</h1>
      <div className="px-[20px]">
        <div className="amount-button">
          <button onClick={handleDecrement} disabled={amount === 1}>
            -
          </button>
          <h1 className="text-primary text-white">{amount}</h1>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </>
  );
};

export default Amount;