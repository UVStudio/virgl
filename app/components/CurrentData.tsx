import React, { useContext } from 'react';
import { degreesContext } from '../contexts/degreesContext';
import { Weather, Coords } from '../page';
import { convertTime } from '../utils/convertTime';
import { conversion } from '../utils/conversion';

const CurrentData = ({
  weather,
  coords,
}: {
  weather: Weather | null;
  coords: Coords | null;
}) => {
  const degrees = useContext(degreesContext);
  const time = convertTime(coords);

  return (
    <div className="text-lg flex justify-end mt-5">
      <div className="">
        <p className="text-white text-right">
          Temp:{' '}
          {weather?.current_weather &&
            (degrees === 'C'
              ? weather.current_weather.temperature
              : conversion(weather.current_weather.temperature)
            ).toFixed(2) +
              ' ' +
              degrees}
        </p>
        <p className="text-white text-right">Date: {time}</p>
      </div>
    </div>
  );
};

export default CurrentData;
