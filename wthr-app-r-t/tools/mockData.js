const cities = [
  {
    id: 1,
    externalId: 0,
    name: 'budapest',
    country: null,
    canSprayTimes: [
      {
        date: '2021-03-28T14:00:00',
        temperature: 12.8,
        temperaturefeels: 0,
        temperatureMin: 12.57,
        temperatureMax: 12.8,
        humidity: 27,
        weatherMain: 'Clouds',
        weatherDescription: 'szórványos felhőzet',
        weatherIcon: '03d',
        weatherIconId: 802,
        cloudsPercentage: 48,
        windSpeed: 4.84,
        windDirection: 310,
        cityName: 'budapest',
      },
      {
        date: '2021-03-28T17:00:00',
        temperature: 12.41,
        temperaturefeels: 0,
        temperatureMin: 12.25,
        temperatureMax: 12.41,
        humidity: 33,
        weatherMain: 'Clouds',
        weatherDescription: 'erős felhőzet',
        weatherIcon: '04d',
        weatherIconId: 200,
        cloudsPercentage: 77,
        windSpeed: 4.32,
        windDirection: 315,
        cityName: 'budapest',
      },
      {
        date: '2021-03-28T20:00:00',
        temperature: 10.31,
        temperaturefeels: 0,
        temperatureMin: 10.13,
        temperatureMax: 10.31,
        humidity: 59,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 93,
        windSpeed: 3.62,
        windDirection: 291,
        cityName: 'budapest',
      },
      {
        date: '2021-03-29T11:00:00',
        temperature: 11.33,
        temperaturefeels: 0,
        temperatureMin: 11.33,
        temperatureMax: 11.33,
        humidity: 55,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.33,
        windDirection: 278,
        cityName: 'budapest',
      },
      {
        date: '2021-03-29T14:00:00',
        temperature: 15.29,
        temperaturefeels: 0,
        temperatureMin: 15.29,
        temperatureMax: 15.29,
        humidity: 39,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 98,
        windSpeed: 3.77,
        windDirection: 308,
        cityName: 'budapest',
      },
      {
        date: '2021-03-29T17:00:00',
        temperature: 15.37,
        temperaturefeels: 0,
        temperatureMin: 15.37,
        temperatureMax: 15.37,
        humidity: 42,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 89,
        windSpeed: 3.87,
        windDirection: 327,
        cityName: 'budapest',
      },
      {
        date: '2021-03-29T20:00:00',
        temperature: 14.03,
        temperaturefeels: 0,
        temperatureMin: 14.03,
        temperatureMax: 14.03,
        humidity: 52,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 95,
        windSpeed: 2.82,
        windDirection: 323,
        cityName: 'budapest',
      },
      {
        date: '2021-03-29T23:00:00',
        temperature: 12.95,
        temperaturefeels: 0,
        temperatureMin: 12.95,
        temperatureMax: 12.95,
        humidity: 59,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.03,
        windDirection: 323,
        cityName: 'budapest',
      },
      {
        date: '2021-03-30T02:00:00',
        temperature: 11.8,
        temperaturefeels: 0,
        temperatureMin: 11.8,
        temperatureMax: 11.8,
        humidity: 67,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.13,
        windDirection: 349,
        cityName: 'budapest',
      },
      {
        date: '2021-03-30T05:00:00',
        temperature: 10.52,
        temperaturefeels: 0,
        temperatureMin: 10.52,
        temperatureMax: 10.52,
        humidity: 59,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 97,
        windSpeed: 2.04,
        windDirection: 65,
        cityName: 'budapest',
      },
      {
        date: '2021-03-30T08:00:00',
        temperature: 10.44,
        temperaturefeels: 0,
        temperatureMin: 10.44,
        temperatureMax: 10.44,
        humidity: 50,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 98,
        windSpeed: 0.9,
        windDirection: 62,
        cityName: 'budapest',
      },
      {
        date: '2021-03-30T11:00:00',
        temperature: 11.03,
        temperaturefeels: 0,
        temperatureMin: 11.03,
        temperatureMax: 11.03,
        humidity: 48,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 0.75,
        windDirection: 121,
        cityName: 'budapest',
      },
      {
        date: '2021-03-30T14:00:00',
        temperature: 12.21,
        temperaturefeels: 0,
        temperatureMin: 12.21,
        temperatureMax: 12.21,
        humidity: 45,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 0.68,
        windDirection: 118,
        cityName: 'budapest',
      },
      {
        date: '2021-03-30T17:00:00',
        temperature: 13.3,
        temperaturefeels: 0,
        temperatureMin: 13.3,
        temperatureMax: 13.3,
        humidity: 44,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 89,
        windSpeed: 1.25,
        windDirection: 112,
        cityName: 'budapest',
      },
      {
        date: '2021-03-30T20:00:00',
        temperature: 11.64,
        temperaturefeels: 0,
        temperatureMin: 11.64,
        temperatureMax: 11.64,
        humidity: 49,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 87,
        windSpeed: 1.23,
        windDirection: 137,
        cityName: 'budapest',
      },
      {
        date: '2021-03-30T23:00:00',
        temperature: 11.38,
        temperaturefeels: 0,
        temperatureMin: 11.38,
        temperatureMax: 11.38,
        humidity: 52,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 87,
        windSpeed: 0.95,
        windDirection: 142,
        cityName: 'budapest',
      },
      {
        date: '2021-03-31T02:00:00',
        temperature: 10.93,
        temperaturefeels: 0,
        temperatureMin: 10.93,
        temperatureMax: 10.93,
        humidity: 55,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 94,
        windSpeed: 0.95,
        windDirection: 156,
        cityName: 'budapest',
      },
    ],
  },
  {
    id: 8,
    externalId: 0,
    name: 'érd',
    country: null,
    canSprayTimes: [
      {
        date: '2021-03-28T14:00:00',
        temperature: 12.68,
        temperaturefeels: 0,
        temperatureMin: 12.2,
        temperatureMax: 12.68,
        humidity: 30,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 92,
        windSpeed: 5.51,
        windDirection: 311,
        cityName: 'érd',
      },
      {
        date: '2021-03-28T17:00:00',
        temperature: 12.13,
        temperaturefeels: 0,
        temperatureMin: 11.85,
        temperatureMax: 12.13,
        humidity: 36,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 99,
        windSpeed: 4.65,
        windDirection: 318,
        cityName: 'érd',
      },
      {
        date: '2021-03-29T11:00:00',
        temperature: 11.27,
        temperaturefeels: 0,
        temperatureMin: 11.27,
        temperatureMax: 11.27,
        humidity: 56,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.9,
        windDirection: 286,
        cityName: 'érd',
      },
      {
        date: '2021-03-29T14:00:00',
        temperature: 15.17,
        temperaturefeels: 0,
        temperatureMin: 15.17,
        temperatureMax: 15.17,
        humidity: 41,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 96,
        windSpeed: 4.54,
        windDirection: 312,
        cityName: 'érd',
      },
      {
        date: '2021-03-29T17:00:00',
        temperature: 15.13,
        temperaturefeels: 0,
        temperatureMin: 15.13,
        temperatureMax: 15.13,
        humidity: 44,
        weatherMain: 'Clouds',
        weatherDescription: 'erős felhőzet',
        weatherIcon: '04d',
        weatherIconId: 803,
        cloudsPercentage: 81,
        windSpeed: 4.34,
        windDirection: 328,
        cityName: 'érd',
      },
      {
        date: '2021-03-29T20:00:00',
        temperature: 12.84,
        temperaturefeels: 0,
        temperatureMin: 12.84,
        temperatureMax: 12.84,
        humidity: 56,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 90,
        windSpeed: 2.91,
        windDirection: 324,
        cityName: 'érd',
      },
      {
        date: '2021-03-29T23:00:00',
        temperature: 11.92,
        temperaturefeels: 0,
        temperatureMin: 11.92,
        temperatureMax: 11.92,
        humidity: 63,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.35,
        windDirection: 317,
        cityName: 'érd',
      },
      {
        date: '2021-03-30T02:00:00',
        temperature: 11.16,
        temperaturefeels: 0,
        temperatureMin: 11.16,
        temperatureMax: 11.16,
        humidity: 69,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.57,
        windDirection: 335,
        cityName: 'érd',
      },
      {
        date: '2021-03-30T05:00:00',
        temperature: 10.08,
        temperaturefeels: 0,
        temperatureMin: 10.08,
        temperatureMax: 10.08,
        humidity: 67,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 98,
        windSpeed: 1.95,
        windDirection: 50,
        cityName: 'érd',
      },
      {
        date: '2021-03-30T11:00:00',
        temperature: 10.61,
        temperaturefeels: 0,
        temperatureMin: 10.61,
        temperatureMax: 10.61,
        humidity: 54,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 1.06,
        windDirection: 103,
        cityName: 'érd',
      },
      {
        date: '2021-03-30T14:00:00',
        temperature: 12.38,
        temperaturefeels: 0,
        temperatureMin: 12.38,
        temperatureMax: 12.38,
        humidity: 50,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 99,
        windSpeed: 1.17,
        windDirection: 112,
        cityName: 'érd',
      },
      {
        date: '2021-03-30T17:00:00',
        temperature: 13,
        temperaturefeels: 0,
        temperatureMin: 13,
        temperatureMax: 13,
        humidity: 51,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 89,
        windSpeed: 1.79,
        windDirection: 111,
        cityName: 'érd',
      },
      {
        date: '2021-03-30T20:00:00',
        temperature: 10.62,
        temperaturefeels: 0,
        temperatureMin: 10.62,
        temperatureMax: 10.62,
        humidity: 56,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 88,
        windSpeed: 1.67,
        windDirection: 134,
        cityName: 'érd',
      },
      {
        date: '2021-03-30T23:00:00',
        temperature: 10.53,
        temperaturefeels: 0,
        temperatureMin: 10.53,
        temperatureMax: 10.53,
        humidity: 57,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 92,
        windSpeed: 1.2,
        windDirection: 145,
        cityName: 'érd',
      },
      {
        date: '2021-03-31T02:00:00',
        temperature: 10.13,
        temperaturefeels: 0,
        temperatureMin: 10.13,
        temperatureMax: 10.13,
        humidity: 58,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 96,
        windSpeed: 1.2,
        windDirection: 144,
        cityName: 'érd',
      },
    ],
  },
  {
    id: 9,
    externalId: 0,
    name: 'gárdony',
    country: null,
    canSprayTimes: [
      {
        date: '2021-03-28T14:00:00',
        temperature: 12.89,
        temperaturefeels: 0,
        temperatureMin: 12.62,
        temperatureMax: 12.89,
        humidity: 34,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 89,
        windSpeed: 5.4,
        windDirection: 312,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-28T17:00:00',
        temperature: 12.45,
        temperaturefeels: 0,
        temperatureMin: 12.26,
        temperatureMax: 12.45,
        humidity: 43,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 99,
        windSpeed: 4.78,
        windDirection: 302,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-29T11:00:00',
        temperature: 12.35,
        temperaturefeels: 0,
        temperatureMin: 12.35,
        temperatureMax: 12.35,
        humidity: 53,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.93,
        windDirection: 290,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-29T14:00:00',
        temperature: 16.11,
        temperaturefeels: 0,
        temperatureMin: 16.11,
        temperatureMax: 16.11,
        humidity: 40,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 91,
        windSpeed: 4.87,
        windDirection: 314,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-29T17:00:00',
        temperature: 15.67,
        temperaturefeels: 0,
        temperatureMin: 15.67,
        temperatureMax: 15.67,
        humidity: 45,
        weatherMain: 'Clouds',
        weatherDescription: 'erős felhőzet',
        weatherIcon: '04d',
        weatherIconId: 803,
        cloudsPercentage: 72,
        windSpeed: 5.08,
        windDirection: 330,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-29T20:00:00',
        temperature: 12.63,
        temperaturefeels: 0,
        temperatureMin: 12.63,
        temperatureMax: 12.63,
        humidity: 58,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 85,
        windSpeed: 2.83,
        windDirection: 335,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-29T23:00:00',
        temperature: 11.97,
        temperaturefeels: 0,
        temperatureMin: 11.97,
        temperatureMax: 11.97,
        humidity: 62,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.18,
        windDirection: 312,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-30T02:00:00',
        temperature: 11.38,
        temperaturefeels: 0,
        temperatureMin: 11.38,
        temperatureMax: 11.38,
        humidity: 68,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.71,
        windDirection: 327,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-30T05:00:00',
        temperature: 10.71,
        temperaturefeels: 0,
        temperatureMin: 10.71,
        temperatureMax: 10.71,
        humidity: 73,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 1.83,
        windDirection: 9,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-30T11:00:00',
        temperature: 10.89,
        temperaturefeels: 0,
        temperatureMin: 10.89,
        temperatureMax: 10.89,
        humidity: 63,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 1.58,
        windDirection: 77,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-30T14:00:00',
        temperature: 13.24,
        temperaturefeels: 0,
        temperatureMin: 13.24,
        temperatureMax: 13.24,
        humidity: 56,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 98,
        windSpeed: 1.99,
        windDirection: 104,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-30T17:00:00',
        temperature: 13.76,
        temperaturefeels: 0,
        temperatureMin: 13.76,
        temperatureMax: 13.76,
        humidity: 55,
        weatherMain: 'Clouds',
        weatherDescription: 'erős felhőzet',
        weatherIcon: '04d',
        weatherIconId: 803,
        cloudsPercentage: 83,
        windSpeed: 2.49,
        windDirection: 107,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-30T20:00:00',
        temperature: 10.56,
        temperaturefeels: 0,
        temperatureMin: 10.56,
        temperatureMax: 10.56,
        humidity: 65,
        weatherMain: 'Clouds',
        weatherDescription: 'erős felhőzet',
        weatherIcon: '04n',
        weatherIconId: 803,
        cloudsPercentage: 84,
        windSpeed: 1.93,
        windDirection: 122,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-30T23:00:00',
        temperature: 10.47,
        temperaturefeels: 0,
        temperatureMin: 10.47,
        temperatureMax: 10.47,
        humidity: 62,
        weatherMain: 'Clouds',
        weatherDescription: 'erős felhőzet',
        weatherIcon: '04n',
        weatherIconId: 803,
        cloudsPercentage: 83,
        windSpeed: 1.28,
        windDirection: 140,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-31T02:00:00',
        temperature: 10.2,
        temperaturefeels: 0,
        temperatureMin: 10.2,
        temperatureMax: 10.2,
        humidity: 62,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 91,
        windSpeed: 1.32,
        windDirection: 136,
        cityName: 'gárdony',
      },
      {
        date: '2021-03-31T08:00:00',
        temperature: 10.56,
        temperaturefeels: 0,
        temperatureMin: 10.56,
        temperatureMax: 10.56,
        humidity: 63,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 97,
        windSpeed: 1.19,
        windDirection: 147,
        cityName: 'gárdony',
      },
    ],
  },
  {
    id: 10,
    externalId: 0,
    name: 'martonvásár',
    country: null,
    canSprayTimes: [
      {
        date: '2021-03-28T14:00:00',
        temperature: 12.84,
        temperaturefeels: 0,
        temperatureMin: 12.52,
        temperatureMax: 12.84,
        humidity: 39,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 86,
        windSpeed: 5.76,
        windDirection: 312,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-28T17:00:00',
        temperature: 12.48,
        temperaturefeels: 0,
        temperatureMin: 12.29,
        temperatureMax: 12.48,
        humidity: 41,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 99,
        windSpeed: 4.86,
        windDirection: 318,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-29T11:00:00',
        temperature: 11.95,
        temperaturefeels: 0,
        temperatureMin: 11.95,
        temperatureMax: 11.95,
        humidity: 55,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 3.12,
        windDirection: 289,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-29T14:00:00',
        temperature: 15.77,
        temperaturefeels: 0,
        temperatureMin: 15.77,
        temperatureMax: 15.77,
        humidity: 41,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 93,
        windSpeed: 4.94,
        windDirection: 314,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-29T17:00:00',
        temperature: 15.54,
        temperaturefeels: 0,
        temperatureMin: 15.54,
        temperatureMax: 15.54,
        humidity: 45,
        weatherMain: 'Clouds',
        weatherDescription: 'erős felhőzet',
        weatherIcon: '04d',
        weatherIconId: 803,
        cloudsPercentage: 68,
        windSpeed: 4.85,
        windDirection: 330,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-29T20:00:00',
        temperature: 12.65,
        temperaturefeels: 0,
        temperatureMin: 12.65,
        temperatureMax: 12.65,
        humidity: 58,
        weatherMain: 'Clouds',
        weatherDescription: 'erős felhőzet',
        weatherIcon: '04n',
        weatherIconId: 803,
        cloudsPercentage: 83,
        windSpeed: 3.04,
        windDirection: 327,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-29T23:00:00',
        temperature: 11.94,
        temperaturefeels: 0,
        temperatureMin: 11.94,
        temperatureMax: 11.94,
        humidity: 64,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.48,
        windDirection: 315,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-30T02:00:00',
        temperature: 11.36,
        temperaturefeels: 0,
        temperatureMin: 11.36,
        temperatureMax: 11.36,
        humidity: 69,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 2.88,
        windDirection: 330,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-30T05:00:00',
        temperature: 10.5,
        temperaturefeels: 0,
        temperatureMin: 10.5,
        temperatureMax: 10.5,
        humidity: 73,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 1.84,
        windDirection: 33,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-30T11:00:00',
        temperature: 10.88,
        temperaturefeels: 0,
        temperatureMin: 10.88,
        temperatureMax: 10.88,
        humidity: 58,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 100,
        windSpeed: 1.32,
        windDirection: 94,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-30T14:00:00',
        temperature: 12.76,
        temperaturefeels: 0,
        temperatureMin: 12.76,
        temperatureMax: 12.76,
        humidity: 53,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 97,
        windSpeed: 1.69,
        windDirection: 112,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-30T17:00:00',
        temperature: 13.5,
        temperaturefeels: 0,
        temperatureMin: 13.5,
        temperatureMax: 13.5,
        humidity: 53,
        weatherMain: 'Clouds',
        weatherDescription: 'erős felhőzet',
        weatherIcon: '04d',
        weatherIconId: 803,
        cloudsPercentage: 82,
        windSpeed: 2.17,
        windDirection: 111,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-30T20:00:00',
        temperature: 10.39,
        temperaturefeels: 0,
        temperatureMin: 10.39,
        temperatureMax: 10.39,
        humidity: 62,
        weatherMain: 'Clouds',
        weatherDescription: 'erős felhőzet',
        weatherIcon: '04n',
        weatherIconId: 803,
        cloudsPercentage: 82,
        windSpeed: 1.85,
        windDirection: 130,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-30T23:00:00',
        temperature: 10.53,
        temperaturefeels: 0,
        temperatureMin: 10.53,
        temperatureMax: 10.53,
        humidity: 60,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 91,
        windSpeed: 1.33,
        windDirection: 147,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-31T02:00:00',
        temperature: 10.16,
        temperaturefeels: 0,
        temperatureMin: 10.16,
        temperatureMax: 10.16,
        humidity: 61,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04n',
        weatherIconId: 804,
        cloudsPercentage: 96,
        windSpeed: 1.33,
        windDirection: 139,
        cityName: 'martonvásár',
      },
      {
        date: '2021-03-31T08:00:00',
        temperature: 10.44,
        temperaturefeels: 0,
        temperatureMin: 10.44,
        temperatureMax: 10.44,
        humidity: 63,
        weatherMain: 'Clouds',
        weatherDescription: 'borús égbolt',
        weatherIcon: '04d',
        weatherIconId: 804,
        cloudsPercentage: 94,
        windSpeed: 1.21,
        windDirection: 156,
        cityName: 'martonvásár',
      },
    ],
  },
];

const information = [
  {
    id: 1,
    version: '1.1',
    lastLoadTime: '2021-04-10T06:57:20.7824327',
  },
];

module.exports = {
  cities,
  information,
};
