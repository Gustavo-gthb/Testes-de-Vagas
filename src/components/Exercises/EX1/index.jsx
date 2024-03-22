"use client";

import React, { useState, useEffect } from 'react';

function SomaNumeros() {
  const INDICE = 13;
  const [soma, setSoma] = useState(0);

  // Função para calcular a soma dos números de 1 a 13
  const calcularSoma = () => {
    let somaCalculada = 0;
    for (let i = 1; i <= INDICE; i++) {
      somaCalculada += i;
    }
    setSoma(somaCalculada);
  };

  // Chamando a função para calcular a soma apenas uma vez, quando o componente é montado
  useEffect(() => {
    calcularSoma();
  }, []); // O array vazio indica que o efeito só deve ser executado uma vez, quando o componente é montado

  return (
    <div>
      <h2>Soma dos Números de 1 a 13</h2>
      <p>A soma é: {soma}</p>
    </div>
  );
}

export default SomaNumeros;
