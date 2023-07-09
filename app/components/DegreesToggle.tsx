import React, { useState } from 'react';

const DegreesToggle = ({
  setToggleDegrees,
}: {
  setToggleDegrees: (x: string) => void;
}) => {
  const [selection, setSelection] = useState('C');

  const toCelsius = () => {
    setToggleDegrees('C');
    setSelection('C');
  };

  const toFahrenheit = () => {
    setToggleDegrees('F');
    setSelection('F');
  };

  let celsiusWeight = 'bold';
  let fahrenheitWeight = 'normal';

  if (selection === 'C') {
    celsiusWeight = 'bold';
    fahrenheitWeight = 'normal';
  } else if (selection === 'F') {
    celsiusWeight = 'normal';
    fahrenheitWeight = 'bold';
  }

  console.log('cel: ', celsiusWeight);
  console.log('fah: ', fahrenheitWeight);

  return (
    <div className="w-full grid justify-end text-sm">
      <div className="flex w-full static w-auto">
        <p
          onClick={toCelsius}
          className={`flex place-items-center text-slate-200 font-${celsiusWeight} hover:text-white hover:cursor-pointer`}
        >
          Celsius&nbsp;&nbsp;
        </p>
        <p className="text-slate-200">/</p>
        <p
          onClick={toFahrenheit}
          className={`flex place-items-center text-slate-200 font-${fahrenheitWeight} hover:text-white hover:cursor-pointer`}
        >
          &nbsp;&nbsp;Fahrenheit
        </p>
      </div>
    </div>
  );
};

export default DegreesToggle;
