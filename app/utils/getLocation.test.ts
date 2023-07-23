/**
 * @jest-environment jsdom
 */

const { getCoords } = require('./getLocation');

interface Coords {
  coords: {
    latitude: number;
    longitude: number;
  };
}

// Mock navigator.geolocation
const mockGeolocation = {
  getCurrentPosition: jest.fn(),
};

//@ts-ignores-
global.navigator.geolocation = mockGeolocation;

describe('Get user location', () => {
  afterEach(() => {
    // Clear mock after each test
    mockGeolocation.getCurrentPosition.mockClear();
  });

  test('should resolve with coordinates on successful retrieval', async () => {
    const mockCoords: Coords = {
      coords: {
        latitude: 12.3456,
        longitude: 78.91011,
      },
    };

    // Mock a successful position retrieval
    mockGeolocation.getCurrentPosition.mockImplementation((successCallback) => {
      successCallback(mockCoords);
    });

    const result = await getCoords();
    expect(result).toEqual(mockCoords);
  });

  test('should reject with an error on location service failure', async () => {
    // Mock an error when location service is not available
    mockGeolocation.getCurrentPosition.mockImplementation(
      (_, errorCallback) => {
        errorCallback(new Error('No location service'));
      }
    );

    await expect(getCoords()).rejects.toThrow('No location service');
  });
});
