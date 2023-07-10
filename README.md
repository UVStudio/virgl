This is a weather app for virgl.io.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Specifications

- The web application must use **Next.js** and **React** function components (not React class components), and ideally, hooks
  - Otherwise, the application can use any other libraries.
  - ES6 is OK, but if you are up for a challenge, try to build it with Typescript.
- The temperature and timestamp must update automatically every 60s.
- There must be a Play/Pause button to temporarily stop the data from updating.
- There must be a **button** to store the current temperature reading, and **another button** to show the five most recently stored temperature readings.
- The design must be **responsive** - feel free to make use of additional libraries to achieve this.
- The temperature value must come from a third party API (details below).
- The design and UX/UI of the app is left up to you. A simple design will work well, but feel free to show your creativity as well.

### Deviations from Specifications

_There must be a **button** to store the current temperature reading, and **another button** to show the five most recently stored temperature readings._

- This has been combined into one **button**, the author feels that it provides a better user experience. Also, the maximum of 5 most recent temperature readings will render upon initial page load using `useEffect`.

- `Windows.Navigator` has been added. Its lat/long data is used to fetch temperature data.

- A Celsius / Fahrenheit toggle has been added for users to switch from one to the other. All temperature readings are fetched and saved as Celsius. The toggle simply changes the UI output.

- A **Clear Data** button has been added to allow users to clean all saved temperature data from **localStorage**

## Video demonstration

- The Live update has been set to every 3 seconds for demonstration purposes.

## Outstanding issues

- The browser sometimes gives a 'hydration' warning message. It does not affect the functionalities of the app.
