import { Coords } from '../page';

export const convertTime = (coords: Coords | null) => {
  let timeConvert = 0;
  if (coords) {
    timeConvert = coords.timestamp;
  }
  return timeConvert !== 0 ? new Date(timeConvert).toLocaleString() : '';
};
