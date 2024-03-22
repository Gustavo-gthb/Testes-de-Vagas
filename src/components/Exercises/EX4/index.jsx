"use client"

import React, { useState } from 'react';

function InterruptoresELampadas() {
  // Definindo os estados das lâmpadas e dos interruptores
  const [lampada1, setLampada1] = useState(false);
  const [lampada2, setLampada2] = useState(false);
  const [lampada3, setLampada3] = useState(false);

  const [interruptor1, setInterruptor1] = useState(false);
  const [interruptor2, setInterruptor2] = useState(false);
  const [interruptor3, setInterruptor3] = useState(false);

  // Função para trocar o estado de uma lâmpada
  const toggleLampada = (numeroLampada) => {
    switch (numeroLampada) {
      case 1:
        setLampada1(!lampada1);
        break;
      case 2:
        setLampada2(!lampada2);
        break;
      case 3:
        setLampada3(!lampada3);
        break;
      default:
        break;
    }
  };

  // Função para ligar/desligar um interruptor e verificar o estado das lâmpadas
  const verificarLampadas = (numeroInterruptor) => {
    switch (numeroInterruptor) {
      case 1:
        setInterruptor1(!interruptor1);
        break;
      case 2:
        setInterruptor2(!interruptor2);
        break;
      case 3:
        setInterruptor3(!interruptor3);
        break;
      default:
        break;
    }

    // Verificar estado das lâmpadas após ligar/desligar o interruptor
    if (numeroInterruptor === 1) {
      if (interruptor1) {
        toggleLampada(1); // Se o interruptor 1 for ligado, a lâmpada 1 será ligada
      }
    } else if (numeroInterruptor === 2) {
      if (interruptor2) {
        toggleLampada(2); // Se o interruptor 2 for ligado, a lâmpada 2 será ligada
      }
    } else if (numeroInterruptor === 3) {
      if (interruptor3) {
        toggleLampada(3); // Se o interruptor 3 for ligado, a lâmpada 3 será ligada
      }
    }
  };

  return (
    <div>
      <h2>Interruptores e Lâmpadas</h2>
      <p>Interruptor 1: {interruptor1 ? 'Ligado' : 'Desligado'}</p>
      <p>Interruptor 2: {interruptor2 ? 'Ligado' : 'Desligado'}</p>
      <p>Interruptor 3: {interruptor3 ? 'Ligado' : 'Desligado'}</p>
      <p>Lâmpada 1: {lampada1 ? 'Ligada' : 'Desligada'}</p>
      <p>Lâmpada 2: {lampada2 ? 'Ligada' : 'Desligada'}</p>
      <p>Lâmpada 3: {lampada3 ? 'Ligada' : 'Desligada'}</p>
      <button onClick={() => verificarLampadas(1)}>Ligar/Desligar Interruptor 1</button>
      <button onClick={() => verificarLampadas(2)}>Ligar/Desligar Interruptor 2</button>
      <button onClick={() => verificarLampadas(3)}>Ligar/Desligar Interruptor 3</button>
    </div>
  );
}

export default InterruptoresELampadas;