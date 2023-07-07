const options = {
  enableHighAccuracy: true,
  timeout: 7000,
  maximumAge: 0,
};

export const getCoords = (): any => {
  if (!navigator.geolocation) {
    throw new Error('No location service');
  }

  return new Promise((res, rej) => {
    return navigator.geolocation.getCurrentPosition(res, rej, options);
  });
};
