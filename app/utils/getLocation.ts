import { Coords } from '../page';

const options = {
  enableHighAccuracy: true,
  timeout: 7000,
  maximumAge: 0,
};

export const getCoords = (): Promise<Coords> => {
  if (!navigator.geolocation) {
    throw new Error('No location service');
  }

  return new Promise((res, rej): void => {
    navigator.geolocation.getCurrentPosition(res, rej, options);
  });
};
