import { useEffect, useState } from "react";

function Pedido() {
  const [montado, setMontado] = useState(false);
  const [cancelado, setCancelado] = useState(false);

  const handleClick = () => {
    setMontado(false);
    setCancelado(true);
  };

  useEffect(() => {
    if (cancelado) {
      console.log("componente se está por desmontar...");
    } else {
      console.log("componente fue actualizado");
    }
    setTimeout(() => {
      if (!cancelado) {
        console.log("Esto ocurre una sola vez");
        setMontado(true);
      } else {
        console.log("componente fue desmontado");
      }
    }, 500);
  }, [cancelado]);

  return (
    <>
      <h1>Su pedido:</h1>
      {montado ? <h2>pizzas</h2> : null}
      <button onClick={handleClick}>Cancelar pedido</button>
    </>
  );
}

export default Pedido;
