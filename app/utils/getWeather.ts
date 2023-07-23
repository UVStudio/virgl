import { Weather } from '../page';

export const getWeather = async (url: string): Promise<Weather> => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  } catch (error) {
    throw new Error('Error: ' + (error as Error).message);
  }
};
