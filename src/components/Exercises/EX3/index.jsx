"use client";

import React from "react";

function Sequencias() {
  const sequencias = [
    [1, 3, 5, 7],
    [2, 4, 8, 16, 32, 64],
    [0, 1, 4, 9, 16, 25, 36],
    [4, 16, 36, 64],
    [1, 1, 2, 3, 5, 8],
    [2, 10, 12, 16, 17, 18, 19],
  ];

  const completarSequencia = (sequencia) => {
    let proximoElemento;
    switch (sequencia.join(",")) {
      case "1,3,5,7":
        proximoElemento = sequencia[sequencia.length - 1] + 2;
        break;
      case "2,4,8,16,32,64":
        proximoElemento = sequencia[sequencia.length - 1] * 2;
        break;
      case "0,1,4,9,16,25,36":
        const ultimoElemento = sequencia[sequencia.length - 1];
        proximoElemento = Math.pow(Math.sqrt(ultimoElemento) + 1, 2);
        break;
      case "4,16,36,64":
        const raiz = Math.sqrt(sequencia[sequencia.length - 1]) + 1;
        proximoElemento = Math.pow(raiz, 2);
        break;
      case "1,1,2,3,5,8":
        proximoElemento =
          sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
        break;
      case "2,10,12,16,17,18,19":
        const ultimoPrimo = sequencia[sequencia.length - 1];
        for (let i = ultimoPrimo + 1; ; i++) {
          let ehPrimo = true;
          for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
              ehPrimo = false;
              break;
            }
          }
          if (ehPrimo) {
            proximoElemento = i;
            break;
          }
        }
        break;
      default:
        proximoElemento = "Lógica não implementada";
    }

    return proximoElemento;
  };

  const sequenciasCompletas = sequencias.map((sequencia, index) => ({
    sequencia: sequencia.join(", "),
    proximoElemento: completarSequencia(sequencia),
  }));

  return (
    <div>
      {sequenciasCompletas.map((item, index) => (
        <p key={index}>
          <strong>Sequência:</strong> {item.sequencia} -{" "}
          <strong>Próximo elemento:</strong> {item.proximoElemento}
        </p>
      ))}
    </div>
  );
}

export default Sequencias;
