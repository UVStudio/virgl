import React, { useContext } from 'react';
import { degreesContext } from '../contexts/degreesContext';
import { Weather } from '../page';
import { convertTime } from '../utils/convertTime';
import { conversion } from '../utils/conversion';

const CurrentData = ({ weather }: { weather: Weather | null }) => {
  const degrees = useContext(degreesContext);
  const time = convertTime(new Date());

  return (
    <div className="text-lg flex justify-end mt-5">
      <div className="">
        <p className="text-white text-right">
          Temp:{' '}
          {weather?.current_weather &&
            (degrees === 'C'
              ? weather.current_weather.temperature
              : conversion(weather.current_weather.temperature)
            ).toFixed(1) +
              ' ' +
              degrees}
        </p>
        <p className="text-white text-right">Date: {time}</p>
      </div>
    </div>
  );
};

export default CurrentData;
