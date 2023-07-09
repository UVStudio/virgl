import { Weather } from '../page';

export const getWeather = async (url: string): Promise<Weather> => {
  return new Promise((res, rej) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          res(response.json());
        } else {
          rej('Error: ' + response.status);
        }
      })
      .catch((error) => {
        rej('Error: ' + error.message);
      });
  });
};
