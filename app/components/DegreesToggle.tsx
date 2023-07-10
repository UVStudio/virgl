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
    celsiusWeight = 'font-bold';
    fahrenheitWeight = 'font-normal';
  } else if (selection === 'F') {
    celsiusWeight = 'font-normal';
    fahrenheitWeight = 'font-bold';
  }

  return (
    <div className="w-full grid justify-end text-sm">
      <div className="flex w-full static w-auto">
        <p
          onClick={toCelsius}
          className={`flex place-items-center text-slate-200 ${celsiusWeight} hover:text-white hover:cursor-pointer`}
        >
          Celsius&nbsp;&nbsp;
        </p>
        <p className="text-slate-200">/</p>
        <p
          onClick={toFahrenheit}
          className={`flex place-items-center text-slate-200 ${fahrenheitWeight} hover:text-white hover:cursor-pointer`}
        >
          &nbsp;&nbsp;Fahrenheit
        </p>
      </div>
    </div>
  );
};

export default DegreesToggle;
