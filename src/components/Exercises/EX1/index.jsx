"use client";

import React, { useState } from "react";

function ValueSoma() {
  const [soma, setSoma] = useState(0);

  const calcularSoma = () => {
    let somaCalculada = 0;
    for (let k = 1; k < 13; k++) {
      somaCalculada += k;
    }
    setSoma(somaCalculada);
  };

  return (
    <div>
      <button onClick={calcularSoma}>Calcular Soma</button>
      <p>A soma dos números de 1 a 13 é: {soma}</p>
    </div>
  );
}

export default ValueSoma;
