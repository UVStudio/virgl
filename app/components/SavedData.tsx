import React, { useState, useEffect, ReactNode } from 'react';
import { Coords } from '../page';
import { populateRecords } from '../utils/populateRecords';

const SavedData = ({
  coords,
  liveUpdate,
  saveTemp,
  toggleLiveUpdate,
}: {
  coords: Coords | null;
  liveUpdate: boolean;
  saveTemp: (setTempArray: any) => void;
  toggleLiveUpdate: (x: any) => void;
}) => {
  const [tempArray, setTempArray] = useState<any>(); //<Array<string>> doesn't work for TS

  useEffect(() => {
    populateRecords(setTempArray);
  }, []);

  const clearData = () => {
    localStorage.clear();
    setTempArray([]);
  };

  // console.log('live update: ', liveUpdate);

  return (
    <div className="md:flex flex-row sm:grid mt-8">
      <div className="basis-3/5 py-7 h-64 rounded-lg bg-slate-100 opacity-90 grid justify-items-center">
        {tempArray?.map((item: string) => (
          <p key={Math.random()} className="bg-slate-100 py-2">
            {item}
          </p>
        ))}
      </div>
      <div className="basis-2/5 grid md:justify-items-end md:my-0 mt-8 justify-items-center">
        <button
          onClick={toggleLiveUpdate}
          className="bg-white rounded-full w-6/12 h-10 bg-slate-200 hover:bg-white active:bg-slate-500 active:text-white"
        >
          {liveUpdate ? 'Live On' : 'Live Off'}
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
