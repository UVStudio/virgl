'use client';

import React, { useState, useEffect, useCallback } from 'react';
import DegreesToggle from './components/DegreesToggle';
import CurrentData from './components/CurrentData';
import SavedData from './components/SavedData';
import { getCoords } from './utils/getLocation';
import { getWeather } from './utils/getWeather';
import { convertTime } from './utils/convertTime';
import { populateRecords } from './utils/populateRecords';

export interface Weather {
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_bbreviation: string;
  utc_offset_seconds: number;
  current_weather: {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
  };
}

export interface Coords {
  coords: {
    latitude: number;
    longitude: number;
  };
  timestamp: number;
}

export default function Home() {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [liveUpdate, setLiveUpdate] = useState(true);

  const toggleLiveUpdate = () => {
    setLiveUpdate((value) => !value);
  };

  const fetchLocationAPI = useCallback(async () => {
    const resp = await getCoords();
    setCoords(resp);
  }, []);

  const fetchWeatherAPI = useCallback(async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords?.coords.latitude}&longitude=${coords?.coords.longitude}&current_weather=true`;
    const resp: Weather = await getWeather(url);
    setWeather(resp);
  }, [coords]);

  useEffect(() => {
    fetchLocationAPI();
  }, [fetchLocationAPI]);

  useEffect(() => {
    if (coords !== null) {
      fetchWeatherAPI();
      console.log('weather API called');
      if (liveUpdate) {
        const interval = setInterval(() => {
          fetchWeatherAPI();
          fetchLocationAPI();
          console.log('weather API called');
        }, 30000);
        return () => {
          clearInterval(interval);
        };
      }
    }
  }, [coords, liveUpdate, fetchWeatherAPI, fetchLocationAPI]);

  const saveTemp = (setTempArray: (item: string[]) => void) => {
    const time = convertTime(coords);
    localStorage.setItem(
      `virgl-weather-${Date.now()}`,
      `${weather!.current_weather.temperature.toString()} C : ${time}`
    );
    populateRecords(setTempArray);
  };

  return (
    <main className="min-h-screen flex-col items-center justify-between p-10 mx-6">
      <DegreesToggle />
      <CurrentData weather={weather} coords={coords} />
      <SavedData
        coords={coords}
        liveUpdate={liveUpdate}
        saveTemp={saveTemp}
        toggleLiveUpdate={toggleLiveUpdate}
      />
    </main>
  );
}
