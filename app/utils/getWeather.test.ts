/**
 * @jest-environment jsdom
 */

interface Weather {
  latitude: number;
  longitude: number;
  current_weather: {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
  };
}

const url = `https://api.open-meteo.com/v1/forecast?latitude=10&longitude=10&current_weather=true`;

// Mock fetch function
const mockFetch = (response: Response | {}, status: number = 200) =>
  jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(response),
  });

global.fetch = mockFetch({});

const { getWeather } = require('./getWeather'); // Replace with the correct path to your module

describe('getWeather', () => {
  afterEach(() => {
    // Clear mock after each test
    (fetch as jest.Mock).mockClear();
  });

  it('should resolve with weather data on successful fetch', async () => {
    const mockWeatherData: Weather = {
      latitude: 10,
      longitude: 10,
      current_weather: {
        is_day: 5,
        temperature: 25,
        time: '12/19/2012, 10:00:00 PM',
        weathercode: 1,
      },
    };

    // Mock a successful fetch
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockWeatherData),
    });

    const result = await getWeather(url);
    expect(result).toEqual(mockWeatherData);
  });

  it('should reject with an error on non-2xx status code', async () => {
    const mockErrorResponse = { message: 'Not found' };

    // Mock a non-2xx status code
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: () => Promise.resolve(mockErrorResponse),
    });

    await expect(getWeather(url)).rejects.toThrow('Error: 404');
  });

  it('should reject with an error on fetch failure', async () => {
    // Mock fetch failure
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(getWeather(url)).rejects.toThrow('Error: Network error');
  });
});
