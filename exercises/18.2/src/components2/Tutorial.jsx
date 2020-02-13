import React, { useEffect, useState } from 'react';

export const Tutorial = () => {
  let [number, setNumber] = useState('');
  let [correct, setCorrect] = useState('');

  useEffect(() => {
    const interval = setInterval(() => { 
      setNumber(() => Math.floor(Math.random() * 100));
    }, 1000);
    if (number % 3 === 0 || number % 5 === 0) {
      setCorrect('Acerto');
    } else {
      setCorrect('');
    }

    return () => clearInterval(interval);
  }, [number]);

  return(
    <div>
      <p>{`O número aleatório é: ${number}`}</p>
      <p>{correct}</p>
    </div>
  );
}
