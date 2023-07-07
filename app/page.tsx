'use client';

import React, { useState, useEffect, useCallback } from 'react';
import DegreesToggle from './components/DegreesToggle';
import CurrentData from './components/CurrentData';
import SavedData from './components/SavedData';
import { getCoords } from './utils/getLocation';
import { getWeather } from './utils/getWeather';

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

  useEffect(() => {
    const fetchLocationAPI = async () => {
      const resp = await getCoords();
      setCoords(resp);
    };
    fetchLocationAPI();
  }, []);

  const fetchWeatherAPI = useCallback(async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords?.coords.latitude}&longitude=${coords?.coords.longitude}&current_weather=true`;
    const resp: Weather = await getWeather(url);
    setWeather(resp);
  }, [coords]);

  useEffect(() => {
    if (coords !== null) {
      console.log('tic');
      fetchWeatherAPI();
    }
  }, [coords, fetchWeatherAPI]);

  return (
    <main className="min-h-screen flex-col items-center justify-between p-10 mx-6">
      <DegreesToggle />
      <CurrentData weather={weather} coords={coords} />
      <SavedData coords={coords} />
    </main>
  );
}
