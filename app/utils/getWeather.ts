import { Weather } from '../page';

export const getWeather = async (url: string): Promise<Weather> => {
  return new Promise((res, rej) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          // If the response is successful, parse the JSON data
          res(response.json());
        } else {
          // If the response is not successful, reject the promise with an error message
          rej('Error: ' + response.status);
        }
      })
      .catch((error) => {
        // If there's a network error or any other error during the request, reject the promise
        rej('Error: ' + error.message);
      });
  });
};
