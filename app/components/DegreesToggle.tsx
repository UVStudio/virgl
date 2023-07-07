import React from 'react';

const DegreesToggle = () => {
  return (
    <div className="w-full grid justify-end text-sm">
      <div className="flex w-full static w-auto">
        <p className="flex place-items-center text-slate-200 hover:text-white lg:p-0">
          Celsius&nbsp;&nbsp;
        </p>
        <p className="text-slate-200">/</p>
        <p className="flex place-items-center text-slate-200 hover:text-white">
          &nbsp;&nbsp;Fahrenheit
        </p>
      </div>
    </div>
  );
};

export default DegreesToggle;
