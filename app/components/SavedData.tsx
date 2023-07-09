import React, { useState, useEffect, useContext } from 'react';
import { degreesContext } from '../contexts/degreesContext';
import { populateRecords } from '../utils/populateRecords';
import { conversion } from '../utils/conversion';
import { Coords } from '../page';

const SavedData = ({
  coords,
  liveUpdate,
  saveTemp,
  toggleLiveUpdate,
}: {
  coords: Coords | null;
  liveUpdate: boolean;
  saveTemp: (setTempArray: (x: string[]) => void) => void;
  toggleLiveUpdate: () => void;
}) => {
  const [tempArray, setTempArray] = useState<string[]>();

  const degrees = useContext(degreesContext);

  useEffect(() => {
    populateRecords(setTempArray);
  }, []);

  const clearData = () => {
    localStorage.removeItem('virglWeather');
    setTempArray([]);
  };

  const arrayItemConversion = (str: string) => {
    return (
      conversion(Number(str.substring(0, str.indexOf(' '))))
        .toFixed(2)
        .toString() +
      ' F' +
      str.slice(-23)
    );
  };

  return (
    <div className="md:flex flex-row sm:grid mt-8">
      <div className="basis-3/5 py-7 h-64 rounded-lg bg-slate-100 opacity-90 grid justify-items-center">
        {tempArray?.map((item: string) => (
          <p key={Math.random()} className="bg-slate-100 py-2">
            {degrees === 'C' ? item : arrayItemConversion(item)}
          </p>
        ))}
      </div>
      <div className="basis-2/5 grid md:justify-items-end md:my-0 mt-8 justify-items-center">
        <button
          onClick={toggleLiveUpdate}
          className="bg-white rounded-full w-6/12 h-10 bg-slate-200 hover:bg-white active:bg-slate-500 active:text-white"
        >
          {liveUpdate ? 'Live: On' : 'Live: Off'}
        </button>
        <p className="text-white my-3 text-sm">
          Location:{' '}
          {coords
            ? `lat: ${coords?.coords.latitude.toFixed(
                2
              )}, long: ${coords?.coords.longitude.toFixed(2)}`
            : 'loading...'}
        </p>
        <button
          onClick={() => saveTemp(setTempArray)}
          className="bg-white rounded-full w-6/12 h-10 self-end mt-5 bg-slate-200 hover:bg-white active:bg-slate-500 active:text-white"
        >
          Update
        </button>
        <button
          onClick={clearData}
          className="bg-white rounded-full w-6/12 h-10 self-end mt-5 bg-slate-200 hover:bg-white active:bg-slate-500 active:text-white"
        >
          Clear Data
        </button>
      </div>
    </div>
  );
};

export default SavedData;
