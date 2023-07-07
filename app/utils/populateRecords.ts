export const populateRecords = (setTempArray: (item: string[]) => void) => {
  let array: string[] = [];
  let secondArray: string[] = [];
  for (const key in localStorage) {
    if (key.slice(0, 13) === 'virgl-weather') {
      array.push(localStorage[key]);
    }
  }

  array.sort();
  for (let i = array.length - 1; i >= array.length - 5; i--) {
    secondArray.push(array[i]);
  }
  setTempArray(secondArray);
};
