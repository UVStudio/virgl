import React from 'react';
import { Weather, Coords } from '../page';
import { convertTime } from '../utils/convertTime';

const CurrentData = ({
  weather,
  coords,
}: {
  weather: Weather | null;
  coords: Coords | null;
}) => {
  const time = convertTime(coords);

  return (
    <div className="text-lg flex justify-end mt-5">
      <div className="">
        <p className="text-white text-right">
          Temp:{' '}
          {weather?.current_weather &&
            weather.current_weather.temperature + ' C'}
        </p>
        <p className="text-white text-right">Date: {time}</p>
      </div>
    </div>
  );
};

export default CurrentData;
