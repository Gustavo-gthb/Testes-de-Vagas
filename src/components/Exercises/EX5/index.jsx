"use client";

import React, { useState } from 'react';

function InverteString() {
  const [stringOriginal, setStringOriginal] = useState('');
  const [stringInvertida, setStringInvertida] = useState('');

  const inverterString = (str) => {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      invertedString += str[i];
    }
    return invertedString;
  };

  const handleInputChange = (event) => {
    setStringOriginal(event.target.value);
  };

  const handleInverterClick = () => {
    const invertedString = inverterString(stringOriginal);
    setStringInvertida(invertedString);
  };

  return (
    <div>
      <h2>Inverter String</h2>
      <label>
        String Original:
        <input type="text" value={stringOriginal} onChange={handleInputChange} />
      </label>
      <button onClick={handleInverterClick}>Inverter</button>
      <p>String Invertida: {stringInvertida}</p>
    </div>
  );
}

export default InverteString;