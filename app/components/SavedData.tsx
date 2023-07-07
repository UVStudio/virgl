'use client';

import React from 'react';
import { Coords } from '../page';

const SavedData = ({ coords }: { coords: Coords | null }) => {
  return (
    <div className="md:flex flex-row sm:grid mt-8">
      <div className="basis-3/5 py-7 h-64 rounded-lg bg-slate-100 opacity-90 grid justify-items-center">
        <p className="bg-slate-100 py-2">25 C - Time: 10:49</p>
        <p className="bg-slate-100 py-2">25 C - Time: 10:49</p>
        <p className="bg-slate-100 py-2">25 C - Time: 10:49</p>
        <p className="bg-slate-100 py-2">25 C - Time: 10:49</p>
        <p className="bg-slate-100 py-2">25 C - Time: 10:49</p>
      </div>
      <div className="basis-2/5 grid md:justify-items-end md:my-0 mt-8 justify-items-center">
        <button className="bg-white rounded-full w-6/12 h-10 bg-slate-200 hover:bg-white active:bg-slate-500 active:text-white">
          Turn on / off
        </button>
        <p className="text-white my-3 text-sm">
          Location:{' '}
          {`lat: ${coords?.coords.latitude.toFixed(
            2
          )}, long: ${coords?.coords.longitude.toFixed(2)}`}
        </p>
        <button className="bg-white rounded-full w-6/12 h-10 self-end mt-5 bg-slate-200 hover:bg-white active:bg-slate-500 active:text-white">
          Save
        </button>
        <button className="bg-white rounded-full w-6/12 h-10 self-end mt-5 bg-slate-200 hover:bg-white active:bg-slate-500 active:text-white">
          Update
        </button>
      </div>
    </div>
  );
};

export default SavedData;
