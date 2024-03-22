"use client";

import React, { useState } from "react";

function VerificaSequenciaFibonacci() {
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");

  const verificarSequenciaFibonacci = () => {
    const num = parseInt(numero);
    let a = 0;
    let b = 1;
    let soma = 0;

    if (num === 0 || num === 1) {
      setMensagem(`${num} pertence à sequência de Fibonacci.`);
      return;
    }

    while (soma <= num) {
      soma = a + b;
      a = b;
      b = soma;

      if (soma === num) {
        setMensagem(`${num} pertence à sequência de Fibonacci.`);
        return;
      }
    }

    setMensagem(`${num} não pertence à sequência de Fibonacci.`);
  };

  const handleChange = (event) => {
    setNumero(event.target.value);
  };

  return (
    <div>
      <h2>Verificar Sequência de Fibonacci</h2>
      <input
        type="number"
        value={numero}
        onChange={handleChange}
        placeholder="Informe um número"
      />
      <button onClick={verificarSequenciaFibonacci}>Verificar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default VerificaSequenciaFibonacci;
