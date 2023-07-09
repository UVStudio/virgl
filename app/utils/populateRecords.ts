export const populateRecords = (setTempArray: (item: string[]) => void) => {
  let secondArray: string[] = [];

  const array = JSON.parse(localStorage.getItem('virglWeather') || '{}');

  let index = array.length - 1;
  while (index >= array.length - 5 && index >= 0) {
    secondArray.push(array[index]);
    index--;
  }

  setTempArray(secondArray);
};
